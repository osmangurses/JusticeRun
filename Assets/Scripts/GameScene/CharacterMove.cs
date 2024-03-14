using DG.Tweening;
using GameAnalyticsSDK;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;

public class CharacterMove : MonoBehaviour
{
    public static CharacterMove Instance;   
    public bool isOver;
    public float speedUp,startSpeed,flashLightTime;
    Rigidbody rb;
    private float speedChangeValue;
    public ParticleSystem runEffect,dollarCollectEffect;
    Animator animationController;
    public GameManager gameManager;
    public bool shielded,boosted;
    public Text totalAmount,collectedMoney;
    public SkinnedMeshRenderer model;
    Tweener collectedMoneyTextChangeColorTween;
    public GameObject patten1, patten2;
    public CameraFollow cameraFollow;
    void Start()
    {
        flashLightTime = 2f;
        startSpeed = 0.72f*(PlayerPrefs.GetInt("SpeedUpdatedIndex")* PlayerPrefs.GetInt("SpeedUpdatedIndex")) + 16.5f;
        //gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent<GameManager>();
        rb= GetComponent<Rigidbody>();
        animationController= GetComponent<Animator>();
        if (PlayerPrefs.GetInt("SpeedUpdatedIndex")!=0)
        {
            speedUp = PlayerPrefs.GetInt("SpeedUpdatedIndex")*0.001f;
        }
        else { speedUp = 0.001f; }
        UpdateAmount(0);
       
    }

    void Homurdan()
    {
        gameManager.homurdanmaSound.Play();
    }
    void FlashLightEffect()
    {
        if (flashLightTime>0.2f) {
            if (model.enabled == true) { model.enabled = false; }
            else { model.enabled = true; }
            flashLightTime -=0.2f;
            Invoke("FlashLightEffect", 0.2f);
        }
        else
        {
            flashLightTime = 2f;
            model.enabled = true;
        }
        
    }
    void CollectMoney(int collectMoney)
    {
        collectedMoneyTextChangeColorTween.Complete();
        collectedMoney.text = "+" + collectMoney.ToString();
        collectedMoney.color = new Color(0, 255, 0, 255);
        collectedMoneyTextChangeColorTween = collectedMoney.DOFade(0,1f);
        collectedMoneyTextChangeColorTween.Play();
        UpdateAmount(collectMoney);
    }
    void UpdateAmount(int collectedMoney)
    {
        PlayerPrefs.SetInt("TotalAmount",PlayerPrefs.GetInt("TotalAmount")+collectedMoney);
      
        if (PlayerPrefs.GetInt("TotalAmount")>=1000000)
        {
            totalAmount.text = (PlayerPrefs.GetInt("TotalAmount") / 1000000).ToString() + "." + ((PlayerPrefs.GetInt("TotalAmount") / 100000) % 10).ToString() + "M";
        }
        else if (PlayerPrefs.GetInt("TotalAmount")>=1000)
        {
            totalAmount.text = (PlayerPrefs.GetInt("TotalAmount") / 1000).ToString() + "." + ((PlayerPrefs.GetInt("TotalAmount") / 100) % 10).ToString() + "K";
        }
        else
        {
            totalAmount.text = PlayerPrefs.GetInt("TotalAmount").ToString();
        }
    }
    void ChangeSpeed() //Ana karakterin hýzýný deðiþtirmek için kullanýlýr
    {
        startSpeed+= speedChangeValue;
        shielded = false;
        
    }
    void FinishedCoffe()
    {
        
        startSpeed-=15;
        boosted = false;
    }
    void FinishedVagon()
    {
        if (boosted)
        {
            startSpeed -= 20;
            transform.GetChild(5).gameObject.SetActive(false);
            boosted = false;
        }
        gameManager.patenVagonSound.Stop();

    }
    void FinishedSledge()
    {
        if (boosted)
        {
            startSpeed -= 20;
            transform.GetChild(6).gameObject.SetActive(false);
            boosted = false;
        }
        gameManager.patenVagonSound.Stop();
        animationController.speed = 1;
    }
    void FinishedPaten()
    {
        startSpeed -= 18;
        boosted= false;
        patten1.SetActive(false);
        patten2.SetActive(false);
        transform.GetChild(6).gameObject.SetActive(false);
        gameManager.patenVagonSound.Stop();

    }
    public void Failed() //Enerji bitmesi gibi durumlarda oyunu fail eylemine sokar
    {
        PlayerPrefs.SetInt("FailCounter",PlayerPrefs.GetInt("FailCounter")+1);
        Invoke("Homurdan",1.5f);
        isOver = true;
        cameraFollow.isOver = true;
        startSpeed = 0;
        speedUp = 0;
        rb.velocity = Vector3.zero;
        Invoke("ChangeSpeed", 0.1f);
        animationController.SetTrigger("isFailed");
        GameObject[] obstacles = GameObject.FindGameObjectsWithTag("Obstacle");
        foreach (GameObject obstacle in obstacles)
        { Destroy(obstacle); }
    }
    void SmallerPolice()
    {
        boosted= false;
        transform.GetChild(0).DOScale(transform.GetChild(0).localScale/2.5f, 1f).OnComplete(() =>
                                shielded = false);
    }
    private void OnTriggerEnter(Collider other)
    {

        if (other.tag=="Coffe")
        {
            gameManager.drinkSound.Play();
            boosted= true;
           
            Destroy(other.gameObject);
            runEffect.Play();
            startSpeed += 15;
            Invoke("FinishedCoffe", 2.5f);


        }
        else if (other.tag=="Obstacle")
        {
            if (!shielded && (!transform.GetChild(5).gameObject.activeSelf&& !transform.GetChild(6).gameObject.activeSelf))
            {   shielded= true;
                gameManager.energyLevel -= 0.15f;
                Destroy(other.GetComponent<BoxCollider>());
                animationController.SetTrigger("isHit");
                speedChangeValue = startSpeed - 4;
                startSpeed -= startSpeed - 2;
                Invoke("ChangeSpeed", 0.5f);

            }
            else if (transform.GetChild(5).gameObject.activeSelf)
            {
               FinishedVagon();
            }
            else if (transform.GetChild(6)!=null && transform.GetChild(6).gameObject.activeSelf)
            {
               FinishedSledge();
            }
            
            gameManager.hitSound.Play();

        }
        else if (other.tag=="Thief")
        {
            gameManager.thiefCount--;
            gameManager.energyLevel += 0.2f;
            UpdateAmount(other.GetComponent<Thief>().moneyInBag);
            CollectMoney(other.GetComponent<Thief>().moneyInBag);
            if (gameManager.thiefCount==0)
            {
                if (PlayerPrefs.GetInt("ChoosenMap")!=5 && PlayerPrefs.GetInt("ChoosenMap")== PlayerPrefs.GetInt("UnlockedMap"))
                {
                    GameAnalytics.NewDesignEvent($"LevelComplete:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Updates:SpeedUpdate_{PlayerPrefs.GetInt("SpeedUpdatedIndex")}");
                    GameAnalytics.NewDesignEvent($"LevelComplete:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Updates:IncomeUpdate_{PlayerPrefs.GetInt("IncomeUpdatedIndex")}");
                    GameAnalytics.NewDesignEvent($"LevelComplete:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Updates:EnergyUpdate_{PlayerPrefs.GetInt("EnergyUpdatedIndex")}");
                    GameAnalytics.NewDesignEvent($"LevelComplete:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Updates:LuckUpdate_{PlayerPrefs.GetInt("LuckUpdatedIndex")}");
                    GameAnalytics.NewDesignEvent($"LevelComplete:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Attempt:{PlayerPrefs.GetInt("FailCounter")}");
                    PlayerPrefs.SetInt("FailCounter",0);
                    PlayerPrefs.SetInt("UnlockedMap", PlayerPrefs.GetInt("ChoosenMap") + 1);
                    PlayerPrefs.SetInt("SpeedUpdatedIndex", 0);
                    PlayerPrefs.SetInt("IncomeUpdatedIndex", 0);
                    PlayerPrefs.SetInt("EnergyUpdatedIndex", 0);
                    PlayerPrefs.SetInt("LuckUpdatedIndex", 0);
                    PlayerPrefs.SetInt("TotalAmount", 0);
                }
                else if (PlayerPrefs.GetInt("ChoosenMap") == PlayerPrefs.GetInt("UnlockedMap"))
                {
                    PlayerPrefs.SetInt("OpenEndless",0);
                }
                isOver = true;
                other.GetComponent<Thief>().startSpeed = 0;
                cameraFollow.isOver = true;
                startSpeed = 0;
                speedUp = 0;
                
                rb.velocity = Vector3.zero; 
                Invoke("ChangeSpeed", 0.1f);
                transform.position = transform.position + new Vector3(1.5f, 0, 1);
                animationController.SetTrigger("isOver");
                GameObject[] obstacles =GameObject.FindGameObjectsWithTag("Obstacle");
                foreach (GameObject obstacle in obstacles)
                {
                    Destroy(obstacle);
                }
                
            }
            

        }
        else if (other.tag=="Shootable")
        {
            other.gameObject.GetComponent<CapsuleCollider>().gameObject.SetActive(true);
            Destroy(other.gameObject, 6f);
            other.transform.DOMoveZ(other.transform.position.z+180,6);
            other.transform.DORotate(new Vector3(180, 0, 0), 6);
            
        }
        else if(other.gameObject.tag=="Dollars")
        {
            gameManager.collectMoneySound.Play();
           // UpdateAmount((gameManager.nextThief.GetComponent<Thief>().moneyInBag/4));
            CollectMoney((gameManager.nextThief.GetComponent<Thief>().moneyInBag / 4));
            Destroy(other.gameObject);
            dollarCollectEffect.Play();
        }
        else if (other.gameObject.tag=="Donut") 
        {
            gameManager.eatSound.Play();
            boosted = true;
            
                shielded = true;
                Vector3 tempScale = transform.GetChild(0).localScale;
            transform.GetChild(0).DOScale(transform.GetChild(0).localScale * 2.5f, 0.5f);
            Invoke("SmallerPolice", 8.5f);
            Invoke("FlashLightEffect",7f);
            Destroy(other.gameObject);
           /* GameObject[] donuts = GameObject.FindGameObjectsWithTag("Donut");
            GameObject[] coffes = GameObject.FindGameObjectsWithTag("Coffe");
            foreach (GameObject obj in coffes)
            {
                Destroy(obj);
            }
            foreach (GameObject obj in donuts)
            {
                Destroy(obj);
            }*/

        }
        else if (other.gameObject.tag=="Apple")
        {

            gameManager.eatSound.Play();
            gameManager.energyLevel += 0.3f;
            startSpeed += 0.3f;
            //boosted= true;
            Destroy(other.gameObject);
            
        }
        else if (other.gameObject.tag == "Vagon")
        {
            gameManager.patenVagonSound.Play();
            boosted = true;
            Destroy(other.gameObject);
            startSpeed += 20;
            Invoke("FinishedVagon", 2.5f);
            Destroy(other.gameObject);
           /* GameObject[] portals = GameObject.FindGameObjectsWithTag("Vagon");
            GameObject[] vagons = GameObject.FindGameObjectsWithTag("Portal");
            foreach (GameObject obj in vagons){Destroy(obj);}
            foreach (GameObject obj in portals){Destroy(obj);}*/
            transform.GetChild(5).gameObject.SetActive(true);
        }
        else if (other.gameObject.tag=="Paten")
        {
            gameManager.patenVagonSound.Play();

            transform.GetChild(6).gameObject.SetActive(true);
            startSpeed += 18;
            Invoke("FinishedPaten",4f);
            Destroy(other.gameObject);
            patten2.SetActive(true);
            patten1.SetActive(true);
            boosted = true;

        }
        else if (other.gameObject.tag=="RedBull")
        {
            gameManager.drinkSound.Play();
            Destroy(other.gameObject);
            gameManager.energyLevel = 1;
            gameManager.energyDownSpeed += 0.0003f;
        }
        else if (other.gameObject.tag == "Sledge")
        {
            gameManager.patenVagonSound.Play();
            boosted = true;
            Destroy(other.gameObject);
            startSpeed += 20;
            Invoke("FinishedSledge", 4f);
            Destroy(other.gameObject);
            transform.GetChild(6).gameObject.SetActive(true);
            animationController.speed = 0;
        }

    }
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.tag=="Thief")
        {
            gameManager.FindNextThief();
        }
        
    }

    public void Run()//Karakterin sürekli ileriye gitmesini saðlar
    {
        startSpeed += speedUp;
        rb.velocity = Vector3.forward * startSpeed;
    }
    void FixedUpdate()
    {

        if (!isOver)
        {
            Run();
        }
    }
}

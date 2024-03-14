using DG.Tweening;
using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EndlessCharacterMove : MonoBehaviour
{
    public static CharacterMove Instance;
    public bool isOver;
    public float speedUp, startSpeed, flashLightTime;
    Rigidbody rb;
    private float speedChangeValue;
    public ParticleSystem runEffect, dollarCollectEffect;
    Animator animationController;
    public EndlessManager endlessManager;
    public bool shielded, boosted;
    public SkinnedMeshRenderer model;
    public GameObject patten1, patten2;
    public CameraFollow cameraFollow;
    public GameObject thief;
    public int cachedThief;
    public Text cachedThiefText,bestText,bestyazanText;
    void Start()
    {
        cachedThief= 0;
        flashLightTime = 2f;
        startSpeed = 25f;
        //endlessManager = GameObject.FindGameObjectWithTag("endlessManager").GetComponent<endlessManager>();
        rb = GetComponent<Rigidbody>();
        animationController = GetComponent<Animator>();
        speedUp = 0.003f;
        if (!PlayerPrefs.HasKey("BestOfEndless"))
        {
            PlayerPrefs.SetInt("BestOfEndless",0);
        }
        bestText.text = PlayerPrefs.GetInt("BestOfEndless").ToString() ;
    }

    void Homurdan()
    {
        endlessManager.homurdanmaSound.Play();
    }
    void FlashLightEffect()
    {
        if (flashLightTime > 0.2f)
        {
            if (model.enabled == true) { model.enabled = false; }
            else { model.enabled = true; }
            flashLightTime -= 0.2f;
            Invoke("FlashLightEffect", 0.2f);
        }
        else
        {
            flashLightTime = 2f;
            model.enabled = true;
        }

    }
   
  
    void ChangeSpeed() //Ana karakterin hýzýný deðiþtirmek için kullanýlýr
    {
        startSpeed += speedChangeValue;
        shielded = false;

    }
    void FinishedCoffe()
    {

        startSpeed -= 15;
        boosted = false;
    }
    void FinishedVagon()
    {
        if (boosted)
        {
            startSpeed -= 18;
            transform.GetChild(5).gameObject.SetActive(false);
            boosted = false;
        }
        endlessManager.patenVagonSound.Stop();

        endlessManager.anyBoosterInScene = false;

    }
    void FinishedPaten()
    {
        startSpeed -= 18;
        boosted = false;
        patten1.SetActive(false);
        patten2.SetActive(false);
        transform.GetChild(6).gameObject.SetActive(false);
        endlessManager.patenVagonSound.Stop();

        endlessManager.anyBoosterInScene = false;

    }
    public void Failed() //Enerji bitmesi gibi durumlarda oyunu fail eylemine sokar
    {
        Invoke("Homurdan", 1.5f);
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
        boosted = false;
        transform.GetChild(0).DOScale(transform.GetChild(0).localScale / 2.5f, 1f).OnComplete(() =>
                                shielded = false);
    }
    void FinishedSledge()
    {
        if (boosted)
        {
            startSpeed -= 20;
            transform.GetChild(7).gameObject.SetActive(false);
            boosted = false;
        }
        endlessManager.patenVagonSound.Stop();
        animationController.speed = 1;
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Coffe")
        {
            endlessManager.drinkSound.Play();
            boosted = true;

            Destroy(other.gameObject);
            runEffect.Play();
            startSpeed += 15;
            Invoke("FinishedCoffe", 2.5f);


        }
        else if (other.tag == "Obstacle")
        {
            if (!shielded && (!transform.GetChild(5).gameObject.activeSelf && !transform.GetChild(7).gameObject.activeSelf))
            {
                shielded = true;
                endlessManager.energyLevel -= 0.15f;
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
            else if (transform.GetChild(7).gameObject.activeSelf)
            {
                FinishedSledge();
            }

            endlessManager.hitSound.Play();

        }
        else if (other.tag == "Thief")
        {
            cachedThief++;
            cachedThiefText.text=cachedThief.ToString();
            if (cachedThief> PlayerPrefs.GetInt("BestOfEndless"))
            {
                PlayerPrefs.SetInt("BestOfEndless", cachedThief);
                bestText.text = PlayerPrefs.GetInt("BestOfEndless").ToString();
                bestyazanText.text = "NEW BEST";
            }
            endlessManager.energyLevel += 0.2f;
        }
        else if (other.tag == "Shootable")
        {
            other.gameObject.GetComponent<CapsuleCollider>().gameObject.SetActive(true);
            Destroy(other.gameObject, 6f);
            other.transform.DOMoveZ(other.transform.position.z + 180, 6);
            other.transform.DORotate(new Vector3(180, 0, 0), 6);

        }
        else if (other.gameObject.tag == "Dollars")
        {
            endlessManager.collectMoneySound.Play();
            Destroy(other.gameObject);
            dollarCollectEffect.Play();
        }
        else if (other.gameObject.tag == "Donut")
        {
            boosted = true;

            endlessManager.anyBoosterInScene = false;
            shielded = true;
            Vector3 tempScale = transform.GetChild(0).localScale;
            transform.GetChild(0).DOScale(transform.GetChild(0).localScale * 2.5f, 0.5f);
            Invoke("SmallerPolice", 8.5f);
            Invoke("FlashLightEffect", 7f);
            Destroy(other.gameObject);


        }
        else if (other.gameObject.tag == "Apple")
        {
            endlessManager.eatSound.Play();
            endlessManager.energyLevel += 0.3f;
            startSpeed += 0.3f;
            Destroy(other.gameObject);
        }
        else if (other.gameObject.tag == "Vagon")
        {
            boosted = true;
            Destroy(other.gameObject);
            startSpeed += 18;
            Invoke("FinishedVagon", 2.5f);
            Destroy(other.gameObject);
            transform.GetChild(5).gameObject.SetActive(true);
        }
        else if (other.gameObject.tag == "Paten")
        {

            transform.GetChild(6).gameObject.SetActive(true);
            startSpeed += 18;
            Invoke("FinishedPaten", 4f);
            Destroy(other.gameObject);
            patten2.SetActive(true);
            patten1.SetActive(true);
            boosted = true;

        }
        else if (other.gameObject.tag == "RedBull")
        {
            endlessManager.drinkSound.Play();
            Destroy(other.gameObject);
            endlessManager.energyLevel = 1;
            endlessManager.energyDownSpeed += 0.0003f;
        }
        else if (other.gameObject.tag=="Portal")
        {
            transform.position = thief.transform.position + Vector3.back * 5;
            endlessManager.portalSound.Play();

        }
        else if (other.gameObject.tag == "Sledge")
        {
            endlessManager.patenVagonSound.Play();
            boosted = true;
            Destroy(other.gameObject);
            startSpeed += 20;
            Invoke("FinishedSledge", 4f);
            Destroy(other.gameObject);
            transform.GetChild(7).gameObject.SetActive(true);
            animationController.speed = 0;
        }
    }


    public void Run()
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

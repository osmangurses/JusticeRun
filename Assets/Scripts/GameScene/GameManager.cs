using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using DG.Tweening;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameObject nextThief, policeman, road,failPanel,nextMapPanel;
    public Transform soundsParent;
    public Image energy,backGround;
    public Vector3 roadPos;
    public int lastObjectRotation;
    public int levelOfAll,thiefCount,collectedMoney;
    public float energyLevel,energyDownSpeed,timeToAnons;
    public GameObject[] AllThiefs;
    public Text nextThiefText,leastThiefCount;
    public AudioSource anonsSound, collectMoneySound, eatSound, hitSound, homurdanmaSound, drinkSound, turnPlatformSound, dalFirlatmaSound, patenVagonSound, portalSound, trenKornaSound, yagKaymaSound;
    public CharacterMove playerCharacterMove;
    public bool anyBoosterInScene;

    private void Awake()
    {
        Instance = this;
        anyBoosterInScene= false;
        
    }

    void Start()
    { 
        energyDownSpeed= 0.0006f/((PlayerPrefs.GetInt("EnergyUpdatedIndex")* PlayerPrefs.GetInt("EnergyUpdatedIndex")/8)+1);
        energyLevel = 0.5f;// +((float)PlayerPrefs.GetInt("EnergyUpdatedIndex")/12);
        lastObjectRotation = -1;
        levelOfAll = 1;
        thiefCount = AllThiefs.Length;
        FindNextThief();
        Application.targetFrameRate = Screen.currentResolution.refreshRate;
        collectedMoney = PlayerPrefs.GetInt("TotalAmount");
        timeToAnons = Random.Range(10,20);
        SoundManager();
    }

    void SoundManager()
    {
        int isSfxOn = PlayerPrefs.GetInt("IsMusicOn", 1); // Varsayýlan olarak ses efektleri açýk.
        int isMusicOn = PlayerPrefs.GetInt("IsSfxOn", 1); // Varsayýlan olarak müzik açýk.

        // Tüm çocuklarý döngüyle gezerek iþlemleri gerçekleþtir.
        for (int i = 0; i < soundsParent.childCount; i++)
        {
            Transform child = soundsParent.GetChild(i);
            AudioSource audioSource = child.GetComponent<AudioSource>();

            if (audioSource != null)
            {
                // Eðer PlayerPrefs'ten gelen deðer 0 ise sadece ses efektlerini kapat.
                if (isSfxOn == 0 && i != soundsParent.childCount - 1)
                {
                    audioSource.volume = 0f;
                }
                // Eðer PlayerPrefs'ten gelen deðer 0 ise müziði kapat.
                if (isMusicOn == 0 && i == soundsParent.childCount - 1)
                {
                    audioSource.volume = 0f;
                }
            }
        }
    }
    public void GoToMenu()
    {
        SceneManager.LoadScene(0);
    }
    public void GoToUpdate()
    {
        SceneManager.LoadScene(1);
    }
    public void Restart()
    {
        SceneManager.LoadScene(PlayerPrefs.GetInt("ChoosenMap")+2);
    }
    public void CreatePlatformWithObjects()
    {
        Instantiate(road, roadPos, Quaternion.identity);
        roadPos += new Vector3(0, 0, 21);
    }
    public void EnergyManager()
    {
        if (!playerCharacterMove.isOver)
        {
            if (energyLevel > 1) { energyLevel = 1; }
            energyLevel -= energyDownSpeed;
            energy.fillAmount = energyLevel;
            if (energyLevel < 0)
            {
                playerCharacterMove.Failed();
                failPanel.SetActive(true);
                PlayerPrefs.SetInt("CollectedMoney", PlayerPrefs.GetInt("TotalAmount") - collectedMoney);
            }
        }

    }
    public void FindNextThief()
    {
        GameObject nearestThief = null;
        float minZ = float.MaxValue;

        foreach (GameObject thiefGO in AllThiefs)
        {
            Thief thief = thiefGO.GetComponent<Thief>();
            if (thief != null && !thief.isDeath)
            {
                float zPos = thiefGO.transform.position.z;
                if (zPos < minZ)
                {
                    minZ = zPos;
                    nearestThief = thiefGO;
                }
            }
        }

        nextThief= nearestThief;

    }
    public void GoToNextLevel()
    {
        PlayerPrefs.SetInt("ChoosenMap",PlayerPrefs.GetInt("ChoosenMap")+1);
        SceneManager.LoadScene(PlayerPrefs.GetInt("ChoosenMap")+2);
    }
    public void GoToRedOrGreen()
    {
        SceneManager.LoadScene(8);
    }
    void AnonsEt()
    {
        if (timeToAnons<=0)
        {
            anonsSound.Play();
            timeToAnons = Random.Range(10, 20);
        }
        else
        {
            timeToAnons -= Time.deltaTime;
        }
   
    }
    private void FixedUpdate()
    {
        if (energyLevel>0 && thiefCount!=0)
        {
            nextThiefText.text = ((int)(nextThief.transform.position.z - policeman.transform.position.z)).ToString();
            leastThiefCount.text = thiefCount.ToString();
        }  
        EnergyManager();
        if (thiefCount==0)
        {
            nextMapPanel.SetActive(true);
        }
        AnonsEt();
    }
 
}

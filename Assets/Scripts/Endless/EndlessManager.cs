using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class EndlessManager : MonoBehaviour
{
    public static EndlessManager Instance;
    public GameObject policeman, road, failPanel;
    public Image energy;
    public Vector3 roadPos;
    public int lastObjectRotation;
    public int levelOfAll;
    public float energyLevel, energyDownSpeed, timeToAnons;
    public AudioSource anonsSound, collectMoneySound, eatSound, hitSound, homurdanmaSound, drinkSound, turnPlatformSound, dalFirlatmaSound, patenVagonSound, portalSound, trenKornaSound, yagKaymaSound;
    public EndlessCharacterMove playerCharacterMove;
    public bool anyBoosterInScene;
    public GameObject[] cityObjects, parkObjects, desertObjects, marketObjects,winterObjects;
    public Transform soundsParent;

    private void Awake()
    {
        anyBoosterInScene = false;
        Instance= this;
    }

    void Start()
    {
        SoundManager();
        ChooseMap();
        energyDownSpeed = 0.0003f;
        energyLevel = 0.5f ;
        lastObjectRotation = -1;
        levelOfAll = 1;
        
        Application.targetFrameRate = Screen.currentResolution.refreshRate;
      
        timeToAnons = Random.Range(10, 20);
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
                if (isSfxOn == 0 && i < soundsParent.childCount - 1)
                {
                    audioSource.volume = 0f;
                }
                // Eðer PlayerPrefs'ten gelen deðer 0 ise müziði kapat.
                if (isMusicOn == 0 && i >= soundsParent.childCount - 4)
                {
                    audioSource.volume = 0f;
                }
            }
        }
    }
    void ChooseMap()
    {
        int choosenMap = Random.Range(0,5);
        if (choosenMap==0)
        {
            for (int i = 0; i < cityObjects.Length; i++)
            {
                parkObjects[i].SetActive(false);
                desertObjects[i].SetActive(false);
                marketObjects[i].SetActive(false);
                winterObjects[i].SetActive(false);
            }
        }
        if (choosenMap==1)
        {
            for (int i = 0; i < cityObjects.Length; i++)
            {
                cityObjects[i].SetActive(false);
                desertObjects[i].SetActive(false);
                marketObjects[i].SetActive(false);
                winterObjects[i].SetActive(false);
            }
        }
        if (choosenMap==2)
        {
            for (int i = 0; i < cityObjects.Length; i++)
            {
                parkObjects[i].SetActive(false);
                cityObjects[i].SetActive(false);
                marketObjects[i].SetActive(false);
                winterObjects[i].SetActive(false);
                desertObjects[i].SetActive(true);
            }
        }
        if (choosenMap==3)
        {
            for (int i = 0; i < cityObjects.Length; i++)
            {
                parkObjects[i].SetActive(false);
                desertObjects[i].SetActive(false);
                cityObjects[i].SetActive(false);
                winterObjects[i].SetActive(false);
            }
        }
        if (choosenMap==4)
        {
            for (int i = 0; i < cityObjects.Length; i++)
            {
                parkObjects[i].SetActive(false);
                desertObjects[i].SetActive(false);
                cityObjects[i].SetActive(false);
                marketObjects[i].SetActive(false);
                winterObjects[i].SetActive(true);
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
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
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
            }
        }

    }

    public void GoToRedOrGreen()
    {
        SceneManager.LoadScene(6);
    }
    void AnonsEt()
    {
        if (timeToAnons <= 0)
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
        EnergyManager();
       
        AnonsEt();
    }
}

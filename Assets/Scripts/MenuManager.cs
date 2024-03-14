using DG.Tweening;
using GameAnalyticsSDK;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MenuManager : MonoBehaviour
{
    public Button[] chooseButtons;
    public GameObject[] platforms;
    public Image[] backgrounds;
    public Text tapToPlayText;
    public Button endlessButton,sfxButton,musicButton;
    private void Awake()
    {
       // PlayerPrefs.DeleteAll();
        if (!PlayerPrefs.HasKey("SpeedUpdatedIndex"))
        {
            PlayerPrefs.SetInt("SpeedUpdatedIndex", 0);
            PlayerPrefs.SetInt("IncomeUpdatedIndex", 0);
            PlayerPrefs.SetInt("EnergyUpdatedIndex", 0);
            PlayerPrefs.SetInt("LuckUpdatedIndex", 0);
            PlayerPrefs.SetInt("TotalAmount", 0);
            PlayerPrefs.SetInt("ChoosenMap",0);
            PlayerPrefs.SetInt("UnlockedMap",0);
            PlayerPrefs.SetInt("CollectedMoney",0);
            PlayerPrefs.SetInt("FailCounter",0);
            PlayerPrefs.SetInt("IsMusicOn",1);
            PlayerPrefs.SetInt("IsSfxOn",1);
            SceneManager.LoadScene(9);

        }

        //PlayerPrefs.SetInt("UnlockedMap", 4);
        //PlayerPrefs.SetInt("SpeedUpdatedIndex", 0); PlayerPrefs.SetInt("IncomeUpdatedIndex", 0); PlayerPrefs.SetInt("EnergyUpdatedIndex", 0); PlayerPrefs.SetInt("LuckUpdatedIndex", 0);
        //PlayerPrefs.SetInt("ChoosenMap", 0); PlayerPrefs.SetInt("UnlockedMap", 1);
        //PlayerPrefs.SetInt("TotalAmount", 0);

    }
    private void Start()
    {
        ChooseButtonDesigner();
        BackgroundDesigner();
        TapToPlayBlink();
        GameAnalytics.Initialize();
    }


    public void TapToPlayBlink()
    {
        Color originalColor = tapToPlayText.color;
        float blinkDuration = 1.5f;
        int blinkCount = -1;
        float blinkAlpha = 0.0f;
        Color blinkColor = new Color(originalColor.r, originalColor.g, originalColor.b, blinkAlpha);
        tapToPlayText.color = originalColor;
        tapToPlayText.DOFade(blinkAlpha, blinkDuration / 2)
            .SetLoops(blinkCount * 2, LoopType.Yoyo)
            .OnComplete(() =>
            {
                tapToPlayText.color = originalColor;
            });
    }
    void ChooseButtonDesigner()
    {
        if (PlayerPrefs.GetInt("IsSfxOn") == 0)
        {
            sfxButton.image.color = Color.red;
            sfxButton.transform.GetChild(0).gameObject.SetActive(false);
            sfxButton.transform.GetChild(1).gameObject.SetActive(true);
        }
        else
        {
            sfxButton.image.color = Color.green;
            sfxButton.transform.GetChild(0).gameObject.SetActive(true);
            sfxButton.transform.GetChild(1).gameObject.SetActive(false);
        }
        if (PlayerPrefs.GetInt("IsMusicOn") == 0)
        {
            musicButton.transform.GetChild(0).gameObject.SetActive(false);
            musicButton.transform.GetChild(1).gameObject.SetActive(true);
            musicButton.image.color = Color.red;
        }
        else
        {
            musicButton.image.color = Color.green;
            musicButton.transform.GetChild(0).gameObject.SetActive(true);
            musicButton.transform.GetChild(1).gameObject.SetActive(false);
        }
        for (int i = 0; i < chooseButtons.Length; i++)
        {
            if ((PlayerPrefs.GetInt("UnlockedMap"))>=i)
            {
                chooseButtons[i].transform.GetChild(1).gameObject.SetActive(false);
                chooseButtons[i].transform.GetChild(0).gameObject.SetActive(true);
            }
            chooseButtons[i].GetComponent<Image>().color = Color.white;   
        }
        chooseButtons[PlayerPrefs.GetInt("ChoosenMap")].GetComponent<Image>().color = Color.green;
    }
    void BackgroundDesigner()
    {
        if (PlayerPrefs.GetInt("ChoosenMap")<=4)
        {

            foreach (GameObject obj in platforms)
            {
                obj.SetActive(false);
            }
            foreach (Image img in backgrounds)
            {
                img.gameObject.SetActive(false);
            }
            platforms[PlayerPrefs.GetInt("ChoosenMap")].gameObject.SetActive(true);
            backgrounds[PlayerPrefs.GetInt("ChoosenMap")].gameObject.SetActive(true);
        }
    }
    public void ChooseCityMap()
    {
        PlayerPrefs.SetInt("ChoosenMap",0);
        ChooseButtonDesigner();
        BackgroundDesigner();
    }
    public void ChooseParkMap()
    {
        if (PlayerPrefs.GetInt("UnlockedMap")>=1)
        {
            PlayerPrefs.SetInt("ChoosenMap", 1);
        }
        ChooseButtonDesigner();
        BackgroundDesigner();
    }
    public void ChooseStoreMap()
    {
        if (PlayerPrefs.GetInt("UnlockedMap") >= 2)
        {
            PlayerPrefs.SetInt("ChoosenMap", 2);
        }
        ChooseButtonDesigner();
        BackgroundDesigner();

    }
    public void ChooseDesertMap()
    {
        if (PlayerPrefs.GetInt("UnlockedMap") >= 3)
        {
            PlayerPrefs.SetInt("ChoosenMap", 3);
        }
        ChooseButtonDesigner();
        BackgroundDesigner();

    }
    public void ChooseWinterMap()
    {
        if (PlayerPrefs.GetInt("UnlockedMap") >= 4)
        {
            PlayerPrefs.SetInt("ChoosenMap", 4);
        }
        ChooseButtonDesigner();
        BackgroundDesigner();

    }
    public void ChooseEndlessMap()
    {
        if (PlayerPrefs.GetInt("UnlockedMap") >= 5)
        {
            PlayerPrefs.SetInt("ChoosenMap", 5);
        }
        ChooseButtonDesigner();
        BackgroundDesigner();
    }
    public void GoToUpdateScene(){SceneManager.LoadScene(1);}
    public void GoToGameScene() {
        if (PlayerPrefs.GetInt("UnlockedMap") >= 5)
        {
            GameAnalytics.NewDesignEvent($"PlayedLevel:Level_{PlayerPrefs.GetInt("ChoosenMap")+1}");
        }
        SceneManager.LoadScene(PlayerPrefs.GetInt("ChoosenMap")+2); 
    }
    public void CoseOpenSfx()
    {
        if (PlayerPrefs.GetInt("IsSfxOn")==1)
        {
            PlayerPrefs.SetInt("IsSfxOn",0);
        }
        else
        {
            PlayerPrefs.SetInt("IsSfxOn", 1);
        }
        ChooseButtonDesigner();
    }
    public void CloseOpenMusic()
    {
        if (PlayerPrefs.GetInt("IsMusicOn") == 1)
        {
            PlayerPrefs.SetInt("IsMusicOn", 0);
        }
        else
        {
            PlayerPrefs.SetInt("IsMusicOn", 1);

        }
        ChooseButtonDesigner();
    }

}

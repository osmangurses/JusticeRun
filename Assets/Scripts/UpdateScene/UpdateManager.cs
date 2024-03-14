using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using GameAnalyticsSDK;

public class UpdateManager : MonoBehaviour
{
    public GameObject infoPanel;
    public Text infoPanelCloseOpenButtonText,totalAmountText;
    public Text[] buttonTexts;
    public Image[] speedCount, incomeCount, energyCount, luckCount;
    public int[] speedCost, incomeCost, energyCost, luckCost;
    
    
    private void Awake()
    {
        //PlayerPrefs.SetInt("SpeedUpdatedIndex", 0);
       /* PlayerPrefs.SetInt("IncomeUpdatedIndex", 0);
        PlayerPrefs.SetInt("EnergyUpdatedIndex", 0);
        PlayerPrefs.SetInt("LuckUpdatedIndex", 0);*/
        PlayerPrefs.SetInt("TotalAmount",700000000);
        
    }
    private void Start()
    {
        
        UpdateButtonsAndTotalAmountText();
        UpdateIconsToGreen();
    }
    public void GoToMenu()
    {
        SceneManager.LoadScene(0);
    }
    private string AmountDesigner(int money)
    {
        string designedAmount = "";
        if (money >= 1000000)
        {
            designedAmount= ((money / 1000000).ToString() + "." + ((money / 100000) % 10).ToString() + "M");
            return designedAmount;
        }
        else if (money >= 1000)
        {
            designedAmount= ((money / 1000).ToString() + "." + ((money / 100) % 10).ToString() + "K");
            return designedAmount;
        }
        else
        {
            return money.ToString();
        }
        
    }
    public void InfoPanelCloseOpen()
    {
        if (infoPanel.activeSelf)
        {
            infoPanel.SetActive(false);
            infoPanelCloseOpenButtonText.text = "?";

        }
        else
        {
            infoPanel.SetActive(true);
            infoPanelCloseOpenButtonText.text = "X";
        }
    }
    private void UpdateButtonsAndTotalAmountText()
    {
        if (PlayerPrefs.GetInt("SpeedUpdatedIndex")>5)
        {
            buttonTexts[0].text = "MAX";
        }
        else
        {
            buttonTexts[0].text = AmountDesigner(speedCost[ PlayerPrefs.GetInt("SpeedUpdatedIndex")])  ;
        }
        if (PlayerPrefs.GetInt("IncomeUpdatedIndex")>5)
        {
            buttonTexts[1].text = "MAX";
        }
        else
        {
            buttonTexts[1].text = AmountDesigner(incomeCost[ PlayerPrefs.GetInt("IncomeUpdatedIndex")])  ;
        }
        if (PlayerPrefs.GetInt("EnergyUpdatedIndex")>5)
        {
            buttonTexts[2].text = "MAX";
        }
        else
        {
            buttonTexts[2].text = AmountDesigner(energyCost[ PlayerPrefs.GetInt("EnergyUpdatedIndex")]) ;
        }
        if (PlayerPrefs.GetInt("LuckUpdatedIndex")>5)
        {
            buttonTexts[3].text = "MAX";
        }
        else
        {
            buttonTexts[3].text = AmountDesigner(luckCost[ PlayerPrefs.GetInt("LuckUpdatedIndex")]) ;
        }
       
       /* buttonTexts[1].text=incomeCost[PlayerPrefs.GetInt("IncomeUpdatedIndex")].ToString() + "$";
        buttonTexts[2].text=energyCost[PlayerPrefs.GetInt("EnergyUpdatedIndex")].ToString() + "$";
        buttonTexts[3].text=luckCost[PlayerPrefs.GetInt("LuckUpdatedIndex")].ToString() + "$";*/
        totalAmountText.text= AmountDesigner(PlayerPrefs.GetInt("TotalAmount")) ;
            
    }
    private void UpdateIconsToGreen()
    {
        for (int i = 0; i < (PlayerPrefs.GetInt("SpeedUpdatedIndex")); i++)
        {
            speedCount[i].color = Color.green;
        }
        for (int i = 0; i < (PlayerPrefs.GetInt("IncomeUpdatedIndex")); i++)
        {
            incomeCount[i].color = Color.green;
        }
        for (int i = 0; i < (PlayerPrefs.GetInt("EnergyUpdatedIndex")); i++)
        {
            energyCount[i].color = Color.green;
        }
        for (int i = 0; i < (PlayerPrefs.GetInt("LuckUpdatedIndex")); i++)
        {
            luckCount[i].color = Color.green;
        }
    }
    public void UpdateSpeed()
    {
        if (PlayerPrefs.GetInt("SpeedUpdatedIndex") < 6 && PlayerPrefs.GetInt("TotalAmount") > speedCost[PlayerPrefs.GetInt("SpeedUpdatedIndex")])
        {
            GameAnalytics.NewDesignEvent($"Update:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Speed:{PlayerPrefs.GetInt("SpeedUpdatedIndex")+1}",PlayerPrefs.GetInt("TotalAmount"));
            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - speedCost[PlayerPrefs.GetInt("SpeedUpdatedIndex")]) ;
            PlayerPrefs.SetInt("SpeedUpdatedIndex", PlayerPrefs.GetInt("SpeedUpdatedIndex") + 1);
            UpdateIconsToGreen();
            UpdateButtonsAndTotalAmountText();
            
        }
    }
    public void UpdateIncome()
    {
        if (PlayerPrefs.GetInt("IncomeUpdatedIndex") < 6 && PlayerPrefs.GetInt("TotalAmount") > incomeCost[PlayerPrefs.GetInt("IncomeUpdatedIndex")])
        {
            GameAnalytics.NewDesignEvent($"Update:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Income:{PlayerPrefs.GetInt("IncomeUpdatedIndex")+1}", PlayerPrefs.GetInt("TotalAmount"));

            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - incomeCost[PlayerPrefs.GetInt("IncomeUpdatedIndex")]) ;
            PlayerPrefs.SetInt("IncomeUpdatedIndex", PlayerPrefs.GetInt("IncomeUpdatedIndex") + 1);
            UpdateIconsToGreen();
            UpdateButtonsAndTotalAmountText();
        }
    }
    public void UpdateEnergy()
    {
        if ( PlayerPrefs.GetInt("EnergyUpdatedIndex") < 6 && PlayerPrefs.GetInt("TotalAmount") > energyCost[PlayerPrefs.GetInt("EnergyUpdatedIndex")])
        {
            GameAnalytics.NewDesignEvent($"Update:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Energy:{PlayerPrefs.GetInt("EnergyUpdatedIndex") + 1}", PlayerPrefs.GetInt("TotalAmount"));

            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - energyCost[PlayerPrefs.GetInt("EnergyUpdatedIndex")]);
            PlayerPrefs.SetInt("EnergyUpdatedIndex", PlayerPrefs.GetInt("EnergyUpdatedIndex") + 1);
            UpdateIconsToGreen();
            UpdateButtonsAndTotalAmountText();
        }
    }
    public void UpdateLuck()
    {
        if (PlayerPrefs.GetInt("LuckUpdatedIndex") < 6 && PlayerPrefs.GetInt("TotalAmount") > luckCost[PlayerPrefs.GetInt("LuckUpdatedIndex")] )
        {
            GameAnalytics.NewDesignEvent($"Update:Level_{PlayerPrefs.GetInt("UnlockedMap") + 1}:Luck:{PlayerPrefs.GetInt("LuckUpdatedIndex") + 1}", PlayerPrefs.GetInt("TotalAmount"));

            Debug.Log("Girdi");
            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - luckCost[PlayerPrefs.GetInt("LuckUpdatedIndex")]);
            PlayerPrefs.SetInt("LuckUpdatedIndex", PlayerPrefs.GetInt("LuckUpdatedIndex") + 1);
            UpdateIconsToGreen();
            UpdateButtonsAndTotalAmountText();
        }
    }

   
}

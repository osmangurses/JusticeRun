using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class RedOrGreenManager : MonoBehaviour
{
    public GameObject cardParent,cardBack,choosenColorIcon,chooseRedButton,chooseGreenButton;
    public Text betAmount;
    public int bet,choosenColor,correctColor;
    public Material redMaterial,greenMaterial;
    bool turned;
    private void Start()
    {
        //PlayerPrefs.SetInt("CollectedMoney",145);
        choosenColor = 1;
        SetRandomColorToCard();
        bet = PlayerPrefs.GetInt("CollectedMoney");
        betAmount.text=bet.ToString();
        turned = false;
        UpdateAmount(bet);
    }
    void SetRandomColorToCard()
    {
        int rand = Random.Range(0, 100 + 1);
        if (rand<49)
        {
            cardBack.GetComponent<Renderer>().material = redMaterial;
            correctColor = 2;
        }
        else if(rand<98)
        {
            cardBack.GetComponent<Renderer>().material = greenMaterial;
            correctColor = 1;
        }
        else
        {
            cardBack.GetComponent<Renderer>().material.color=Color.black;
            correctColor = 0;
        }
    }
    void UpdateAmount(int collectedMoney)
    {
        //PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") + collectedMoney);

        if (collectedMoney >= 1000000)
        {
            betAmount.text = (collectedMoney / 1000000).ToString() + "." + ((collectedMoney / 100000) % 10).ToString() + "M $";
        }
        else if (collectedMoney >= 1000)
        {
            betAmount.text = (collectedMoney / 1000).ToString() + "." + ((collectedMoney / 100) % 10).ToString() + "K $";
        }
        else
        {
            betAmount.text = collectedMoney.ToString()+" $";
        }
    }
    public void PickGreen()
    {
        choosenColor = 1;
        choosenColorIcon.transform.parent = chooseGreenButton.transform;
        choosenColorIcon.transform.DOLocalMoveX(0, 0.5f);
    }
    public void PickRed()
    {
        choosenColor = 2;
        choosenColorIcon.transform.parent = chooseRedButton.transform;
        choosenColorIcon.transform.DOLocalMoveX(0, 0.5f);
    }
    public void TurnCard()
    {
        if (!turned)
        {
            cardParent.transform.DORotate(new Vector3(0, 180, 0), 1f);
            if (correctColor == choosenColor)
            {
                bet *= 2;
                UpdateAmount(bet);

            }
            else {
                UpdateAmount(0);
                bet = 0;
            }
            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - PlayerPrefs.GetInt("CollectedMoney") + bet);
            PlayerPrefs.SetInt("CollectedMoney", bet);
            turned = true;
        }
        else 
        {
            Reload();
        }
    }
    public void Reload()
    {
        if (bet!=0)
        {
            PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - PlayerPrefs.GetInt("CollectedMoney") + bet);
            PlayerPrefs.SetInt("CollectedMoney", bet);
            SceneManager.LoadScene(7);
        }
        else
        {
            GoToMainMenu();
        }
    }
    public void GoToMainMenu()
    {
        PlayerPrefs.SetInt("TotalAmount", PlayerPrefs.GetInt("TotalAmount") - PlayerPrefs.GetInt("CollectedMoney") + bet);
        PlayerPrefs.SetInt("CollectedMoney", bet);
        SceneManager.LoadScene(0);
    }
    









}

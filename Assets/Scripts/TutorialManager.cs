using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.SocialPlatforms;

public class TutorialManager : MonoBehaviour
{
    public TurnPlatform turnPlatform;
    public GameObject policeSprite,clickIcon,readyText;
    public int clickCount;
    public float[] times;
    int timeIndex,stopCount;
    public ParticleSystem endParticle;
    public GameObject[] itsGonnaDestroy;
    
    
    private void Start()
    {
        turnPlatform.clickable = false;
        clickCount = 0;
        stopCount= 0;
        StopTime();
    }
    void DestroyAndFinish()
    {
        endParticle.Play();
        foreach (GameObject obj in itsGonnaDestroy)
        {
            Destroy(obj);
        }
        readyText.SetActive(true);
        Destroy(Camera.main.gameObject.GetComponent<CameraFollow>());
        
    }
    void StopTime()
    {
        Time.timeScale = 0.0f;
        if (clickCount>=7 && stopCount<=2) 
        {

            turnPlatform.clickable = true;
            clickIcon.SetActive(true);
        }
        stopCount++;
        if (stopCount>3)
        {

            stopCount = -5;
        }
        else if (stopCount > 2)
        {

            Invoke("StopTime", 5);
        }
    }
    void Timer()
    {
        if (timeIndex<times.Length) 
        {

            Invoke("StopTime", times[timeIndex]);
            timeIndex++;
        }

    }
    private void Update()
    {
        if (Time.timeScale == 1)
        {
            clickIcon.SetActive(false);
            turnPlatform.clickable = false;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (readyText.activeSelf)
            {
                SceneManager.LoadScene(0);
            }
            if (stopCount<0)
            {
                DestroyAndFinish();
            }
            
            clickCount++;
            if (policeSprite.transform.childCount<=clickCount+1) 
            {
                Time.timeScale = 1;
                policeSprite.SetActive(false);
                Timer();
            }
            else
            {
                policeSprite.transform.GetChild(clickCount).gameObject.SetActive(false);
                policeSprite.transform.GetChild(clickCount+1).gameObject.SetActive(true);
            }
            
        }
    }
}

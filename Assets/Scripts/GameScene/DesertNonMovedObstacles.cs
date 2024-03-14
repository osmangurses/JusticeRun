using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DesertNonMovedObstacles : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Player")
        {
            GameObject.FindGameObjectWithTag("AllPlatformObjects").transform.DOComplete();
            if (SceneManager.GetActiveScene().buildIndex != 7)
            {

                GameObject.FindGameObjectWithTag("AllPlatformObjects").GetComponent<TurnPlatform>().Turn();
            }
            else
            {
                GameObject.FindGameObjectWithTag("AllPlatformObjects").GetComponent<EndlessTurnPlatform>().Turn();
            }
        }
        else if (other.gameObject.tag=="Obstacle")
        {
            Destroy(gameObject);
        }
    }
}

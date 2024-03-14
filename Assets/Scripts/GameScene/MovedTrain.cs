using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MovedTrain : MonoBehaviour
{
    // Start is called before the first frame update
    GameManager gameManager;
    EndlessManager endlessManager;
    private void Start()
    {
        GetComponent<Rigidbody>().velocity = Vector3.back*10;
        gameManager = GameManager.Instance;
        endlessManager= EndlessManager.Instance;
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Player")
        {
            
            GameObject.FindGameObjectWithTag("AllPlatformObjects").transform.DOComplete();
            if (SceneManager.GetActiveScene().buildIndex!=6)
            {
                gameManager.trenKornaSound.Play();
                GameObject.FindGameObjectWithTag("AllPlatformObjects").GetComponent<TurnPlatform>().Turn();
            }
            else
            {
                endlessManager.trenKornaSound.Play();
                GameObject.FindGameObjectWithTag("AllPlatformObjects").GetComponent<EndlessTurnPlatform>().Turn();
            }
        }
    }
   /* private void FixedUpdate()
    {
        transform.position = transform.position + Vector3.back * 0.1f;
    }*/
}

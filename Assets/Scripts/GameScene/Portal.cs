using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Portal : MonoBehaviour
{
    public GameManager gameManager;
    public EndlessManager endlessManager;
    public GameObject policeman;

    private void Awake()
    {
      //  gameManager= GameObject.FindGameObjectWithTag("GameManager").GetComponent<GameManager>();
        policeman = GameObject.FindGameObjectWithTag("Player");

    }

    private void Start()
    {
        gameManager = GameManager.Instance;
        endlessManager=EndlessManager.Instance;

    }

    private void OnTriggerEnter(Collider other)
    {
        
        if (other.gameObject==policeman) 
        {
            if (SceneManager.GetActiveScene().buildIndex==6)
            {
                endlessManager.portalSound.Play();
            }
            else
            {

                gameManager.portalSound.Play();
            }
            policeman.transform.position = new Vector3(policeman.transform.position.x, policeman.transform.position.y, gameManager.nextThief.transform.position.z - 5);
            transform.position= new Vector3(policeman.transform.position.x, policeman.transform.position.y, gameManager.nextThief.transform.position.z - 5);
            Destroy(this.gameObject);
        }
    }
}

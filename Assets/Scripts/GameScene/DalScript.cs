using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DalScript : MonoBehaviour
{
    public float speed,rotateSpeed;
    public bool iscollected;
    public ParticleSystem collectableLight;
    GameManager gameManager;
    EndlessManager endlessManager;
    private void Start()
    {
        gameManager = GameManager.Instance;
        endlessManager=EndlessManager.Instance;
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Player")
        {
            if (SceneManager.GetActiveScene().buildIndex!=7)
            {

                gameManager.dalFirlatmaSound.Play();
            }
            else
            {
                endlessManager.dalFirlatmaSound.Play();

            }
            transform.SetParent(null);
            iscollected = true;
            Destroy(collectableLight);
        
           

        }

    }
    // Update is called once per frame
    private void FixedUpdate()
    {
        if (iscollected)
        {
            transform.position =transform.position+ Vector3.forward*speed;
            transform.Rotate(rotateSpeed,0,0);
        }
    }
}

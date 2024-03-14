using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.PlayerLoop;
using UnityEngine.SceneManagement;

public class Candy : MonoBehaviour
{
    GameManager gameManager;
    EndlessManager endlessManager;
    public ParticleSystem particle;
    public bool iscollected;
    public float speed, rotateSpeed;
    
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
                if (int.Parse(gameManager.nextThiefText.text) > 45)
                {
                    other.GetComponent<CharacterMove>().startSpeed += 0.3f;
                    gameManager.energyLevel += 0.1f;
                    gameManager.eatSound.Play();
                    Destroy(gameObject);
                }
                else
                {

                    iscollected = true;

                }
            }
            else
            {
                    other.GetComponent<EndlessCharacterMove>().startSpeed += 0.5f;
                    endlessManager.energyLevel += 0.3f;
                    endlessManager.eatSound.Play();
                    Destroy(gameObject);
            }
            Destroy(particle);

        }
    }
    private void FixedUpdate()
    {
        if (iscollected)
        {
            transform.position = transform.position + Vector3.forward * speed;
            transform.GetChild(0).Rotate(rotateSpeed, 0, 0);
        }
    }
}

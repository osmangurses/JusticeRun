using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndlessThief : MonoBehaviour
{
    public float startSpeed;
    Rigidbody rb;
    EndlessCharacterMove policemanMove;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        policemanMove=GameObject.FindGameObjectWithTag("Player").GetComponent<EndlessCharacterMove>();

    }

    void Run()
    {

        rb.velocity = Vector3.forward * startSpeed;
    }
    

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Dal" && other.gameObject.GetComponent<DalScript>().iscollected)
        {
            Destroy(other.gameObject);
            transform.DOShakePosition(0.3f, 0.3f);
            startSpeed -= 10;
            Invoke("SpeedUp", 1f);
        }
        else if (other.gameObject.tag == "Player")
        {

            transform.position = transform.position + Vector3.forward * 75;
            if (policemanMove.boosted)
            {
                startSpeed = policemanMove.startSpeed - 19;
            }
            else
            {
                startSpeed = policemanMove.startSpeed - 1;
            }
  
        }
    }

    void FixedUpdate()
    {
        
            Run();
        
    }

}

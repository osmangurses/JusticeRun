using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PoliceBarrier : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Player") { GetComponent<Animator>().SetTrigger("isHit"); }
        
    }
}

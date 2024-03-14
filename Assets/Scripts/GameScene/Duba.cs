using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Duba : MonoBehaviour
{
    
    Animator animController;
    private void Start()
    {
        animController = GetComponent<Animator>();  
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Player")
        {
            animController.SetTrigger("isHit");
            transform.DOMoveX(transform.position.x - 1, 0.2f);
        }
    }
}

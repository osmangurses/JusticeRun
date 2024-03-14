using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TahteravalliObstacle : MonoBehaviour
{
    Animator animController;
    void Start()
    {
        animController = GetComponent<Animator>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Player")
        {
            animController.SetTrigger("Move");
        }
    }
}

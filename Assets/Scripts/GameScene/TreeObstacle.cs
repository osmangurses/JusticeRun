using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TreeObstacle : MonoBehaviour
{
    // Start is called before the first frame update
    Animator animController;
    void Start()
    {
        animController= GetComponent<Animator>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Player")
        {
            animController.SetTrigger("Move");
        }
    }
    // Update is called once per frame
   
}

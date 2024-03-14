using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dollars : MonoBehaviour
{
    GameObject allPlatformObjects;
    private void Start()
    {
        allPlatformObjects = GameObject.FindGameObjectWithTag("AllPlatformObjects");
        
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Platform")
        {
            Destroy(GetComponent<Rigidbody>());
            transform.parent = allPlatformObjects.transform;
        }
        if (other.gameObject.tag=="Thief")
        {
            Destroy(gameObject);
        }
    }
    private void FixedUpdate()
    {
        if (transform.position.y<-50) { Destroy(gameObject); }
    }
}

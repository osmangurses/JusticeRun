using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarBarrier : MonoBehaviour
{
    GameObject child1, child2, parent;
    bool isHit;
    private void Start()
    {
        child1=transform.GetChild(0).gameObject;
        child2=transform.GetChild(1).gameObject;
        parent=transform.parent.gameObject;
        InvokeRepeating("TurnParent", 0.5f, 2);
        isHit=false;
        
    }
    void TurnParent()
    {
        if (!isHit)
        {
            parent.transform.DOLocalRotate(Vector3.forward * -75, 1f).OnComplete(() => parent.transform.DOLocalRotate(Vector3.zero, 1f));

        }
    }
    void MoveChild()
    {
        child1.transform.DOLocalRotate(Vector3.up*20,0.2f);
        child2.transform.DOLocalMove(new Vector3(-1.5f, -1, 2.5f), 0.2f);
        child2.transform.DOLocalRotate(Vector3.right * 100, 0.2f);
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag=="Player")
        {
            isHit=true;
            MoveChild();
        }
    }

}

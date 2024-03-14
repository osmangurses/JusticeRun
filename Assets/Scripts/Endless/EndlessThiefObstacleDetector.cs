using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndlessThiefObstacleDetector : MonoBehaviour
{
    private GameObject thief;
    EndlessThief thiefScript;
    Animator thiefAnimator;
    bool isObstacleDetected;
    public float thiefJumpPower;
    private void Start()
    {
        thief = transform.parent.gameObject;
        thiefScript = thief.GetComponent<EndlessThief>();
        thiefAnimator = thief.GetComponent<Animator>();

    }
    void JumpThief()
    {
        thiefAnimator.SetTrigger("Jump");
        thief.transform.DOMoveY(5f, 0.3f).OnComplete(() => thief.transform.DOMoveY(2f, 0.2f));
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Obstacle")
        {
            isObstacleDetected = false;
            JumpThief();
            isObstacleDetected = true;
            thiefScript.startSpeed -= 0.1f;

        }
    }
}


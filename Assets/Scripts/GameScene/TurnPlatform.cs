using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TurnPlatform : MonoBehaviour
{
    public float swipeThreshold = 0.2f; 

    
    public bool isTurning,clickable;
    public GameManager gameManager;
    public CharacterMove playerCharacterMove;
    private void Awake()
    {
        clickable= true;
    }
    private void Update()
    {
        
        if (Input.GetMouseButtonDown(0)&&clickable)
        {
            Turn();
        }
    }
    public void Turn()
    {
        if (!playerCharacterMove.isOver) {
            if (!isTurning)
            {
                isTurning = !isTurning;

            }
            transform.DOComplete();
            transform.DORotate(transform.eulerAngles + new Vector3(0f, 0f, 90f), 0.1f).OnComplete(() =>
                                isTurning = false); ;
            
            gameManager.turnPlatformSound.Play();
        }
    }
}

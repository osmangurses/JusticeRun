using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndlessTurnPlatform : MonoBehaviour
    {
        public float swipeThreshold = 0.2f;


        public bool isTurning;
        public EndlessManager endlessManager;
        public EndlessCharacterMove playerCharacterMove;

        private void Update()
        {

            if (Input.GetMouseButtonDown(0))
            {
                Turn();
            }
        }
        public void Turn()
        {
            if (!playerCharacterMove.isOver)
            {
                if (!isTurning)
                {
                    isTurning = !isTurning;

                }
                transform.DOComplete();
                transform.DORotate(transform.eulerAngles + new Vector3(0f, 0f, 90f), 0.1f).OnComplete(() =>
                                    isTurning = false); ;

                endlessManager.turnPlatformSound.Play();
            }
        }
    }




// Update is called once per frame


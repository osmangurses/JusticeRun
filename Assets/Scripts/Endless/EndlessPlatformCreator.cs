using DG.Tweening;
using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndlessPlatformCreator : MonoBehaviour
{
    EndlessManager endlessManager;
    GameObject player, parentOfPlatformObjects;
    public GameObject[] obstacles, boosters;
    private float probabilityOfObstacle, probabilityOfBooster;
    GameObject boosterOnScene;
    public bool anyBoosterOnPlatform;

    private void Start()
    {
        probabilityOfObstacle = 70;
        probabilityOfBooster = 10;
        endlessManager= EndlessManager.Instance;
        player = GameObject.FindGameObjectWithTag("Player");
        parentOfPlatformObjects = GameObject.FindGameObjectWithTag("AllPlatformObjects");
        boosterOnScene = null;
    }

    void CreateObstacleOrBooster()
    {

        for (int i = 0; i < 2; i++)
        {
            float probability = Random.Range(0, 100);
            int rotationOfObject = Random.Range(0, 4);
            while (rotationOfObject == endlessManager.lastObjectRotation)
            {
                rotationOfObject = Random.Range(0, 4);
            }
            endlessManager.lastObjectRotation = rotationOfObject;

            if (probability <= probabilityOfObstacle)
            {
                int indexOfObstacle = Random.Range(0, obstacles.Length);
                GameObject obstacle = Instantiate(obstacles[indexOfObstacle]);
                if (i == 0)
                {
                    obstacle.transform.localPosition = obstacle.GetComponent<Obstacle>().positions[rotationOfObject] + transform.position - new Vector3(0, 0, -9);

                }
                else
                {
                    obstacle.transform.localPosition = obstacle.GetComponent<Obstacle>().positions[rotationOfObject] + transform.position;
                }
                obstacle.transform.Rotate(obstacle.GetComponent<Obstacle>().rotations[rotationOfObject]);
                obstacle.transform.SetParent(transform);
            }
            else if (probability <= (probabilityOfObstacle + probabilityOfBooster))
            {

             
                if (!player.GetComponent<EndlessCharacterMove>().boosted && !endlessManager.anyBoosterInScene)
                {
                    endlessManager.anyBoosterInScene = true;
                    anyBoosterOnPlatform= true;
                    int indexOfBooster = Random.Range(0, boosters.Length);
                    boosterOnScene = Instantiate(boosters[indexOfBooster]);
                    if (i == 0)
                    {
                        boosterOnScene.transform.localPosition = boosterOnScene.GetComponent<Obstacle>().positions[rotationOfObject] + transform.position - new Vector3(0, 0, -9);

                    }
                    else
                    {
                        boosterOnScene.transform.localPosition = boosterOnScene.GetComponent<Obstacle>().positions[rotationOfObject] + transform.position;
                    }
                    boosterOnScene.transform.Rotate(boosterOnScene.GetComponent<Obstacle>().rotations[rotationOfObject]);
                    boosterOnScene.transform.SetParent(transform);
                }


            }

        }
    }
    private void FixedUpdate()
    {
        
            if ((player.transform.position.z - transform.position.z) > 60)
            {
                if (!parentOfPlatformObjects.GetComponent<EndlessTurnPlatform>().isTurning)
                {

                    if (player.transform.position.x > 0) { }
                    transform.localPosition = endlessManager.roadPos;
                    endlessManager.roadPos += new Vector3(0, 0, 21);
                    int childCount = transform.childCount;
                    for (int i = childCount - 1; i >= 0; i--)
                    {
                        Transform child = transform.GetChild(i);

                        Destroy(child.gameObject);
                    }
                    if (anyBoosterOnPlatform)
                    {
                        endlessManager.anyBoosterInScene = false;
                    }

                    anyBoosterOnPlatform = false;
                    transform.Rotate(Vector3.zero);
                    CreateObstacleOrBooster();
                }


            }
        
    }

}

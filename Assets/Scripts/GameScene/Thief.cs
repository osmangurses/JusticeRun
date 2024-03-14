using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Thief : MonoBehaviour
{
    public bool isDeath;
    public float startSpeed;
    Rigidbody rb;
    float speedUpValue, timer;
    Animator animControl;
    public GameObject moneyBudget, dollar;
    public int moneyInBag;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        animControl = GetComponent<Animator>();
        transform.DOMoveX(0, 10);
        timer = Random.Range(5, 10);
        isDeath= false;
        float tempIncome = (float)PlayerPrefs.GetInt("IncomeUpdatedIndex");
        moneyInBag = (int)((int) moneyInBag * (1+(tempIncome)/2));
    }

    void Run()
    {

        rb.velocity = Vector3.forward * startSpeed;
    }
    void SpeedUp()
    {
        startSpeed += speedUpValue;
    }
    void DropDollar()
    {
        
        if (!isDeath)
        {
           
            GameObject dollarTemp = Instantiate(dollar, transform.position + new Vector3(0, 2, -0.7f), Quaternion.identity);
            dollarTemp.GetComponent<Rigidbody>().velocity = new Vector3(Random.Range(-4, 4), 1, 0);

        }

    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Dal" && other.gameObject.GetComponent<DalScript>().iscollected)
        {
            Destroy(other.gameObject);
            transform.DOShakePosition(0.3f, 0.3f);
            startSpeed -= 15;
            speedUpValue = 15;
            Invoke("SpeedUp", 1.5f);
        }
        else if (other.gameObject.tag == "Candy" && other.gameObject.GetComponent<Candy>().iscollected)
        {
            Destroy(other.gameObject);
            transform.DOShakePosition(0.3f, 0.3f);
            startSpeed -= 15;
            speedUpValue = 15;
            Invoke("SpeedUp", 1.5f);
        }
        else if (other.gameObject.tag == "Player")
        {
            isDeath = true;
            animControl.SetTrigger("isOver");
            rb.velocity = Vector3.zero;
            moneyBudget.transform.DOLocalMoveY(-65, 1f);
        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.tag == "Thief")
        {
            GameManager.Instance.FindNextThief();
        }
    }
    void FixedUpdate()
    {
        if (!isDeath)
        {
            Run();
        }
    }
    private void Update()
    {
        timer -= Time.deltaTime;
        if (timer <= 0f)
        {

            DropDollar();

            timer = Random.Range(10, 20);
        }
    }
}

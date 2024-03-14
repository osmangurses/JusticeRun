using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target; // Takip edilecek karakterin Transform bile�eni
    public float distance = 10.0f; // Karakterle aras�ndaki mesafe
    public float height = 5.0f; // Karakterin �zerindeki y�kseklik
    public float smoothSpeed = 0.5f; // Takip etme h�z�
    public Vector3 offset; // Kamera pozisyonu i�in ofset
    public bool isOver;
    public float gecenZaman;
    private void Start()
    {
        
    }
    private void FixedUpdate()
    {
        
        if (!isOver)
        {
            // Hedef pozisyonu hesapla
            Vector3 targetPosition = target.position + offset - target.forward * distance + Vector3.up * height;

            // Kameray� hedef pozisyona do�ru hareket ettir
            Vector3 smoothPosition = Vector3.Lerp(transform.position, targetPosition, smoothSpeed);
            transform.position = smoothPosition;

            // Kameran�n hedefe do�ru bakmas�n� sa�la
            transform.LookAt(target);
        }
        else
        {
            target = GameObject.FindGameObjectWithTag("Player").transform;
            offset = new Vector3(-3, 3, 2);
            distance = -5;
            height = 2;
            smoothSpeed = 0.1f;
            // Hedef pozisyonu hesapla
            Vector3 targetPosition = target.position + offset - target.forward * distance + Vector3.up * height;

            // Kameray� hedef pozisyona do�ru hareket ettir
            Vector3 smoothPosition = Vector3.Lerp(transform.position, targetPosition, smoothSpeed);
            transform.position = smoothPosition;

            // Kameran�n hedefe do�ru bakmas�n� sa�la
            transform.LookAt(target);
        }
    }
}

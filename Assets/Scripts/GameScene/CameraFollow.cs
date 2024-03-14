using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target; // Takip edilecek karakterin Transform bileþeni
    public float distance = 10.0f; // Karakterle arasýndaki mesafe
    public float height = 5.0f; // Karakterin üzerindeki yükseklik
    public float smoothSpeed = 0.5f; // Takip etme hýzý
    public Vector3 offset; // Kamera pozisyonu için ofset
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

            // Kamerayý hedef pozisyona doðru hareket ettir
            Vector3 smoothPosition = Vector3.Lerp(transform.position, targetPosition, smoothSpeed);
            transform.position = smoothPosition;

            // Kameranýn hedefe doðru bakmasýný saðla
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

            // Kamerayý hedef pozisyona doðru hareket ettir
            Vector3 smoothPosition = Vector3.Lerp(transform.position, targetPosition, smoothSpeed);
            transform.position = smoothPosition;

            // Kameranýn hedefe doðru bakmasýný saðla
            transform.LookAt(target);
        }
    }
}

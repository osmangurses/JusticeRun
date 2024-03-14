using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class FPSCounter : MonoBehaviour
{
    // Start is called before the first frame update
    private int lastFrameIndex;
    private float[] frameDeltaTimeArray;
    [SerializeField] private Text fpsText;

    private void Awake()
    {
        frameDeltaTimeArray = new float[50];
    }

    private void Update()
    {
        HandleFPSCounter();
        SetFPSText();
    }

    private void SetTextValue(Text tmpText, string value)
    {
        tmpText.text = value;
    }

    private void SetFPSText()
    {
        SetTextValue(fpsText, "FPS: " + Mathf.RoundToInt(CalculateFPS()));
    }

    private void HandleFPSCounter()  // Update
    {
        frameDeltaTimeArray[lastFrameIndex] = Time.deltaTime;
        lastFrameIndex = (lastFrameIndex + 1) % frameDeltaTimeArray.Length;
    }

    private float CalculateFPS()
    {
        float total = 0f;
        foreach (float deltaTime in frameDeltaTimeArray)
        {
            total += deltaTime;
        }
        return frameDeltaTimeArray.Length / total;
    }
}

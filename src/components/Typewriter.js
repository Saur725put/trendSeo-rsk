"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 150, delayBetweenLoops = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;
    let timeoutId;

    const startTyping = () => {
      setDisplayedText("");
      i = 0;

      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          
          timeoutId = setTimeout(() => {
            startTyping();
          }, delayBetweenLoops);
        }
      }, speed);
    };

    startTyping();

    // Cleanup functions to prevent memory leaks
    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delayBetweenLoops]);

  // कोई CSS नहीं, सिर्फ प्लेन टेक्स्ट रिटर्न जो इनफिनिटी टाइम तक लूप करेगा
  return <>{displayedText}</>;
}
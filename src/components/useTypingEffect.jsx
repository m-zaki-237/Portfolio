import { useState, useEffect } from "react";

const useTypingEffect = (text, speed, startDelay) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startDelay > 0 && index === 0) {
      const delayTimeout = setTimeout(() => {
        setIndex(1);
      }, startDelay);
      return () => clearTimeout(delayTimeout);
    } else if (index > 0 && index < text.length + 1) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, speed, startDelay]);

  return displayedText;
};

export default useTypingEffect;

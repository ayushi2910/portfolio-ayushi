// components/Typewriter.jsx
import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  words = [], 
  speed = 150, 
  deleteSpeed = 100, 
  delayBetweenWords = 2000,
  className = ""
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => 
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? delayBetweenWords : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
};

export default Typewriter;
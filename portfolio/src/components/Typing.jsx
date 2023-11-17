import React, { useState, useEffect } from 'react';
import "./Typing.css"

const Typing = () => {
  const [text, setText] = useState('');
  const phrases = ["Hi, I'm Michelle Malfabon"];
  const delay = 100; 
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < phrases.length) {
        setText(phrases[currentIndex].substring(0, text.length + 1));
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div className="typing-text" >
      <h1 className="intro-heading">{text}</h1>
      <br />
      <br />
      <br />
      <br />
      <p className='intro-p'>Web Developer and Educator</p>
    </div>
  );
};

export default Typing;


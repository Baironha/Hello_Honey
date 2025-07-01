import React, { useEffect, useRef, useState } from 'react';
import '../style/HoneyBot.css';
import BotNormal from '../img/HoneyLogo.png'
import BotSmile from '../img/HoneyLogo.png';

function HoneyBot() {
  const botRef = useRef(null);
  const [smile, setSmile] = useState(false);

  useEffect(() => {
    const bot = botRef.current;

    const handleMouseMove = (e) => {
      const rect = bot.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angleX = (e.clientX - centerX) / 20; // ajusta sensibilidad
      const angleY = (e.clientY - centerY) / 20;

      bot.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    botRef.current.classList.add('jump');
    setTimeout(() => {
      botRef.current.classList.remove('jump');
    }, 600);
  };

  return (
    <div
      className="honey-bot"
      ref={botRef}
      onClick={handleClick}
      onMouseEnter={() => setSmile(true)}
      onMouseLeave={() => setSmile(false)}
    >
      <img src={smile ? BotSmile : BotNormal} alt="Honey Bot" />
    </div>
  );
}

export default HoneyBot;

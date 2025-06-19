import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/QuienEsHoney.css';

function QuienEsHoney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      type: 'image',
      src: 'https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif',
      text: 'Honey te acompaña cuando el día se siente abrumador.',
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      text: 'Videos motivacionales para reconectar contigo mismo.',
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/320px-Cat03.jpg',
      text: 'Técnicas de relajación guiadas por IA.',
    },
  ];

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: '17%', // más preciso para igualar ambos lados
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: true,
  swipeToSlide: true,
  beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
};


  return (
    <div id='Cont_QuienEsHoney'>
      <div id='Cont_Texto_QuienEsHoney'>
        <h1>¿Quiénes somos?</h1>
        <h2>Hello Honey es la empresa creadora de la IA Honey</h2>
        <p>
          
            Honey es una IA enfocada en la economía y psicología, una asistente virtual
            que está dispuesta ayudarte en todo momento con problemas que pueden ser abrumadores.
          
        </p>
      </div>

      <div id='Carrusel_QuienEsHoney'>
        <h2 className='Tcarrusel'>COSAS QUE HARÁ HONEY POR TI</h2>
        <Slider {...settings}>
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + items.length) % items.length;
            const isNext = index === (currentIndex + 1) % items.length;

            let className = 'SlideItem';
            if (isActive) className += ' active';
            else if (isPrev) className += ' prev';
            else if (isNext) className += ' next';

            return (
              <div key={index} className={className}>
                <div className='SlideMedia'>
                  {item.type === 'image' ? (
                    <img src={item.src} alt='' className='CarruselImg' />
                  ) : (
                    <video src={item.src} controls className='CarruselVideo' />
                  )}
                </div>
                <p className='SlideText'>{item.text}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default QuienEsHoney;

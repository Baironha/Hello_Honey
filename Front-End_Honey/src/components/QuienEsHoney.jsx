/* import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/QuienEsHoney.css';
import meditacion from '../img/meditacion2.jpg'
import Terapia from '../img/TERAPIA.jpg'
import MentalidadGanadora from '../img/MentalidadGanadora.jpg'



function QuienEsHoney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      type: 'image',
      src: { meditacion} ,
      text: 'Honey te acompaña cuando el día se siente abrumador.',
    },
    {
      type: 'video',
      src: {Terapia},
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
  centerPadding: '17%', 
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
 */






import React, { useState, useEffect } from 'react';
import '../Style/QuienEsHoney.css';

import Planificacion_Proyectos from '../img/PLANIFICACIONPROYECT.png';
import Analisis_Mercado from '../img/ANALISISMERCADO.png';
import KPI from '../img/KPI.png';
import meditacion from '../img/meditacion2.jpg';
import Terapia from '../img/TERAPIA.jpg';
import MentalidadGanadora from '../img/MentalidadGanadora.jpg';

const slides = [
  { src: Planificacion_Proyectos, caption: 'Caption Text' },
  { src: Analisis_Mercado, caption: 'Caption Two' },
  { src: KPI, caption: 'Caption Three' },
  { src: meditacion, caption: 'Caption Ford' },
  { src: Terapia, caption: 'Caption Five' },
  { src: MentalidadGanadora, caption: 'Caption Six' },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrent(index);

  // Automatización del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  return (
    <div className='Container-Carrusel'>
      <div className="slideshow-box">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slideshow-slide fade ${index === current ? 'active' : ''}`}
          >
            <div className="slideshow-number">{index + 1} / {slides.length}</div>
            <img src={slide.src} alt={`slide-${index}`} className="slideshow-img" />
            <div className="slideshow-caption">{slide.caption}</div>
          </div>
        ))}

        <button className="slideshow-btn prev" onClick={prevSlide}>❮</button>
        <button className="slideshow-btn next" onClick={nextSlide}>❯</button>

        <div className="slideshow-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slideshow-dot ${index === current ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

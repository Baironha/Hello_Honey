/* import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/CardsModelsStyle.css'
import { FaCheckCircle } from 'react-icons/fa'

import imgFree from '../img/PNG_FREE.png'
import imgPremiun from '../img/PNG_PREMIUN.jpg'
import imgVip from '../img/PNG_VIP.png'

function CardsModelosHoney() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleCardClick = () => {
    setLoading(true)
    setTimeout(() => {
      navigate('/Carrito')
    }, 3000)
  }

  return (
    <div>
      {loading && (
        <div className="LoadingOverlay">
          <div className="LoadingContent">
            <img src={imgPremiun} alt="Cargando" className="LoadingLogo" />
            <div className="Spinner"></div>
          </div>
        </div>
      )}

      <div className='HoneyCardsContainer'>
        <div className='ModelsHoney' onClick={handleCardClick}>
          <img src={imgFree} alt="Modelo Gratuito" className='CardsImgModels' />
          <h3 className='TModelFree'>Standard</h3>
          <p className='TextModelHoney'>
            <strong>$ 0.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>

        <div className='HoneyCard' onClick={handleCardClick}>
          <img src={imgPremiun} alt="Modelo Plus" className='CardsImgModels' />
          <h3 className='TModelFree'>Plus</h3>
          <p className='TextModelHoney'>
            <strong>$ 3.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica con Honey <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>

        <div className='HoneyCard' onClick={handleCardClick}>
          <img src={imgVip} alt="Modelo VIP" className='CardsImgModels' />
          <h3 className='TModelFree'>VIP</h3>
          <p className='TextModelHoney'>
            <strong>$ 5.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsModelosHoney
 */















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CardsModelsStyle.css';
import { FaCheckCircle } from 'react-icons/fa';

import imgFree from '../img/PNG_FREE.png';
import imgPremiun from '../img/PNG_PREMIUN.jpg';
import imgVip from '../img/PNG_VIP.png';

function CardsModelosHoney() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // LÓGICA DE NAVEGACIÓN POR CARD
  const navegarAStandard = () => {
    setLoading(true);
    setTimeout(() => navigate('/AddStandard'), 3000);
  };

  const navegarAPlus = () => {
    setLoading(true);
    setTimeout(() => navigate('/plus'), 3000);
  };

  const navegarAVip = () => {
    setLoading(true);
    setTimeout(() => navigate('/vip'), 3000);
  };

  return (
    <div>
      {loading && (
        <div className="LoadingOverlay">
          <div className="LoadingContent">
            <img src={imgPremiun} alt="Cargando" className="LoadingLogo" />
            <div className="Spinner"></div>
          </div>
        </div>
      )}

      <div className='HoneyCardsContainer'>

        {/* Card Standard */}
        <div className='ModelsHoney' onClick={navegarAStandard}>
          <img src={imgFree} alt="Modelo Standard" className='CardsImgModels' />
          <h3 className='TModelFree'>Standard</h3>
          <p className='TextModelHoney'>
            <strong>$ 0.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>

        {/* Card Plus */}
        <div className='HoneyCard' onClick={navegarAPlus}>
          <img src={imgPremiun} alt="Modelo Plus" className='CardsImgModels' />
          <h3 className='TModelFree'>Plus</h3>
          <p className='TextModelHoney'>
            <strong>$ 3.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica con Honey <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>

        {/* Card VIP */}
        <div className='HoneyCard' onClick={navegarAVip}>
          <img src={imgVip} alt="Modelo VIP" className='CardsImgModels' />
          <h3 className='TModelFree'>VIP</h3>
          <p className='TextModelHoney'>
            <strong>$ 5.00</strong> <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de terapia diaria <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>1h de asistencia económica <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
            <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
          </p>
        </div>

      </div>
    </div>
  );
}

export default CardsModelosHoney;

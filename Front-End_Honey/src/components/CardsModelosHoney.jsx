
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CardsModelsStyle.css';
import { FaCheckCircle } from 'react-icons/fa';

import Logo from '../img/HoneyLogo.png'


import Logo_PREMIUM_original from '../img/Logo_PREMIUM_original.png'
import Logo_VIP_original from '../img/Logo_VIP_original.png'
import Logo_FREE_original from '../img/Logo_FREE_original.png'



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
        setTimeout(() => navigate('/Addplus'), 3000);
    };

    const navegarAVip = () => {
        setLoading(true);
        setTimeout(() => navigate('/AddVip'), 3000);
    };

    return (
        <div>
          {loading && (
              <div className="LoadingOverlay">
                <div className="LoadingContent">
                    <img src={Logo} alt="Cargando" className="LoadingLogo" />
                    <div className="Spinner"></div>
                </div>
              </div>
          )}

          <div className='HoneyCardsContainer'>

              {/* Card Standard */}
              <div className='ModelsHoney' onClick={navegarAStandard}>
              <img src={Logo_FREE_original} alt="Modelo Standard" className='CardsImgModels' />
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
                  <img src={Logo_PREMIUM_original} alt="Modelo Plus" className='CardsImgModels' />
                  <h3 className='TModelFree'>Plus</h3>
                  <p className='TextModelHoney'>
                      <strong>$ 3.00</strong> <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>3h de terapia diaria <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Ilimitada la asistencia económica<br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Cursos financieros y desarrollo personal<br />
                  </p>
              </div>

              {/* Card VIP */}
              <div className='HoneyCard' onClick={navegarAVip}>
                  <img src={Logo_VIP_original} alt="Modelo VIP" className='CardsImgModels' />
                  <h3 className='TModelFree'>VIP</h3>
                  <p className='TextModelHoney'>
                      <strong>$ 5.00</strong> <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Ilimitada la terapia diaria <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Ilimitada la asistencia económica <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a novedades de la economía <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Acceso a contactos de profesionales <br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Cursos financieros y desarrollo personal<br />
                      <span className='PtModelFree'><FaCheckCircle className='icon-check' /></span>Asesoria con profesionales<br />
                  </p>
              </div>

          </div>
        </div>
    );
}

export default CardsModelosHoney;

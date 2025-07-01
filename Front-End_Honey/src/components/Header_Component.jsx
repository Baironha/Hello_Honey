import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../style/HeaderHomeStyle.css'
import Logo from "../img/HoneyLogo.png"

function Header_Component() {
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // LÓGICA DE NAVEGACIÓN POR CARD
    const NavigateChatHoney = () => {
        setLoading(true);
        setTimeout(() => navigate('/ChatHoney'), 3000);
    };

  return (
    <div id='ContHeaderHomepage'>
        <div>
          {loading && (
            <div className="LoadingOverlay">
              <div className="LoadingContent">
                  <img src={Logo} alt="Cargando" className="LoadingLogo" />
                  <div className="Spinner"></div>
              </div>
            </div>
          )}
        </div>
        <header id='HeaderHomePage'>
            <h1 className='TiuloHeader1'>Hello HONEY</h1>
            <h2 className='TituloHeader2'>EN LA ORILLA DEL MAR HONEY VE EL SOL BRILLAR</h2>
            <div className='wrap_btn_header'>
              <button id='BtnHeaderHoney' onClick={NavigateChatHoney}>Habla con Honey</button>
            </div>
            
        </header>
    </div>
  )
}

export default Header_Component
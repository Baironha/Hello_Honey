import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import '../style/NavbarHomestyle.css'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import Cookies from 'js-cookie';

import Psicologia from '../img/IMG_PSYCHOLOGY.png'
import Economia from '../img/IMG_ECONOMIA.png'
import FREE from '../img/Logo_FREE_original.png'
import PREMIUM from '../img/Logo_PREMIUM_original.png'
import VIP from '../img/Logo_VIP_original.png'
import Asesoramientofinanciero from '../img/Asesoramiento financiero.png'
import Concentracion from '../img/img_CONCENTRACION.png'
import Logo from '../img/HoneyLogo.png'


function Navbar_Honey() {
  const [activeSection, setActiveSection] = useState(null)

  const handleDropdown = (section) => {
    setActiveSection((prev) => (prev === section ? null : section))
  }

  const navigate= useNavigate()
    const isLoggedIn = Cookies.get("access_token")
    function Userlogueado() {
      if (isLoggedIn) {
        navigate('/PerfilUsuarios');
      } else {
      navigate('/Login');
      }
    }

  const menuItems = [
    { key: 'sobre', label: 'Sobre Nosotros' },
    { key: 'servicios', label: 'Servicios' },
    { key: 'novedades', label: 'Novedades' },
    { key: 'membresias', label: 'Membresías' }
  ]

  return (
    <div>
      <nav id="NavbarHoney">
        <Link to="/" id="NavbarHoneyLogo"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <img className='LogoNavbar' src={Logo} alt="" width={50} />
          Hello Honey 
        </ Link >

        <ul id="NavbarHoneyLinks">
          {menuItems.map(({ key, label }) => (
            <li key={key}>
              <button
                className={`nav-btn ${activeSection === key ? 'active' : ''}`}
                onClick={() => handleDropdown(key)}
              >
                {label} ▼
              </button>
            </li>
          ))}
        </ul>
        <div id="NavbarHoneyIcons">
          <Link to="/Registrarse" className="nav-icon-link">Register</Link>
          {/* <Link to="/Login" className="nav-icon-link" >Login</Link> */}
          <button onClick={Userlogueado} id='btnIcon' className="nav-icon-link"> {isLoggedIn ? (<VscAccount className="icon" />) : (<span >Login</span>)}</button>
        </div>
      </nav>

      <div className={`dropdown-panel-wrapper ${activeSection ? 'active' : 'inactive'}`}>

        {/* === SOBRE NOSOTROS === */}
        {activeSection === 'sobre' && (
          <div className="dropdown-panel">
            <div >
              <br />
              <h3>¿Qué es Honey?</h3>
              <p>Honeyes una IA asistente virtual enfocada en la economía y la psicología personal y financiera.</p>
            </div>
            <div className="dropdown-cards">
              <div className="info-card">
                <img src={Economia} alt="Economía" />
                <h4>Economía</h4>
                <p>Consejos y análisis financieros personalizados.</p>
              </div>
              <div className="info-card">
                <img src={Psicologia} alt="Psicología" />
                <h4>Psicología</h4>
                <p>Apoyo en tu bienestar mental y emocional.</p>
              </div>
            </div>
          </div>
        )}

        {/* === SERVICIOS === */}
        {activeSection === 'servicios' && (
          <div className="dropdown-panel">
            <br />
            <div className="dropdown-description">
              <h3>Nuestros Servicios</h3>
              <p>Descubre todo lo que Honey puede hacer por ti.</p>
            </div>
            <div className="dropdown-cards">
              <div className="info-card">
                <img src={Asesoramientofinanciero} alt="Asesoría financiera" />
                <h4>Asesoría</h4>
                <p>Consultoría en línea con inteligencia artificial.</p>
              </div>
            </div>
          </div>
        )}

        {/* === NOVEDADES === */}
        {activeSection === 'novedades' && (
          <div className="dropdown-panel">
            <div className="dropdown-description">
              <h3>Novedades de Honey</h3>
              <p>Lo más reciente en funciones y mejoras.</p>
            </div>
            <div className="dropdown-cards">
              <div className="info-card">
                <img src={Concentracion} alt="Concentración" />
                <h4>Modo Focus</h4>
                <p>Elimina distracciones y enfoca tu energía.</p>
              </div>
            </div>
          </div>
        )}

        {/* === MEMBRESÍAS === */}
        {activeSection === 'membresias' && (
          <div className="dropdown-panel">
            <div className="dropdown-description">
              <h3>Planes y Membresías</h3>
              <p>Escoge la experiencia de acompañamiento que deseas.</p>
            </div>
            <div className="dropdown-cards">
              <a href="#plan-basico" className="info-card">
                <img src={FREE} alt="Plan Básico" />
                <h4>Plan Básico</h4>
                <p>Ideal para usuarios nuevos. Gratuito.</p>
              </a>
              <a href="#plan-pro" className="info-card">
                <img src={PREMIUM} alt="Plan PREMIUM" />
                <h4>Plan Pro</h4>
                <p>Acceso completo a todas las funciones premium.</p>
              </a>
              <a href="#plan-vip" className="info-card">
                <img src={VIP} alt="Plan VIP" />
                <h4>Plan VIP</h4>
                <p>La experiencia exclusiva para acompañamiento total.</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar_Honey;

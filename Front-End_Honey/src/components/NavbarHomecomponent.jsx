import React, { useState } from 'react'
import '../style/NavbarHomestyle.css'
import { Link } from 'react-router-dom'

function Navbar_Honey() {
  const [activeSection, setActiveSection] = useState(null)

  const handleDropdown = (section) => {
    setActiveSection((prev) => (prev === section ? null : section))
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
        <Link to="/" id="NavbarHoneyLogo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Hello Honey
        </Link>

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
          <Link to="/Login" className="nav-icon-link">Login</Link>
        </div>
      </nav>

      <div
        className={`dropdown-panel-wrapper ${
          activeSection ? 'active' : 'inactive'
        }`}
      >
        {/* === SOBRE NOSOTROS === */}
        {activeSection === 'sobre' && (
          <div className="dropdown-panel">
            <div className="dropdown-description">
              <h3>¿Qué es Honey?</h3>
              <p>
                Honey es una IA asistente virtual enfocada en la economía y la
                psicología personal y financiera.
              </p>
            </div>
            <div className="dropdown-cards">
              <a href="#economia" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1603985529763-85cddcd5f6f1"
                  alt="Economía"
                />
                <h4>Economía</h4>
                <p>Consejos y análisis financieros personalizados.</p>
              </a>
              <a href="#psicologia" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1515165562835-cdbf6b9bfa0e"
                  alt="Psicología"
                />
                <h4>Psicología</h4>
                <p>Apoyo en tu bienestar mental y emocional.</p>
              </a>
            </div>
          </div>
        )}

        {/* === SERVICIOS === */}
        {activeSection === 'servicios' && (
          <div className="dropdown-panel">
            <div className="dropdown-description">
              <h3>Nuestros Servicios</h3>
              <p>Descubre todo lo que Honey puede hacer por ti.</p>
            </div>
            <div className="dropdown-cards">
              <a href="#asesoria" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1612831661656-31e099bb8b96"
                  alt="Asesoría"
                />
                <h4>Asesoría</h4>
                <p>Consultoría en línea con inteligencia artificial.</p>
              </a>
              <a href="#seguimiento" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-ec7c35babea1"
                  alt="Seguimiento"
                />
                <h4>Seguimiento</h4>
                <p>Monitoriza tus metas económicas y emocionales.</p>
              </a>
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
              <a href="#ahorro" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1565372592015-4c9da173a844"
                  alt="Ahorro"
                />
                <h4>Modo Ahorro</h4>
                <p>Calculadora de ahorro automática con IA.</p>
              </a>
              <a href="#focus" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1591012911207-b3eabfc5961d"
                  alt="Concentración"
                />
                <h4>Modo Focus</h4>
                <p>Elimina distracciones y enfoca tu energía.</p>
              </a>
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
                <img
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
                  alt="Plan Básico"
                />
                <h4>Plan Básico</h4>
                <p>Ideal para usuarios nuevos. Gratuito.</p>
              </a>
              <a href="#plan-pro" className="info-card">
                <img
                  src="https://images.unsplash.com/photo-1564869734812-4fa4b64ecb19"
                  alt="Plan Pro"
                />
                <h4>Plan Pro</h4>
                <p>Acceso completo a todas las funciones premium.</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar_Honey

import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/AddMembresiaStandard.css'
import logoStandard from '../img/PNG_PREMIUN.jpg'
import imgHoney from '../img/IMG_CARD_ECO.jpg'

function AddMembresiaPlus() {
  const navigate = useNavigate()

  const handleComprar = () => {
    const membresia = {
      id: 103,
      name: "Membresía Plus Honey",
      price: 5.0,
      duration: "mensual",
      quantity: 1,
      description: "Acceso extendido con beneficios adicionales.",
    }

    navigate('/carrito', { state: { membresia } })
  }

  return (
    <div className='padre-container'>
      <div className="standard-container">
        <div className="titulo-con-logo">
          <img src={logoStandard} alt="Logo Standard" className="logo-standard" />
          <h1 className="titulo">Membresía plus Honey</h1>
          <h2 className='PrecioPlus'>$5.00</h2>
        </div>

        <img src={imgHoney} alt="Honey" className="imagen-honey" />

        <ul className="beneficios">
          <li>1h de terapia diaria</li>
          <li>1h de asistencia económica</li>
          <li>Acceso a novedades de la economía</li>
          <li>Acceso a contactos de profesionales</li>
        </ul>

        <p className="descripcion">
          Adquirir esta membresía te ayudará con tu día a día. Sabemos que cada día es un nuevo reto,
          por lo que optar por Honey Standard te ayudará a sobrellevar esas cargas laborales y emocionales.
        </p>

        <button className="boton-adquirir" onClick={handleComprar}>
          Adquirir esta membresía
        </button>
      </div>
    </div>
  )
}

export default AddMembresiaPlus

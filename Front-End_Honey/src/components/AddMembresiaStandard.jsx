import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/AddMembresiaStandard.css'
import logoStandard from '../img/Logo_FREE_original.png'
import imgHoney from '../img/HoneyLogo.png'

function AddMembresiaStandard() {
  const navigate = useNavigate()

  const handleComprar = () => {
    const membresia = {
      id: 102,
      name: "Membresía Standard Honey",
      price: 0.0,
      duration: "mensual",
      quantity: 1,
      description: "Acceso básico gratuito a recursos esenciales.",
    }

    navigate('/carrito', { state: { membresia } })
  }

  return (
    <div className='Container-Principal-Standard'>
      <div className="standard-segundario-container-standar">
        <div className="titulo-con-logo">
          <img src={logoStandard} alt="Logo Standard" className="logo-standard" />
          <h1 className="titulo-Standard">Membresía Standard Honey</h1>
          <h2 className='Precio-Standard'>$0.00</h2>
        </div>

        <img src={imgHoney} alt="Honey" className="imagen-honey-Standard" />

        <ul className="beneficios-Standard">
          <li>1h de terapia diaria</li>
          <li>1h de asistencia económica</li>
          <li>Acceso a novedades de la economía</li>
          <li>Acceso a contactos de profesionales</li>
        </ul>

        <p className="descripcion-Standard">
          Adquirir esta membresía te ayudará con tu día a día. Sabemos que cada día es un nuevo reto,
          por lo que optar por Honey Standard te ayudará a sobrellevar esas cargas laborales y emocionales.
        </p>

        <button className="boton-adquirir-Standard" onClick={handleComprar}>
          Adquirir esta membresía
        </button>
      </div>
    </div>
  )
}

export default AddMembresiaStandard

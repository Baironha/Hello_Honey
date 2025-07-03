import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/AddMembresiaPremiumStyle.css' 
import logoStandard from '../img/Logo_PREMIUM_original.png'
import imgHoney from '../img/HoneyLogo.png'
import Navbar_Honey from './Navbar_Honey'

function AddMembresiaPremium() {
  const navigate = useNavigate()

  const handleComprar = () => {
    const membresia = {
      id: 103,
      name: "Membresía Premium Honey",
      price: 3.0,
      duration: "mensual",
      quantity: 1,
      description: "Acceso extendido con beneficios adicionales.",
    }

    navigate('/carrito', { state: { membresia } })
  }

  return (
    <div>
      <Navbar_Honey/>
      <br />
      <br />
      <div className='padre-container-premium'>
        
        <div className="standard-container-premium">
          <div className="titulo-con-logo_Premium">
            <img src={logoStandard} alt="Logo Standard" className="logo_Premium" />
            <h1 className="titulo_Premium">Membresía Premium Honey</h1>
            <h2 className='PrecioPlus_Premium'>$3.00</h2>
          </div>

          <img src={imgHoney} alt="Honey" className="imagen-honey_Premium" />

          <ul className="beneficios_Premium">
            <li>- 1 hora de terapia diaria</li>
            <li>- 1 hora de asistencia económica</li>
            <li>- Acceso a novedades de la economía</li>
            <li>- Acceso a contactos de profesionales</li>
          </ul>

          <p className="descripcion_Premium">
            Adquirir esta membresía te ayudará con tu día a día. Sabemos que cada día es un nuevo reto,
            por lo que optar por Honey Standard te ayudará a sobrellevar esas cargas laborales y emocionales.
          </p>

          <button className="boton-adquirir_Premium" onClick={handleComprar}>
            Adquirir esta membresía
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddMembresiaPremium;

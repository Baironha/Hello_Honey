import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/HoneyAsistenteStyle.css'
import Logo from '../img/HoneyLogo.png'

function HoneyAsistente() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/ChatHoney');
    }

    return (
        <div id='ContHoneyAsis'>
            <h1 className='T1HoneyAsisten'>UN DÍA MUY OCUPADO?</h1>
            <p className='TextoHoneyAsistente'>
                Nos importa tu salud y Honey está para ti. <br />
                Entendemos que las exigencias diarias pueden ser abrumadoras.  
                Recordarte que cuidar de tu salud mental no es un lujo, es una necesidad.
            </p>
            <br />
            <p className='TextoHoneyAsistente'><strong>
                Honey está diseñada para ayudar a las personas a gestionar el estrés de forma consciente y efectiva, brindando herramientas psicológicas adaptadas a sus necesidades diarias.<br />
                A través de un enfoque basado en la empatía, la autorreflexión y el acompañamiento emocional, facilita que cada persona pueda reconectar consigo misma, identificar lo que siente y retomar el control de su bienestar mental.  
                Ya sea en medio de una jornada exigente o en momentos de calma, Honey actúa como una guía accesible y confiable para promover el equilibrio emocional y fortalecer el autocuidado.
            </strong></p>
            <div className="Gif_Boton_Container">
                <img 
                    src={Logo}
                    alt="Cachorro Pastor Belga" 
                    className="Gif_Boton_Asistente" 
                    onClick={handleRedirect}
                />
                <p className="GifTexto">Haz clic para hablar con Honey</p>
            </div>
        </div>
    )
}

export default HoneyAsistente

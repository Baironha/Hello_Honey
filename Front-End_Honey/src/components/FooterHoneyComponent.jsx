import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import '../style/FooterHoney.css';

function FooterHoneyComponent() {
  return (
    <footer className='footer-container-honey'>
      <div className='footer-section'>
        <h3>Contáctanos</h3>
        <p>Tel. 87409661</p>
        <p>Email. hellohoney@gmail.com</p>
      </div>

      <div className='footer-section'>
        <h3>Servicios</h3>
        <ul>
          <li>Economía</li>
          <li>Psicología</li>
          <li>Asistente virtual</li>
        </ul>
      </div>

      <div className='footer-section'>
        <h3>Síguenos</h3>
        <div className='social-icons'>
          <a href='https://instagram.com/TU_USUARIO' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
          <a href='https://facebook.com/TU_USUARIO' target='_blank' rel='noopener noreferrer'>
            <FaFacebook />
          </a>
          <a href='https://github.com/TU_USUARIO' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterHoneyComponent;


import '../style/TextBody1style.css'

import ImgEco from '../img/IMG_CARD_ECO.jpg'
import ImgProf from '../img/IMG_CARD_PROF.jpg'
import ImgPsico from '../img/IMG_CARD_PSICO.jpg'

function TextBodyHoneyComponent() {
  return (
    <div>
      <div className='TextosBody1'>
        <p>
          <strong>
            Honey es capaz de razonar antes de responder, lo que ayuda a brindarle al <br />
            usuario una experiencia más inmersiva y realista. <br />
            Con el razonamiento de Honey podrás simplificar y planificar con mayor facilidad tus proyectos e ideas.
          </strong>
        </p>
      </div>

      <div className='HoneyCardsContainer'>
        <div className='HoneyCard'>
          <img src={ImgPsico} alt="Psicología" className="HoneyCardImg" />
          <h3>Psicología personal y financiera</h3>
          <p>
            Honey te escuchará y ayudará a enfrentar las dificultades de tu día a día, de tus situaciones laborales o financieras. Sea lo que sea, Honey estará para ti.
          </p>
        </div>

        <div className='HoneyCard'>
          <img src={ImgEco} alt="Economía" className="HoneyCardImg" />
          <h3>Economía</h3>
          <p>
            Honey te ayudará a planificar tus metas financieras, proyectos y podrá ayudarte a crecer en tu negocio o guiarte en el mundo del emprendimiento.
          </p>
        </div>

        <div className='HoneyCard'>
          <img src={ImgProf} alt="Asistencia Profesional" className="HoneyCardImg" />
          <h3>Asistencia de profesionales del área</h3>
          <p>
            Si necesitas una ayuda más personalizada, Hello Honey podrá contactarte con líderes del área que necesites, enfocados en lograr los resultados que necesitas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TextBodyHoneyComponent

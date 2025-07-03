import React, { useState } from "react";
import "../style/AdministracionNegocios.css";

function AdministracionNegocios() {
  const [seccionesVisibles, setSeccionesVisibles] = useState({});

  const toggleSeccion = (id) => {
    setSeccionesVisibles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderBoton = (id, texto) => (
    <button
      id={`Btn_Mostrar_Mas_${id}`}
      onClick={(e) => {
        if (e.detail === 2) {
          toggleSeccion(id);
        } else if (e.detail === 1 && !seccionesVisibles[id]) {
          toggleSeccion(id);
        }
      }}
    >
      {seccionesVisibles[id] ? "Ocultar" : texto}
    </button>
  );

  return (
    <div className="Cont_Padre_Negocios">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="negocios-wrapper">
            <div className="negocios-section" id="intro-negocios">
                <div className="HeaderNegocios">
                    <h1 className="TitulosSeccionNegocios">¿Qué es la Administración de Negocios?</h1>
                </div>

                <div className="Cont_Principal_Negocios">
                    <p>
                    La administración de negocios en términos básicos busca orientar al máximo la gestión de una empresa u organización.<br />
                    <br />
                    Para ello es imprescindible que la empresa crezca de forma correcta según los recursos que posee, así como buscar mejorar en cada uno de sus procesos. <br />
                    Esto es importante ya que de allí depende en gran medida el éxito empresarial. Por otro lado, la carrera en administración de negocios provee los saberes <br />
                    necesarios a las personas que están interesados en forjar desde cero su propia empresa. De hecho, ese carácter de “emprendedor” es uno de los puntos mejor valorados <br />
                    de esta profesión en concreto. Logra plasmar una concepción llena de ambición. <br />
                    </p>
                    {renderBoton("AdminNegociosIntro", "Mostrar más")}
                    {seccionesVisibles["AdminNegociosIntro"] && (
                    <div id="Cont_desple_AdminNegociosIntro">
                        <p>
                        Debido a la capacidad de formar líderes que puedan gestionar y mantener sus propios proyectos, es algo que no puede ignorarse. En pocas palabras, si eres de las personas <br />
                        que busca emprender a futuro, esta carrera es perfecta para ti. Te dará los cimientos necesarios para empezar a estructurar un negocio sin necesidad de depender de terceros. <br />
                        Diferencia entre Administración de Negocios y Administración de Negocios Internacionales <br />
                        La administración de negocios se encarga de preparar los principios para la creación de una empresa. Es decir, la profesión se encarga de empoderar la producción y crear una <br />
                        rentabilidad que dependerá del público objetivo. <br />
                        <br />
                        Por otro lado, la administración en negocios internacionales tiene la misión de gerenciar todo tipo de transacciones del sector privado que implique a 2 o más países. <br />
                        El profesional en esta área tiene la capacidad de negociar a nivel internacional con los distintos convenios y contratos necesarios para entrar en un nuevo mercado. Saber <br />
                        sobre tendencias de mercado, cultura de consumo y un buen manejo del inglés son claves en el sector internacional. <br />
                        Pero en general, la carrera en administración de negocios prepara a profesionales con las herramientas necesarias hasta obtener las habilidades de planificación, dirección, <br />
                        organización y control en el manejo de los recursos económicos. <br />
                        <br />
                        Su misión es impulsar a una empresa al éxito marcando previamente los objetivos de forma eficiente. <br />
                        Asimismo, la administración forma parte de las ciencias sociales. Lo decimos porque si bien tiene sus componentes estratégicos y matemáticos, no podemos omitir el hecho de que <br />
                        posee un elemento humanístico. <br />
                        Finalmente, el administrador es quien se ocupa de ver constantemente el estado de los recursos que la empresa ofrece. También se encarga de ver qué retos son necesarios para <br />
                        examinar puntos de superación y hacerle frente a cualquier dificultad empresarial. <br />
                        Por eso la carrera de negocios es una de las profesiones más importantes a considerar.
                        </p>
                    </div>
                    )}
                </div>
                </div>

                <br />

                <div className="Cont_Izquierdos_Negocios" id="intro-negocios_izquierdo">
                    <h2 className="TitulosSeccionNegocios">La Política en la Administración de Negocios</h2>
                    <p><strong>Introducción</strong></p>
                    <p>
                        En el mundo empresarial, la política no se limita al ámbito gubernamental. También existe una dimensión política dentro de las organizaciones que influye profundamente en cómo se toman <br />
                        decisiones, cómo se distribuyen los recursos y cómo se establecen las relaciones de poder. Comprender la política organizacional es esencial para una administración efectiva y estratégica de los negocios.
                    </p>
                    {renderBoton("AdminNegociosPolitica", "Mostrar más")}
                    {seccionesVisibles["AdminNegociosPolitica"] && (
                        <div id="Cont_desple_AdminNegociosPolitica">
                            <p><strong>1. ¿Qué es la política organizacional?</strong></p>
                            <p>
                                La política organizacional se refiere a los procesos informales de influencia, negociación y poder que existen en toda organización. Va más allá de los reglamentos formales y afecta <br />
                                directamente la forma en que se gestionan los conflictos, se establecen prioridades y se construyen las relaciones laborales.
                            </p>
                            <p><strong>Puntos importantes:</strong></p>
                            <ul>
                                <li>La política interna no siempre es negativa; puede ser una herramienta de liderazgo y negociación.</li>
                                <li>Toda organización, sin importar su tamaño, está atravesada por relaciones de poder.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="Cont_Derecho_Negocios " id="politica-negocios_derecho">
                    <h2>2. Política interna y toma de decisiones</h2>
                    {renderBoton("AdminNegociosTomaDecisiones", "Mostrar más")}
                    {seccionesVisibles["AdminNegociosTomaDecisiones"] && (
                        <div id="Cont_desple_AdminNegociosTomaDecisiones">
                            <p>
                                Dentro de una empresa, las decisiones no siempre se toman de forma objetiva o racional. A menudo, intervienen <br />
                                factores políticos como alianzas, intereses personales o competencia entre departamentos. <br />
                                Los gerentes y líderes pueden usar su influencia informal para promover proyectos, contratar personas de confianza o bloquear <br />
                                decisiones ajenas. Esto genera un ambiente competitivo que, si no se gestiona bien, puede convertirse en un obstáculo para el <br />
                                logro de los objetivos organizacionales.
                            </p>
                            <p><strong>Puntos importantes:</strong></p>
                            <ul>
                                <li>La política interna puede beneficiar a la empresa si se alinea con la estrategia.</li>
                                <li>El exceso de rivalidades puede dañar la moral y la productividad del equipo.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="Cont_Izquierdos_Negocios" id="intro-negocios_izquierdo">
                <h2>3. Política organizacional y cultura corporativa</h2>
                {renderBoton("AdminNegociosCultura", "Mostrar más")}
                {seccionesVisibles["AdminNegociosCultura"] && (
                    <div id="Cont_desple_AdminNegociosCultura">
                    <p>
                        Las políticas internas también se relacionan con la cultura organizacional, es decir, los valores, normas y prácticas compartidas <br />
                        por los miembros de la empresa.
                        Una empresa con una cultura ética y participativa tiende a tener relaciones políticas más saludables. En cambio, una cultura cerrada o autoritaria <br />
                        puede generar políticas ocultas, rumores, favoritismos y desmotivación.
                    </p>
                    <p><strong>Puntos importantes:</strong></p>
                    <ul>
                        <li>Fomentar la transparencia reduce la política destructiva.</li>
                        <li>La cultura empresarial debe promover la equidad y la meritocracia.</li>
                    </ul>
                    </div>
                )}
                </div>

                <div className="Cont_Derecho_Negocios" id="politica-negocios_derecho">
                    <h2>4. Influencia del entorno político y legal</h2>
                    {renderBoton("AdminNegociosEntorno", "Mostrar más")}
                    {seccionesVisibles["AdminNegociosEntorno"] && (
                        <div id="Cont_desple_AdminNegociosEntorno">
                            <p>
                                Las empresas no operan en un vacío; están expuestas al entorno político externo, que incluye leyes, regulaciones y decisiones gubernamentales. <br />
                                Esto forma parte de la política pública que afecta directamente a la administración de negocios.
                                Cambios en impuestos, reformas laborales o nuevas leyes ambientales pueden obligar a una empresa a modificar su estructura o sus procesos. Además, <br />
                                algunas grandes empresas practican el lobby para influir en políticas que les beneficien.
                            </p>
                            <p><strong>Puntos Importantes:</strong></p>
                            <ul>
                                <li>Las empresas deben tener equipos que analicen el entorno político.</li>
                                <li>Adaptarse rápidamente a los cambios políticos puede marcar la diferencia en la competitividad.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="Cont_Izquierdos_Negocios" id="intro-negocios_izquierdo">
                    <h2>5. Política y estrategia empresarial</h2>
                    {renderBoton("AdminNegociosEstrategia", "Mostrar más")}
                    {seccionesVisibles["AdminNegociosEstrategia"] && (
                        <div id="Cont_desple_AdminNegociosEstrategia">
                            <p>
                                La política también influye en las estrategias de negocio, como alianzas comerciales, posicionamiento frente a competidores o decisiones de expansión. <br />
                                Los altos directivos utilizan su poder de decisión para dirigir la empresa hacia ciertas metas, y en este proceso entran en juego intereses, negociaciones y
                                visiones diferentes. La política estratégica implica decidir quién gana y quién pierde dentro y fuera de la organización.
                            </p>
                            <p><strong>Puntos importantes:</strong></p>
                            <ul>
                                <li>La política debe alinearse con los objetivos de largo plazo.</li>
                                <li>Las decisiones deben considerar tanto los intereses internos como el impacto externo.</li>
                            </ul>
                            <p>
                                <strong>
                                La política en la administración de negocios es una realidad inevitable y compleja. No se trata únicamente de luchas de poder, sino de cómo se <br />
                                construyen las relaciones, se gestionan los intereses y se toman decisiones en entornos dinámicos. Una gestión inteligente de la política organizacional <br />
                                puede contribuir al crecimiento, la innovación y la cohesión interna de una empresa. Por ello, los líderes deben desarrollar habilidades políticas éticas, <br />
                                estratégicas y transparentes, que permitan equilibrar los intereses individuales con el bien común de la organización.
                                </strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdministracionNegocios;

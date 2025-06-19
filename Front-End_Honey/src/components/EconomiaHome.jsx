import React,{ useState } from 'react'
import '../style/EconomiaHome.css'

function EconomiaHome() {

const [seccionesVisibles, setSeccionesVisibles] = useState({});

const toggleSeccion = (id) => {
  setSeccionesVisibles(prev => ({
    ...prev,
    [id]: !prev[id]  // Alterna entre mostrar y ocultar
  }));
};

    return (
        <div className="economia-page">
            <div id='Container_Inflación_Política_Monetaria'>
                {/* SE Muestra de aqui */}
                <h2 id='TitulosPrincipalesEco'>Inflación global</h2>
                <p><strong>¿Qué es la inflación?</strong></p>
                <p>
                    La inflación es el aumento sostenido y generalizado de los precios de bienes y servicios en una economía durante <br />
                    un período de tiempo. Cuando los precios suben, el poder adquisitivo del dinero disminuye: con la misma cantidad <br />
                    de dinero, puedes comprar menos cosas.
                </p>
                {!seccionesVisibles['Inflación_Política_Monetaria'] && (
            <button
                id='Btn_Mostrar_Mas_Inflación_Política_Monetaria'
                onClick={() => toggleSeccion('Inflación_Política_Monetaria')}
            >
                Mostrar más
            </button>
            )}
                {/* HASTA AQUI */}
                <br />
                <div id='Cont_desple_Inflación_Política_Monetaria'>
                    <h3>¿Cómo funciona la inflación?</h3>
                    <p><strong>La inflación puede surgir por diversas razones, entre ellas:</strong></p>
                    <ul>
                        <li>Demanda excesiva: cuando muchas personas quieren comprar más de lo que la economía puede producir (inflación por demanda).</li>
                        <li>Aumento en los costos de producción: como alza en precios de materias primas o salarios (inflación por costos).</li>
                        <li>Emisión excesiva de dinero: si un banco central imprime dinero sin respaldo, los precios tienden a subir.</li>
                        <li>Se mide comúnmente a través del Índice de Precios al Consumidor (IPC), que refleja la variación promedio de precios de una canasta básica de productos.</li>
                    </ul>
                    <h2>¿Cómo afecta la inflación al mundo?</h2>
                    <ul>
                        <li>Pérdida del poder adquisitivo: las personas ven disminuido el valor real de su dinero.</li>
                        <li>Afecta el ahorro y la inversión: si los precios suben más que los intereses bancarios, ahorrar pierde sentido.</li>
                        <li>Distorsiona decisiones empresariales: la incertidumbre en los precios complica la planificación económica.</li>
                        <li>🇺🇳 Golpea más a países vulnerables: en economías frágiles, la inflación puede provocar crisis humanitarias, devaluación e inestabilidad social.</li>
                    </ul>
                </div>
            </div>
            



            <div id='Container_la_política_monetaria'>
                {/* SE Muestra de aqui */}
                <h2 id='TitulosPrincipalesEco'>La política monetaria</h2>
                <p>
                    En el contexto de las ciencias económicas, la política monetaria actúa como una herramienta esencial para mantener la estabilidad <br />
                    económica de un país. Si imaginamos la política monetaria como un “container”, este contendría las decisiones, instrumentos y objetivos <br />
                    que los bancos centrales utilizan para influir en la economía, especialmente sobre variables como la inflación, el empleo y el crecimiento. <br />
                    Este ensayo explora qué contiene ese “container” y por qué su uso responsable es fundamental para la salud financiera de cualquier nación.
                </p>
                <button id='Btn_Mostrar_Mas_la_política_monetaria'></button>
                {/* HASTA AQUI */}
                <div>
                    <h3>¿Qué es la política monetaria?</h3>
                    <p>
                        La política monetaria es el conjunto de acciones que implementa el banco central de un país (como la Reserva Federal en EE. UU. o el Banco <br />
                        Central de Costa Rica) para controlar la cantidad de dinero que circula en la economía y las tasas de interés. Su principal objetivo es mantener <br />
                        la estabilidad de precios, es decir, controlar la inflación, sin descuidar el crecimiento económico ni el empleo.
                        <br />
                        Estas decisiones se toman observando distintos indicadores económicos, como:
                    </p>
                    <ul>
                        <li>Inflación y deflación.</li>
                        <li>Producto Interno Bruto (PIB).</li>
                        <li>Niveles de desempleo.</li>
                        <li>Tipo de cambio.</li>
                    </ul>
                    <br />

                    <h3>¿Qué contiene el “container” de la política monetaria?</h3>
                    <p>
                        El “container” de la política monetaria contiene varias herramientas fundamentales:
                    </p>
                    <ul>
                        <li>Tasa de interés de referencia: Es la herramienta más conocida. Si se sube, se encarece el crédito y se reduce el consumo; si se baja, se estimula el gasto y la inversión.</li>
                        <li>Operaciones de mercado abierto: Consisten en la compra o venta de bonos del gobierno para ajustar la liquidez del sistema financiero.</li>
                        <li>Requerimientos de encaje: Es la cantidad mínima de dinero que los bancos deben mantener sin prestar, lo cual afecta directamente la oferta de dinero.</li>
                        <li>Intervención cambiaria: En economías abiertas, los bancos centrales pueden intervenir en el mercado de divisas para estabilizar el tipo de cambio.</li>
                    </ul>
                    <br />

                    <h3>Política monetaria expansiva vs. contractiva</h3>
                    <p>
                        Existen dos enfoques principales:
                    </p>
                    <ul>
                        <li>Política monetaria expansiva: Aumenta la cantidad de dinero en circulación y baja las tasas de interés para estimular la economía, especialmente durante una recesión. </li>
                        <li>Política monetaria contractiva: Reduce la cantidad de dinero y sube las tasas para controlar la inflación, cuando la economía está sobrecalentada. </li>
                    </ul>
                    <p>
                        Un ejemplo reciente fue durante la pandemia del COVID-19, cuando muchos bancos centrales aplicaron políticas expansivas para evitar colapsos financieros. En contraste, en 2022-2023, se optó por <br />
                        políticas contractivas para frenar la inflación global postpandemia.  
                    </p>
                    <p><strong>La política monetaria es una herramienta poderosa que, como si fuera un “container”, guarda los instrumentos necesarios para guiar la economía hacia <br />
                    la estabilidad y el crecimiento. Su correcta aplicación por parte de los bancos centrales permite enfrentar crisis, controlar la inflación y mantener el <br />
                    equilibrio financiero. No obstante, exige responsabilidad, análisis técnico y visión a largo plazo. En un mundo cada vez más interconectado y cambiante, la política <br />
                    monetaria seguirá siendo uno de los pilares fundamentales para sostener economías sanas y sociedades más equilibradas.</strong></p>
                </div>
            </div>




            <div id='container_Mercados_Financieros_Bolsa_Valores'>
                {/* SE Muestra de aqui */}
                <h2 id='TitulosPrincipalesEco'>Mercados Financieros y Bolsa de Valores</h2>
                <p>
                    Los mercados financieros y la bolsa de valores son motores fundamentales del sistema económico moderno. A través de ellos, se canaliza el dinero desde <br />
                    quienes ahorran hacia quienes invierten, generando crecimiento, empleo y oportunidades. Su comprensión es clave para entender cómo funciona la economía de un país.
                </p>
                <br />
                <button id='Btn_Mostrar_Mas_Mercados_Financieros_Bolsa_Valores'>Mostrar mas</button>
                {/* HASTA AQUI */}
                <br />
                <div id='cont_seg_Mercados_Financieros_Bolsa_Valores'>
                    <h3>¿Qué son los mercados financieros?</h3>
                    <p>
                        Los mercados financieros son espacios donde se compran y venden activos como acciones, bonos, divisas y derivados. Funcionan como intermediarios entre los agentes <br />
                        económicos, facilitando el flujo de capital entre quienes tienen excedentes (ahorrantes o inversionistas) y quienes necesitan financiamiento (empresas, gobiernos).br
                        <strong>Se dividen principalmente en:</strong>
                    </p>
                    <ul>
                        <li><strong>Mercado de dinero:</strong> Intercambio de instrumentos financieros a corto plazo, como certificados de depósito o letras del tesoro.</li>
                        <li><strong>Mercado de capitales:</strong> Negociación de activos a mediano y largo plazo, como acciones y bonos corporativos.</li>
                        <li><strong>Mercado de divisas (Forex):</strong> Donde se compran y venden monedas extranjeras. Es el más grande y líquido del mundo.</li>
                        <li><strong>Mercado de derivados:</strong> Permite negociar contratos basados en activos subyacentes, como materias primas, divisas o índices bursátiles.</li>
                    </ul>
                    <h3>¿Qué es la bolsa de valores?</h3>
                    <p>
                        La bolsa de valores es una institución donde se negocian principalmente acciones (participaciones en empresas) y bonos (instrumentos de deuda). Actúa como <br />
                        un mercado organizado, transparente y supervisado que ofrece seguridad a inversionistas e instituciones. <br />
                        <strong>Entre sus funciones principales están:</strong>
                    </p>
                    <ul>
                        <li>Canalizar recursos hacia las empresas.</li>
                        <li>Proporcionar liquidez a los instrumentos financieros.</li>
                        <li>Generar precios de referencia para los activos.</li>
                        <li>Fomentar el ahorro y la inversión.</li>
                    </ul>
                    <p>
                        Un ejemplo claro es cuando una empresa desea crecer, pero no quiere endeudarse con un banco. Entonces, puede emitir acciones en la bolsa, atraer <br />
                        inversionistas y recibir capital a cambio de participación en la empresa.
                    </p>
                    <br />

                    <h3>Importancia de los mercados financieros</h3>
                    <p>
                        Los mercados financieros son fundamentales para el crecimiento económico. Permiten que las empresas innoven, se expandan y generen empleo. Además, los <br />
                        gobiernos pueden financiar proyectos públicos emitiendo bonos. <br />
                        La formación de precios en estos mercados es otro aspecto clave. Los precios de las acciones o bonos no solo reflejan el estado actual de las empresas, sino <br />
                        también las expectativas del mercado sobre su desempeño futuro. <br />
                    </p>
                    <br />

                    <h3>Riesgos y regulación</h3>
                    <p>
                        Pese a sus beneficios, los mercados financieros también presentan riesgos. La especulación excesiva, las crisis de confianza y las burbujas financieras pueden <br />
                        causar inestabilidad. Ejemplos históricos como la crisis del 2008 muestran cómo un mal manejo del riesgo puede afectar a millones de personas. <br />
                        Por ello, existen entes reguladores que supervisan estos mercados. En Costa Rica, por ejemplo, la Superintendencia General de Valores (SUGEVAL) vela por el orden y la <br />
                        transparencia. En otros países, destacan la SEC (EE.UU.) o la CNMV (España).
                    </p>
                    <br />

                    <h3>Tecnología y acceso</h3>
                    <p>
                        En los últimos años, la tecnología ha transformado el acceso a los mercados. Hoy, muchas personas invierten desde una app en su celular. Esto democratiza las finanzas, pero <br />
                        también exige educación financiera para evitar errores costosos. <br />
                        El auge de las criptomonedas, por ejemplo, ha llevado a millones de personas a involucrarse en mercados altamente volátiles, sin siempre comprender los riesgos asociados.
                    </p>

                    <p>
                        <strong>
                            Los mercados financieros y la bolsa de valores son estructuras clave para el desarrollo económico. Bien gestionados y regulados, permiten el crecimiento empresarial, la generación <br />
                            de empleo y el progreso tecnológico. Sin embargo, también conllevan riesgos que exigen conocimiento, vigilancia y responsabilidad. Por ello, fomentar la educación financiera desde <br />
                            etapas tempranas es esencial para formar ciudadanos capaces de tomar decisiones inteligentes en un mundo cada vez más conectado y financiero.
                        </strong>
                    </p>
                </div>
            </div>



            <div id='container_Recesión_Crecimiento_Económico'> 
                <h2 id='TitulosPrincipalesEco'>Recesión y Crecimiento Económico</h2>
                <p>
                    La economía mundial experimenta ciclos constantes de expansión y contracción. Estos periodos, conocidos como crecimiento económico y recesión, son parte inherente del funcionamiento del sistema <br />
                    capitalista. Entender cómo y por qué ocurren permite a los ciudadanos, gobiernos y empresas anticiparse, tomar decisiones acertadas y minimizar los impactos negativos. Ambos fenómenos, aunque opuestos, <br />
                    están íntimamente relacionados y reflejan la complejidad del sistema económico global.
                </p>
                <button id='Btn_Mostrar_Mas_Recesión_Crecimiento_Económico'>Mostrar mas</button>
                <div id='cont_seg_Recesión_Crecimiento_Económico'>
                    <h2>¿Qué es una recesión?</h2>
                    <p>
                        a recesión es una etapa del ciclo económico caracterizada por una caída sostenida de la actividad económica, que suele medirse por una disminución del Producto Interno Bruto (PIB) durante dos trimestres <br />
                        consecutivos o más. Este fenómeno se traduce en:
                    </p>
                    <ul>
                        <li>Aumento del desempleo. </li>
                        <li>Reducción del consumo y la inversión. </li>
                        <li>Disminución de la producción industrial. </li>
                        <li>Menor recaudación fiscal. </li>
                    </ul>
                    <p>
                        <strong>Las recesiones pueden ser causadas por múltiples factores:</strong> crisis financieras, pandemias, conflictos geopolíticos, inflación elevada, restricciones en el crédito, entre otros. Un ejemplo <br />
                        reciente es la crisis provocada por la pandemia del COVID-19 en 2020, que llevó a una recesión global abrupta y profunda. <br />
                        Durante las recesiones, los gobiernos suelen aplicar políticas fiscales y monetarias expansivas, como el aumento del gasto público, la reducción de tasas de interés y la inyección de liquidez, <br />
                        con el fin de estimular la economía y recuperar la confianza de los agentes económicos.
                    </p>
                    <br />

                    <h2>¿Qué es el crecimiento económico?</h2>
                    <p>
                        En contraste, el crecimiento económico se refiere al aumento sostenido del PIB real de un país. Es un indicador de que la economía está produciendo más bienes y servicios, lo que puede generar: <br />
                    </p>
                    <ul>
                        <li>Mejores niveles de empleo. </li>
                        <li>Aumento del ingreso per cápita. </li>
                        <li>Mayor recaudación de impuestos. </li>
                        <li>Estabilidad y mejora del bienestar social. </li>
                    </ul>
                    <p>
                        El crecimiento no solo depende de factores internos como la productividad, la inversión en infraestructura, la educación y la innovación tecnológica, sino también de factores externos, como las <br />
                        condiciones del comercio internacional y los flujos de inversión extranjera. <br />
                        No obstante, no todo crecimiento es automáticamente beneficioso. Un crecimiento acelerado y mal distribuido puede provocar desigualdad social, deterioro ambiental o sobrecalentamiento de la <br />
                        economía, lo que eventualmente podría llevar a una nueva recesión si no se maneja adecuadamente.
                    </p>
                    <br />

                    <h3>La relación entre recesión y crecimiento</h3>
                    <p>
                        Estos dos fenómenos no deben entenderse como eventos aislados, sino como fases complementarias del ciclo económico. Toda economía, tarde o temprano, atraviesa momentos de auge y momentos de contracción. <br />
                        Lo importante es que las políticas públicas estén orientadas a:
                    </p>
                    <ul>
                        <li>Amortiguar los efectos de las recesiones.</li>
                        <li>Aprovechar los periodos de crecimiento para invertir en desarrollo sostenible.</li>
                        <li>Garantizar una distribución más equitativa de los beneficios económicos.</li>
                    </ul>
                    <br />
                    <p><strong>La recesión y el crecimiento económico son dos caras de una misma moneda: representan las fluctuaciones naturales de la economía y su adaptación constante a las condiciones locales e internacionales. <br />
                    Mientras la recesión plantea retos que requieren respuestas rápidas y efectivas, el crecimiento ofrece oportunidades que deben aprovecharse con responsabilidad y visión a largo plazo. Comprender ambos procesos <br />
                    no solo es tarea de economistas y gobiernos, sino también de los ciudadanos, pues todos somos parte del sistema económico y nuestras decisiones, por pequeñas que sean, contribuyen a su dinámica.</strong></p>
                </div>
            </div>



            <div id='container_Globalización_Comercio_Internacional'>
                <h2 id='TitulosPrincipalesEco'>Globalización y Comercio Internacional</h2>
                <p>La globalización y el comercio internacional son fenómenos interrelacionados que han transformado la economía mundial en las últimas décadas. Gracias a los avances tecnológicos, la reducción de barreras comerciales y la <br />
                integración de mercados, las economías hoy están más conectadas que nunca. Este proceso ha traído consigo múltiples oportunidades, pero también desafíos sociales, políticos y ambientales. Comprender su impacto es esencial <br />
                para analizar el rumbo de las sociedades contemporáneas.</p>
                <div id='cont_seg_Globalización_Comercio_Internacional'>
                    <h2>¿Qué es la globalización?</h2>
                    <p>
                        La globalización es un proceso dinámico de interconexión creciente entre países, culturas y economías. Implica la libre circulación de bienes, servicios, información, capitales y personas a nivel mundial. Este <br />
                        fenómeno ha sido impulsado por factores como:
                    </p>
                    <ul>
                        <li>El desarrollo de las tecnologías de la información y la comunicación.</li>
                        <li>La apertura comercial promovida por organismos como la OMC</li>
                        <li>La expansión de las empresas multinacionales.</li>
                    </ul>
                    <p>
                        En lo económico, la globalización ha generado una interdependencia entre las naciones: lo que ocurre en una parte del mundo puede afectar directamente a otras economías, como ocurrió con la crisis financiera del <br />
                        2008 o la interrupción de cadenas de suministro durante la pandemia del COVID-19.
                    </p>
                    <br />
                    <h3>¿Qué es el comercio internacional?</h3>
                    <p>
                        El comercio internacional es el intercambio de bienes y servicios entre países. Es una de las principales expresiones económicas de la globalización. A través del comercio, los países pueden:
                    </p>
                    <ul>
                        <li>Acceder a productos que no producen localmente.</li>
                        <li>Aumentar la variedad de bienes disponibles para los consumidores.</li>
                        <li>Especializarse en lo que hacen mejor (ventaja comparativa).</li>
                        <li>Generar empleo e ingresos por exportaciones.</li>
                    </ul>
                    <p>
                        Por ejemplo, Costa Rica exporta productos agrícolas, dispositivos médicos y servicios, mientras importa combustibles, maquinaria o automóviles. Este intercambio ha sido clave para su <br />
                        crecimiento económico en las últimas décadas.
                    </p>
                    <p><strong>La globalización y el comercio internacional han sido motores clave del crecimiento económico mundial. Han permitido una mayor integración de los países, el acceso a productos <br />
                    diversos y el desarrollo de nuevas tecnologías. Sin embargo, también han profundizado desigualdades y generado desafíos estructurales que no pueden ignorarse. Por eso, el reto actual consiste <br />
                    en aprovechar sus beneficios sin perder de vista la equidad, la justicia social y la sostenibilidad ambiental. En un mundo cada vez más interconectado, el comercio debe ser una herramienta <br />
                    para el desarrollo inclusivo, no solo para el enriquecimiento de unos pocos.</strong></p>
                </div>
            </div>



            <div id='container_Transformación_Digital_Finanzas_Tecnológicas'>
                <h2 id='TitulosPrincipalesEco'>Transformación Digital y Finanzas Tecnológicas (Fintech)</h2>
                <p>
                    La transformación digital está cambiando todos los aspectos de la vida moderna, y el sector financiero no es la excepción. En este contexto surgen las Fintech, empresas que combinan tecnología <br />
                    y servicios financieros para ofrecer soluciones más accesibles, rápidas y personalizadas. Este fenómeno está redefiniendo la forma en que las personas manejan su dinero, acceden a préstamos, <br />
                    invierten y se relacionan con instituciones financieras. Analizar esta transformación permite comprender cómo la innovación está remodelando el sistema económico global.
                </p>
                <button id='Btn_Mostrar_Mas_Transformación_Digital_Finanzas_Tecnológicas'>Mostrar mas</button>
                <div id='cont_seg_Transformación_Digital_Finanzas_Tecnológicas'>
                    <h2>¿Qué es la transformación digital?</h2>
                    <p>
                        La transformación digital es el proceso mediante el cual las organizaciones integran tecnologías digitales en todas sus áreas, modificando su funcionamiento, cultura y oferta de valor. En el <br />
                        sector financiero, esto significa dejar atrás procesos tradicionales y lentos para dar paso a plataformas digitales, automatización de servicios y atención al cliente por medio de inteligencia <br />
                        artificial, chatbots o aplicaciones móviles. <br />
                        La pandemia del COVID-19 aceleró este proceso, obligando a muchas personas a usar servicios digitales como banca en línea, pagos móviles y billeteras electrónicas. Esta digitalización masiva marcó <br />
                        un antes y un después en la relación entre los usuarios y las entidades financieras.
                    </p>
                    <br />

                    <h3>Qué son las Fintech?</h3>
                    <p>
                        El término Fintech proviene de la unión de “financial” y “technology”. Se refiere a un conjunto de empresas que utilizan herramientas tecnológicas para ofrecer servicios financieros innovadores, <br />
                        eficientes y accesibles. Algunas áreas donde operan incluyen:
                    </p>
                    <ul>
                        <li>Pagos digitales: plataformas como PayPal, Apple Pay o Sinpe Móvil. </li>
                        <li>Créditos rápidos y peer-to-peer lending: donde los usuarios pueden solicitar préstamos sin intermediación bancaria. </li>
                        <li>Inversiones automatizadas (robo-advisors): que asesoran o gestionan portafolios de inversión con algoritmos. </li>
                        <li>Criptomonedas y blockchain: tecnologías que buscan descentralizar y agilizar las transacciones financieras. </li>
                        <li>Insurtech: uso de tecnología para ofrecer seguros personalizados, más económicos y con mejor experiencia de usuario.</li>
                    </ul>
                    <p>Gracias a estas innovaciones, las Fintech están haciendo más inclusivo el acceso a servicios financieros, especialmente para personas sin historial crediticio o que viven en zonas alejadas.</p>
                    <br />

                    <p>
                        <strong>
                            La transformación digital y el auge de las Fintech están redefiniendo el panorama financiero mundial. Lo que antes requería trámites largos y presenciales, ahora puede hacerse en segundos desde un <br />
                            teléfono móvil. Sin embargo, este avance tecnológico conlleva responsabilidades tanto para las empresas como para los gobiernos y los usuarios. La clave está en aprovechar las ventajas de la digitalización <br />
                            manteniendo altos estándares de seguridad, inclusión y transparencia. Las Fintech no solo representan una evolución tecnológica, sino también una oportunidad para construir un sistema financiero <br />
                            más justo, accesible e innovador.
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EconomiaHome
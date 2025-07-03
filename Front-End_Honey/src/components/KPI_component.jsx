import React, { useState } from 'react';  // 👈 importa useState
import '../style/KPIstyle.css';

function KPI_component() {

  // 👇 MISMO ESTADO Y FUNCIONES
  const [seccionesVisibles, setSeccionesVisibles] = useState({});

  const toggleSeccion = (id) => {
    setSeccionesVisibles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderBoton = (id, texto) => (
    <button
      id={`Btn_Mostrar_Mas_${id}`}
      onClick={(e) => {
        if (e.detail === 2) {
          toggleSeccion(id); // doble click
        } else if (e.detail === 1 && !seccionesVisibles[id]) {
          toggleSeccion(id); // click simple solo si está oculto
        }
      }}
    >
      {seccionesVisibles[id] ? 'Ocultar' : texto}
    </button>
  );

  return (
    <div className='Cont_Padre'>
        <br />
        <br />
        <br />
        <br />

        <div id="kpi-wrapper">
            <div className="kpi-section" >
                <div className='HeaderKPI'>
                    <div className="kpi-header">
                        <h1>Qué es un KPI, para qué sirve y cómo utilizarlo en tu proyecto</h1>
                    </div>
                    <div>
                        <p>
                            Un KPI, sigla que proviene de la frase en inglés key performance indicator (indicador clave de rendimiento), es una métrica cuantitativa <br />
                            que muestra cómo tu equipo o empresa progresa <br />
                            hacia tus objetivos empresariales más importantes.
                        </p>
                    </div>
                    <p>
                        Las empresas usan KPI en varios niveles. Puedes establecer KPI para toda la empresa, específicos del equipo o individuales <br />
                        dependiendo de las métricas a las que quieres dar seguimiento. <br />
                        Un buen KPI puede darte una idea de si vas por el camino correcto para alcanzar tus objetivos estratégicos.
                    </p>
                </div>
                
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="Cont_Izquierdos_KPI" >
                <div>
                    <h2>¿Qué son los buenos KPI en una empresa?</h2>
                </div>
                <div id="intro">
                    <p>
                        Como la mayoría de los buenos objetivos, un KPI efectivo debe ser específico y medible. El propósito de definir los <br />
                        KPI es brindar una imagen clara de lo que los equipos de trabajo quieren <br />
                        lograr, para cuándo y cómo medirás ese logro.
                    </p>
                    <br />
                    <p>Un buen KPI:</p>
                    <ul>
                        <li>Te ayuda a lograr tus objetivos estratégicos</li>
                        <li>Informa sobre la planificación de los recursos</li>
                        <li>Puede medirse</li>
                        <li>Hace un seguimiento de lo que puedes controlar e influir</li>
                        <li>Conecta métricas con objetivos estratégicos </li>
                        <li>Brinda a los miembros del equipo una idea clara de cómo sus proyectos contribuyen a los objetivos de la empresa</li>
                    </ul>
                </div>
                
            </div>

            <div className="Cont_derecho_KPI" id="kpi-vs-metricas">
                <div className='TitulosSeccion'>
                    <p>KPI vs. métricas de negocio</p>
                </div>
                <div id='kpi'>
                    <p>
                        Las métricas de negocio son formas cuantificables de medir tu progreso hacia objetivos comerciales específicos. <br />
                        Luego de establecer un KPI, usa métricas de negocio para dar seguimiento y medir si estás progresando o no hacia tu objetivo final. <br />
                        Ejemplo de KPI: Aumentar el tráfico del sitio web a 25 000 en el segundo trimestre. <br />
                        Ejemplo de métricas de negocio: Páginas vistas únicas del sitio web (número de visitas)
                    </p>
                </div>
                
            </div>

            <br />
            <br />

            <div className="Cont_Izquierdos_KPI">
                <div className='TitulosSeccion'>
                    <h2>Cómo definir un KPI excelente</h2>
                </div>
                
                <div id="intro">
                    <p>
                        Los objetivos KPI te ayudan a establecer y lograr objetivos cuantificables en una empresa. Antes de empezar, asegúrate de tener un objetivo claro <br />
                        o un plan estratégico que quieras lograr con este KPI o con el conjunto de KPI que definas. Una vez que hayas definido tu KPI, compártelo con las partes <br />
                        interesadas clave del proyecto. También comparte actualizaciones en tiempo real para que todos puedan estar informados sobre el progreso.
                    </p>
                    <h3>1. Define tu objetivo empresarial antes del KPI</h3>
                    <p>
                        Antes de poder crear un KPI, debes definir qué es exactamente lo que quieres lograr. Establecer objetivos de manera efectiva es fundamental para <br />
                        lograr tu plan estratégico (por ejemplo, en una campaña de marketing). Según una investigación reciente, solo el 16 % de los trabajadores del conocimiento <br />
                        afirman que su empresa establece y comunica los objetivos de manera efectiva.
                        <br />
                        Si aún no lo has hecho, crea un plan estratégico para definir los objetivos de tu empresa para los próximos tres a cinco años. Una vez hecho esto, divide ese plan <br />
                        en objetivos anuales. Tipos de KPI: dependiendo de la velocidad con la que avanza tu equipo, puedes establecer KPI anuales o puedes dividirlos en KPI semestrales o trimestrales.
                    </p>
                </div>
                
            </div>

            <br />
            <br />

            <div className="Cont_derecho_KPI" id="tipos-kpi">
                <div className='TitulosSeccion'>
                    <h2>2. Identifica métricas comerciales importantes y los tipos de KPI</h2>
                    {renderBoton('tipos-kpi', 'Mostrar más')}
                </div>
                {seccionesVisibles['tipos-kpi'] && (
                <div id='kpi'>
                    <p>
                    Una vez que hayas definido tus objetivos comerciales, deberás realizar una toma de decisiones con respecto a qué métricas comerciales son relevantes para cada objetivo. <br />
                    Las métricas comerciales son indicadores que impactan directamente si logras o no tus objetivos.
                    Recuerda que KPI es la sigla en inglés que significa indicadores clave de rendimiento. Pueden existir varias métricas o indicadores que tengan un impacto en tu objetivo final. <br />
                    Crear el KPI correcto significa capturar los detalles más importantes y asegurarse de dar seguimiento a esas métricas. No todas las tareas o proyectos deben tener un KPI asociado. <br />
                    Si no estás seguro de por dónde empezar, revisa algunas métricas relevantes y los principales KPI para cada departamento o tipo de negocio.
                    </p>
                    <ul>
                    <li>Ejemplo de métricas financieras</li>
                    <li>Ingresos recurrentes anuales (ARR)</li>
                    <li>Retención de ingresos netos (NRR)</li>
                    <li>Margen de beneficio neto (NPM)</li>
                    <li>Ganancias antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)</li>
                    <li>Capital operativo</li>
                    <li>Flujo de caja</li>
                    <li>Retorno sobre la inversión (ROI) </li>
                    <li>Ejemplo de métricas de clientes</li>
                    <li>Puntaje de lealtad de los clientes (NPS)</li>
                    <li>Costo de adquisición de clientes (CAC)</li>
                    <li>Satisfacción del cliente (CSAT)</li>
                    <li>Retención de clientes</li>
                    <li>Fuga de clientes</li>
                    <li>Número total de clientes pagos</li>
                    <li>Número de clientes nuevos</li>
                    <li>Fidelización de clientes</li>
                    <li>Ejemplo de métricas de procesos y operaciones</li>
                    <li>Tiempo de rendimiento o tiempo de entrega total</li>
                    <li>Número de quejas o tickets de errores recibidos</li>
                    <li>Métricas de la cadena de suministro, como días de ventas pendientes (DSO)</li>
                    <li>Métricas de personal o recursos humanos</li>
                    <li>Tasa de retención de empleados</li>
                    <li>Satisfacción de los empleados</li>
                    <li>Índice de competitividad salarial (SCR)</li>
                    <li>Métricas de ventas</li>
                    <li>Tasa de ganancias</li>
                    <li>Número de transacciones perdidas ante la competencia</li>
                    <li>Penetración de mercado</li>
                    <li>Métricas de marketing (en una estrategia de marketing)</li>
                    <li>Clientes potenciales calificados</li>
                    <li>Tasa de conversión de clientes potenciales</li>
                    <li>Seguidores en redes sociales </li>
                    <li>Descargas de contenido</li>
                    <li>Tasa de clics de emails (CTR)</li>
                    <li>Participación de voz</li>
                    </ul>
                </div>
                )}
            </div>

            <div  className="Cont_Izquierdos_KPI" id='redactar-kpi' >
                <div className='SeccionVisible'>
                    <div className='TitulosSeccion'>
                        <h2>3. Redacta tu KPI + ejemplo de un KPI</h2>
                    </div>
                    <p>
                        Una vez que sepas qué objetivo quieres alcanzar e identifiques las métricas (o unidades de medida) que usarás para asegurarte de alcanzarlo, podrás definir tu KPI. Te recomendamos <br />
                        que uses el acrónimo SMART para asegurarte de que tu KPI sea cuantificable, específico y procesable. <br />
                        <strong>SMART es un acrónimo en inglés que significa:</strong>
                    </p>
                    {renderBoton('redactar-kpi', 'Mostrar más')}
                </div>
                {seccionesVisibles['redactar-kpi'] && (
                    <div id='intro'>
                        
                            <ul>
                                <li>Específico</li>
                                <li>Medible</li>
                                <li>Alcanzable</li>
                                <li>Realista</li>
                                <li>De duración limitada</li>
                            </ul>
                            <br />
                            <br />
                            <h1>Ejemplo de KPI</h1>
                            <p>
                                Imagina que formas parte del equipo de Éxito del Cliente de tu empresa. Tu objetivo general es mejorar la atención para reducir la fuga de clientes. Una métrica importante para <br />
                                tu equipo es el tiempo medio de resolución de un ticket, ya que quieres asegurarte de que tu equipo responda a los tickets en un plazo de 10 horas. En este momento, tu equipo tiene <br />
                                un promedio de 14 horas. Un buen KPI SMART para dar seguimiento a tu progreso hacia este objetivo es: Alcanzar el tiempo promedio de resolución de tickets de 10 horas o menos al final del primer trimestre. <br />
                                Este KPI es específico y medible (10 horas o menos), alcanzable y realista (tu objetivo es reducir cuatro horas el tiempo promedio de resolución de tickets en tres meses), y con una duración limitada (este KPI debería lograrse al final del primer trimestre).
                            </p>
                        
                    </div>
                )}
            </div>
        </div>
        <br />
        <br />
    </div>
  );
}

export default KPI_component;

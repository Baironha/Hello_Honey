import React, { useState } from 'react';
import '../style/AdministracionProyectos.css';

function Administracion_Proyectos() {
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
      {seccionesVisibles[id] ? 'Ocultar' : texto}
    </button>
  );

    return (
        <div className="Cont_Padre_Proyectos">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="proyectos-wrapper">
                
                <div className="Cont_Derecho_Proyectos" id="objetivos-proyectos">
                    <div>
                        
                    </div>
                    <div className="HeaderProyectos">
                        <h1 className="TitulosSeccionProyectos">Qué es la administración de proyectos</h1>
                    </div>
                    <div className="Cont_Principal_Proyectos">
                        <p>
                            Es un método para determinar una serie de tareas necesarias para alcanzar un objetivo específico. <br />
                            Estas tareas incluyen la planificación, la asignación de recursos, los preparativos para la ejecución <br />
                            del proyecto, el seguimiento y la evaluación. <br />
                            La administración de proyectos, a menudo también aparece como PM que es la versión abreviada de como se <br />
                            conoce en inglés: Project Management. <br />
                            En el mundo del marketing digital, los conceptos generales de la administración de proyectos se utilizan para <br />
                            coordinar y ejecutar campañas publicitarias, lanzamientos de productos, desarrollo de sitios web y una amplia variedad de iniciativas estratégicas. <br />
                        </p>
                        {renderBoton('Intro_Proyectos', 'Mostrar más')}
                        {seccionesVisibles['Intro_Proyectos'] && (
                            <div id="Cont_desple_Intro_Proyectos">
                                <p>
                                Sin embargo, la administración de proyectos va más allá de simplemente llevar un registro de tareas. <br />
                                Es una disciplina que implica la alineación de los recursos disponibles con los objetivos del proyecto y la gestión de plazos, costes y riesgos de manera eficiente. <br />
                                Cuando se realiza de manera adecuada, permite a las empresas mantenerse ágiles, cumplir con los plazos y superar la competencia en un entorno digital en constante cambio.
                                </p>
                            </div>
                        )}
                        
                    </div>
                </div>

                <div className="Cont_Izquierdos_Proyectos" id="intro-proyectos">
                    <h1 className="TitulosSeccionProyectos">Objetivos de la administración de proyectos</h1>
                    <p>
                        Como decía, los conceptos básicos de la administración de proyectos van más allá del hecho de cumplir tareas y fechas límite. <br />
                        En el ámbito del marketing digital, esta disciplina sirve como una brújula que guía a las empresas hacia la consecución de objetivos generales y específicos, en un <br />
                        mundo en constante evolución.
                    </p>
                    {renderBoton('Objetivos_Proyectos', 'Mostrar más')}
                    {seccionesVisibles['Objetivos_Proyectos'] && (
                        <div id="Cont_desple_Objetivos_Proyectos">
                            <p>
                                Los objetivos de la administración de proyectos son variados, pero todos tienen un denominador común: lograr que los proyectos se ejecuten de manera eficiente y efectiva. <br />
                                <strong>Aquí te presentamos cuáles son los objetivos principales de la administración de proyectos:</strong>
                            </p>
                            <h2>Cumplir plazos y presupuestos</h2>
                            <p>Uno de los objetivos principales de la administración de proyectos es asegurarse de que los proyectos se completen en el tiempo previsto y dentro del presupuesto asignado.</p>

                            <h2>Maximizar la calidad</h2>
                            <p>La calidad siempre es un factor fundamental. La administración de proyectos se enfoca en garantizar estándares altos y resultados satisfactorios.</p>

                            <h2>Optimizar los recursos</h2>
                            <p>Asignar recursos como tiempo, talento y presupuesto de forma eficiente.</p>

                            <h2>Minimizar riesgos</h2>
                            <p>Identificar y mitigar riesgos potenciales para evitar desviaciones.</p>

                            <h2>Alcanzar objetivos estratégicos</h2>
                            <p>Garantizar que cada proyecto aporte a la visión y metas de la organización.</p>

                            <h2>Aprender y mejorar</h2>
                            <p>Revisar lo aprendido, optimizar procesos y adaptarse a nuevos retos.</p>
                        </div>
                    )}
                </div>

                <div className="Cont_Derecho_Proyectos" id="objetivos-proyectos">
                <h1>Las 6 fases de la administración de proyectos</h1>
                <p>
                    La administración de proyectos se rige por un conjunto de fases bien definidas, cada una con su importancia y tareas específicas. <br />
                    Estas etapas proporcionan una estructura sólida que garantiza que un proyecto se desarrolle con eficiencia y se logren los objetivos deseados.
                </p>
                {renderBoton('Fases_Proyectos', 'Mostrar más')}
                {seccionesVisibles['Fases_Proyectos'] && (
                    <div id="Cont_desple_Fases_Proyectos">
                    <h3>1. Inicio del proyecto</h3>
                    <p>Definir el alcance, establecer equipos, roles y plan inicial.</p>

                    <h3>2. Planificación</h3>
                    <p>Plan detallado con cronograma, presupuesto, recursos y KPIs.</p>

                    <h3>3. Ejecución</h3>
                    <p>Trabajo de equipos, tareas asignadas y comunicación efectiva.</p>

                    <h3>4. Seguimiento y control</h3>
                    <p>Monitoreo constante, comparación con el plan y medidas correctivas.</p>

                    <h3>5. Cierre del proyecto</h3>
                    <p>Evaluación del desempeño, documentación de aprendizajes y entrega de resultados.</p>

                    <h3>6. Evaluación</h3>
                    <p>Análisis del impacto y lecciones para proyectos futuros.</p>
                    </div>
                )}
                </div>

            </div>
        </div>
    );
}

export default Administracion_Proyectos;

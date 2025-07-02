import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import '../style/TreasAdminStyle.css';

const initialData = {
  "todo": {
    title: "Por hacer",
    tasks: []
  },
  "inProgress": {
    title: "En proceso",
    tasks: []
  },
  "done": {
    title: "Finalizado",
    tasks: []
  }
};

function TareasAdmin() {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("tasks-columns");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [formData, setFormData] = useState({
    asignado: '',
    tema: '',
    descripcion: '',
    prioridad: 'REGULAR',
  });

  useEffect(() => {
    localStorage.setItem("tasks-columns", JSON.stringify(columns));
  }, [columns]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTask = () => {
    const { asignado, tema, descripcion, prioridad } = formData;

    if (!asignado.trim() || !tema.trim() || !descripcion.trim()) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    const newTask = {
      id: `task-${Date.now()}`,
      asignado,
      tema,
      descripcion,
      prioridad
    };

    setColumns(prev => ({
      ...prev,
      todo: {
        ...prev.todo,
        tasks: [...prev.todo.tasks, newTask]
      }
    }));

    setFormData({
      asignado: '',
      tema: '',
      descripcion: '',
      prioridad: 'REGULAR'
    });
  };

  const handleUpdateTask = (columnId, taskId) => {
    const newTema = prompt("Nuevo tema:");
    if (!newTema) return;

    setColumns(prev => {
      const updatedTasks = prev[columnId].tasks.map(task =>
        task.id === taskId ? { ...task, tema: newTema } : task
      );
      return {
        ...prev,
        [columnId]: {
          ...prev[columnId],
          tasks: updatedTasks
        }
      };
    });
  };

  const handleDeleteTask = (columnId, taskId) => {
    setColumns(prev => {
      const filtered = prev[columnId].tasks.filter(task => task.id !== taskId);
      return {
        ...prev,
        [columnId]: {
          ...prev[columnId],
          tasks: filtered
        }
      };
    });
  };

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const draggedTask = sourceCol.tasks[source.index];

    if (source.droppableId === destination.droppableId) {
      const updated = [...sourceCol.tasks];
      updated.splice(source.index, 1);
      updated.splice(destination.index, 0, draggedTask);
      setColumns(prev => ({
        ...prev,
        [source.droppableId]: {
          ...sourceCol,
          tasks: updated
        }
      }));
    } else {
      const srcTasks = [...sourceCol.tasks];
      const dstTasks = [...destCol.tasks];
      srcTasks.splice(source.index, 1);
      dstTasks.splice(destination.index, 0, draggedTask);
      setColumns(prev => ({
        ...prev,
        [source.droppableId]: {
          ...sourceCol,
          tasks: srcTasks
        },
        [destination.droppableId]: {
          ...destCol,
          tasks: dstTasks
        }
      }));
    }
  };

  return (
    <div className="task-board">
      <div className="task-input">
        <input
          type="text"
          name="asignado"
          placeholder="Nombre del asignado"
          value={formData.asignado}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="tema"
          placeholder="Tema de la tarea"
          value={formData.tema}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Breve descripción"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
        <select
          name="prioridad"
          value={formData.prioridad}
          onChange={handleInputChange}
        >
          <option value="URGENTE">URGENTE</option>
          <option value="IMPORTANTE">IMPORTANTE</option>
          <option value="REGULAR">REGULAR</option>
        </select>
        <button onClick={handleAddTask}>Agregar</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  className="column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3>{column.title}</h3>
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p><strong>Asignado:</strong> {task.asignado}</p>
                          <p><strong>Tema:</strong> {task.tema}</p>
                          <p><strong>Descripción:</strong> {task.descripcion}</p>
                          <p><strong>Prioridad:</strong> <span className={`badge ${task.prioridad.toLowerCase()}`}>{task.prioridad}</span></p>
                          <div className="task-actions">
                            <button onClick={() => handleUpdateTask(columnId, task.id)}>✏️</button>
                            <button onClick={() => handleDeleteTask(columnId, task.id)}>🗑️</button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default TareasAdmin;

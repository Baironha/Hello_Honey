


import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/adminDashboard.css";


export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("usuarios");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "Juan Pérez", role: "Empleado", checked: false },
    { id: 2, name: "Ana Gómez", role: "Admin", checked: true },
  ]);

  const toggleUserCheck = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, checked: !user.checked } : user));
  };

  const selectedUser = users.find(user => user.checked);

  const renderSection = () => {
    switch (activeSection) {
      case "usuarios":
        return (
          <section className="tabla-usuarios">
            <h2>Usuarios</h2>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <button onClick={() => setShowAddUserForm(!showAddUserForm)}>Agregar Usuario</button>
              <button>Eliminar</button>
              <button onClick={() => selectedUser && setShowEditUserForm(true)} disabled={!selectedUser}>Editar Seleccionado</button>
            </div>

            {showAddUserForm && (
              <motion.form
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="add-user-form"
              >
                <input placeholder="Nombre" />
                <select>
                  <option>Empleado</option>
                  <option>Admin</option>
                </select>
                <button type="submit">Guardar</button>
              </motion.form>
            )}

            {showEditUserForm && selectedUser && (
              <motion.form
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="add-user-form"
              >
                <input defaultValue={selectedUser.name} />
                <select defaultValue={selectedUser.role}>
                  <option>Empleado</option>
                  <option>Admin</option>
                </select>
                <button type="submit">Actualizar</button>
              </motion.form>
            )}

            <table>
              <thead>
                <tr>
                  <th>Seleccionar</th>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={user.checked}
                        onChange={() => toggleUserCheck(user.id)}
                      />
                    </td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      case "admins":
        return <div className="section-content"><h2>Gestión de Administradores</h2></div>;
      case "empleados":
        return <div className="section-content"><h2>Gestión de Empleados</h2></div>;
      case "ventas":
        return (
          <section className="ventas-dashboard">
            <h2>Dashboard de Ventas</h2>
            <div className="grafico-placeholder">[Gráfico aquí]</div>
          </section>
        );
      case "tareas":
        return (
          <section className="scrum-tareas">
            <h2>Gestión de Tickets</h2>
            <div className="scrum-columns">
              <div className="scrum-col">Por Hacer</div>
              <div className="scrum-col">En Espera</div>
              <div className="scrum-col">Haciendo</div>
              <div className="scrum-col">Finalizado</div>
            </div>
          </section>
        );
      case "ia":
        return (
          <section className="ia-control">
            <h2>IA Control</h2>
            <div className="ia-status">IA Activa - 99% Eficiencia</div>
          </section>
        );
      case "notificaciones":
        return (
          <section className="notificaciones">
            <h2>Solicitudes de Usuarios</h2>
            <ul>
              <li>Usuario A solicitó acceso</li>
              <li>Usuario B reportó un error</li>
            </ul>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav className="navbar">Panel Administrativo</nav>
      <div className="dashboard-body">
        <aside className="sidebar">
          <ul>
            <li onClick={() => setActiveSection("usuarios")}>Usuarios</li>
            <li onClick={() => setActiveSection("admins")}>Admins</li>
            <li onClick={() => setActiveSection("empleados")}>Empleados</li>
            <li onClick={() => setActiveSection("ventas")}>Ventas</li>
            <li onClick={() => setActiveSection("tareas")}>Tareas</li>
            <li onClick={() => setActiveSection("ia")}>IA Control</li>
            <li onClick={() => setActiveSection("notificaciones")}>Notificaciones</li>
          </ul>
        </aside>
        <main className="main-content">
          <section className="kpi-cards">
            <div className="card">Ventas Hoy: ₡125,000</div>
            <div className="card">Usuarios Activos: 245</div>
            <div className="card">Tickets Abiertos: 8</div>
          </section>
          {renderSection()}
        </main>
      </div>
    </div>
  );
}


/* Como 0 */

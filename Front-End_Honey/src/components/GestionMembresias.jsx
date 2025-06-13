import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiciosUserAdmins from "../services/ServiciosMmebresias";
import "../style/GestUsuariosStyle.css";

function Gestion_Membresias() {
    const [users, setUsers] = useState([]);
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showEditUserForm, setShowEditUserForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [form, setForm] = useState({ nombre: "",monto: ""});

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await ServiciosUserAdmins.getUsers();
            const formatted = data.map(user => ({ ...user, checked: false }));
            setUsers(formatted);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        await ServiciosUserAdmins.postUsers(form.nombre,form.monto);
        setShowAddUserForm(false);
        loadUsers();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (selectedUser) {
            await ServiciosUserAdmins.updateUsers(
                
                form.nombre,
                form.monto || "",
                selectedUser.id
            );
            setShowEditUserForm(false);
            setSelectedUser(null);
            loadUsers();
        }
    };

    const handleDelete = async () => {
        const checkedUser = users.find(u => u.checked);
        if (checkedUser) {
            const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar al usuario "${checkedUser.nombre || checkedUser.monto}"?`);
            if (confirmDelete) {
                try {
                    await ServiciosUserAdmins.deleteUser(checkedUser.id);
                    setSelectedUser(null);
                    loadUsers();
                } catch (error) {
                    console.error("Error al eliminar usuario:", error);
                    alert("Hubo un error al eliminar el usuario.");
                }
            }
        } else {
            alert("Por favor selecciona un usuario para eliminar.");
        }
    };

    const toggleUserCheck = (id) => {
        const updated = users.map(user =>
            user.id === id
                ? { ...user, checked: !user.checked }
                : { ...user, checked: false }
        );
        setUsers(updated);
        const selected = updated.find(u => u.checked);
        setSelectedUser(selected);
        if (selected) {
            setForm({
                nombre: selected.nombre || selected.nombre,
                monto: ""
            });
        }
    };

    return (
        <div className="container-tabla-admin-page">
            <section className="tabla-usuarios">
                <h2>Membresias</h2>
                <div className="tabla-usuarios-botones">
                    <button onClick={() => setShowAddUserForm(!showAddUserForm)}>Agregar Usuario</button>
                    <button onClick={handleDelete}>Eliminar</button>
                    <button onClick={() => selectedUser && setShowEditUserForm(true)} disabled={!selectedUser}>Editar Seleccionado</button>
                </div>

                {showAddUserForm && (
                    <motion.form
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="add-user-form"
                        onSubmit={handleAdd}
                    >
                        <input
                            placeholder="Nombre"
                            value={form.nombre}
                            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            required
                        />
                        <input
                            type="monto"
                            placeholder="Monto"
                            value={form.monto}
                            onChange={(e) => setForm({ ...form, monto: e.target.value })}
                            required
                        />
                        <button type="submit">Guardar</button>
                    </motion.form>
                )}

                {showEditUserForm && selectedUser && (
                    <motion.form
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="add-user-form"
                        onSubmit={handleUpdate}
                    >
                        <input
                            placeholder="Nombre"
                            value={form.nombre}
                            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Monto"
                            value={form.monto}
                            onChange={(e) => setForm({ ...form, monto: e.target.value })}
                        />
                        <button type="submit">Actualizar</button>
                    </motion.form>
                )}

                <table className="tabla-usuarios-tabla">
                    <thead>
                        <tr>
                            <th>Seleccionar</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            
                            .map((user, index) => (
                                <tr key={user.id || `user-${index}`}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={user.checked || false}
                                            onChange={() => toggleUserCheck(user.id)}
                                        />
                                    </td>
                                    <td>{user.id}</td>
                                    <td>{user.nombre || user.nombre}</td>
                                    <td>{user.monto}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Gestion_Membresias;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Excursiones.css';

const FormExcursion = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        destino: "",
        precio: 0,
        duracion: "",
        transporte: "",
        comida: "",
        actividad: ""
    });

    const [excursiones, setExcursiones] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { _id, __v, ...dataToSend } = formData;

        try {
            if (editingId) {
                await axios.put(`http://localhost:7700/api/excursiones/${editingId}`, dataToSend);
            } else {
                await axios.post("http://localhost:7700/api/excursiones", dataToSend, {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            setIsSuccess(true);
            obtenerExcursiones();
            resetForm();
        } catch (error) {
            console.error("Error al guardar la excursión:", error);
            setError(error.response?.data?.message || "Ocurrió un error al guardar la excursión");
        } finally {
            setLoading(false);
        }
    };

    const obtenerExcursiones = async () => {
        try {
            const response = await axios.get("http://localhost:7700/api/excursiones");
            setExcursiones(response.data);
        } catch (error) {
            console.error("Error al obtener las excursiones:", error);
            setError("No se pudieron cargar las excursiones.");
        }
    };

    const editExcursion = (excursion) => {
        setFormData({ ...excursion });
        setEditingId(excursion._id);
    };

    const deleteExcursion = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta excursión?")) {
            try {
                await axios.delete(`http://localhost:7700/api/excursiones/${id}`);
                obtenerExcursiones();
            } catch (error) {
                console.error("Error al eliminar la excursión:", error);
                setError("No se pudo eliminar la excursión.");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            descripcion: "",
            destino: "",
            precio: 0,
            duracion: "",
            transporte: "",
            comida: "",
            actividad: ""
        });
        setEditingId(null);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        obtenerExcursiones();
    }, []);

    return (
        <div className="container3">
            <div className="formulario-hotel-container">
                <h1>{editingId ? "Editar Excursión" : "Crear Excursión"}</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </label>
                    <label>
                        Descripción:
                        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />
                    </label>
                    <label>
                        Destino:
                        <input type="text" name="destino" value={formData.destino} onChange={handleChange} required />
                    </label>
                    <label>
                        Precio:
                        <div className="precio-container">
                            <span className="precio-signo">$</span>
                            <input
                                type="number"
                                name="precio"
                                value={formData.precio}
                                onChange={handleChange}
                                required
                                min="0"
                                className="precio-input"
                            />
                        </div>
                    </label>
                    <label>
                        Duración:
                        <input type="text" name="duracion" value={formData.duracion} onChange={handleChange} required />
                    </label>
                    <label>
                        Transporte:
                        <input type="text" name="transporte" value={formData.transporte} onChange={handleChange} required />
                    </label>
                    <label>
                        Comida:
                        <input type="text" name="comida" value={formData.comida} onChange={handleChange} required />
                    </label>
                    <label>
                        Actividades:
                        <input type="text" name="actividad" value={formData.actividad} onChange={handleChange} required />
                    </label>
                    <button className="agregar-button" type="submit" disabled={loading}>
                        {loading ? "Cargando..." : editingId ? "Actualizar Excursión" : "Agregar Excursión"}
                    </button>
                </form>
            </div>

            <div className="excursiones-container">
                <h2>Excursiones Creadas</h2>
                {excursiones.length > 0 ? (
                    <ul>
                        {excursiones.map((excursion) => (
                            <li key={excursion._id}>
                                <h3>{excursion.nombre}</h3>
                                <p>{excursion.descripcion}</p>
                                <p><strong>Destino:</strong> {excursion.destino}</p>
                                <p><strong>Precio:</strong> ${formatPrice(excursion.precio)}</p>
                                <p><strong>Duración:</strong> {excursion.duracion}</p>
                                <p><strong>Transporte:</strong> {excursion.transporte}</p>
                                <p><strong>Comida:</strong> {excursion.comida}</p>
                                <p><strong>Actividades:</strong> {excursion.actividad}</p>
                                <button className="edit-button" onClick={() => editExcursion(excursion)}>Editar</button>
                                <button className="delete-button" onClick={() => deleteExcursion(excursion._id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay excursiones creadas aún.</p>
                )}
            </div>
        </div>
    );
};

export default FormExcursion;

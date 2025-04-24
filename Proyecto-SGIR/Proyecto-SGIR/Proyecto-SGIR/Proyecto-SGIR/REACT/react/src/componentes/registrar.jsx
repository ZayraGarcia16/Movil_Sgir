import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../paginas/css/registro.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numeroDocumento: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validación local
    const { numeroDocumento, nombre, apellido, correo, contrasena } = formData;
    if (!numeroDocumento || !nombre || !apellido || !correo || !contrasena) {
      setError('Todos los campos son obligatorios.');
      setLoading(false);
      return;
    }

    // Validación adicional para correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(correo)) {
      setError('El correo electrónico no es válido.');
      setLoading(false);
      return;
    }

    // Validación adicional para contraseña (al menos 6 caracteres, incluye números y letras)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(contrasena)) {
      setError('La contraseña debe tener al menos 6 caracteres, incluir al menos una letra y un número.');
      setLoading(false);
      return;
    }

    try {
      console.log('Datos enviados:', formData);

      const response = await axios.post('http://localhost:7700/api/clientes', formData);
      if (response.status === 201) {
        alert('Registro exitoso');
        setFormData({
          numeroDocumento: '',
          nombre: '',
          apellido: '',
          correo: '',
          contrasena: '',
        });
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setLoading(false);

      if (err.response) {
        if (err.response.status === 400) {
          setError('El número de documento ya está registrado o los datos no son válidos.');
        } else {
          setError(`Error ${err.response.status}: ${err.response.data.message || 'Error al registrarse.'}`);
        }
      } else if (err.request) {
        setError('No se recibió respuesta del servidor.');
      } else {
        setError('Error al registrar. Inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="registro-main">
      <div className="registro-form-container">
        <h1 className="registro-titulo">Registrate</h1>
        <form id="register-form" className="registro-form" onSubmit={handleSubmit}>
          <label htmlFor="numeroDocumento" className="registro-label sr-only">Número de documento</label>
          <input
            type="text"
            name="numeroDocumento"
            id="numeroDocumento"
            className="registro-input"
            placeholder="Número de documento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            required
          />

          <label htmlFor="nombre" className="registro-label sr-only">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="registro-input"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="apellido" className="registro-label sr-only">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            className="registro-input"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <label htmlFor="correo" className="registro-label sr-only">Correo</label>
          <input
            type="email"
            name="correo"
            id="correo"
            className="registro-input"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <label htmlFor="contrasena" className="registro-label sr-only">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            id="contrasena"
            className="registro-input"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />

          <button type="submit" className="registro-button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
          {error && <p className="registro-error">{error}</p>}
        </form>

        <p className="registro-p">
          ¿Ya estás registrado? - <a href="/" className="registro-link">Iniciar sesión</a>
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../paginas/css/sesion.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ 
    correo: '', 
    contrasena: '' 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:7700/api/login', credentials);
      const { token, rol } = response.data; // Asegúrate que el backend devuelve el rol

      localStorage.setItem('token', token);
      localStorage.setItem('userRole', rol); // Guardamos el rol en localStorage

      // Redirección basada en el rol
      if (rol === 'Administrador') {
        navigate('/dashboard-admin');
      } else if (rol === 'Cliente') {
        navigate('/perfil-cliente');
      } else {
        navigate('/acceso-denegado');
      }

    } catch (err) {
      if (err.response?.status === 401) {
        navigate('/acceso-denegado');
      } else {
        setError(err.response?.data?.message || 'Error al iniciar sesión');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="registro-main">
      <div className="registro-form-container">
        <h1 className="registro-titulo">Inicia sesión</h1>
        <form className="registro-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={credentials.correo}
            onChange={handleChange}
            required
            className="registro-input"
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={credentials.contrasena}
            onChange={handleChange}
            required
            className="registro-input"
          />
          <button 
            type="submit" 
            className="registro-button"
            disabled={loading}
          >
            {loading ? 'Verificando...' : 'Iniciar sesión'}
          </button>
        </form>
        
        {error && <p className="registro-error">{error}</p>}
        
        <p className="registro-p">
          ¿No tienes cuenta? - 
          <a href="/registro" className="registro-link">Regístrate aquí</a>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;


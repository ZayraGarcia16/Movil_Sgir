import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  Link,
  Paper,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    correo: '',
    contrasena: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.correo)) {
      setErrorMessage('Por favor ingrese un correo electrónico válido');
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:7700/api/login', {
        correo: formValues.correo,
        contrasena: formValues.contrasena
      });

      const { token, usuario } = response.data;
      
      // Extraer roles del token
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const roles = decodedToken.roles || [];

      // Guardar en contexto y localStorage
      await login(token, roles);
      
      // Redirección basada en roles
      if (roles.includes('admin')) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
      if (roles.includes('clientes')){
        navigate('ReservasGestion')
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      setErrorMessage(error.response?.data?.message || 'Error al iniciar sesión');
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Iniciar Sesión
        </Typography>
        
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            label="Correo Electrónico"
            name="correo"
            type="email"
            value={formValues.correo}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          
          <TextField
            label="Contraseña"
            name="contrasena"
            type={showPassword ? 'text' : 'password'}
            value={formValues.contrasena}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Iniciar Sesión
          </Button>
          
          <Typography align="center">
            ¿No tienes cuenta? <Link href="/registro">Regístrate aquí</Link>
          </Typography>
        </Box>
      </Paper>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginForm;
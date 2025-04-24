import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Admin from '../models/admin.js';
import Cliente from '../models/cliente.js';

// Configuración inicial de variables de entorno
dotenv.config();

// Validación inmediata de la clave JWT
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('❌ Error crítico: JWT_SECRET no está definido en las variables de entorno');
  process.exit(1); // Detiene la aplicación si no hay clave secreta
}

const JWT_CONFIG = {
  expiresIn: '12h' // Tiempo de expiración del token
};

const login = async (req, res) => {
  // Validación de campos requeridos
  if (!req.body.correo || !req.body.contrasena) {
    return res.status(400).json({ 
      success: false,
      message: 'Correo y contraseña son requeridos' 
    });
  }

  const { correo, contrasena } = req.body;

  try {
    // Buscar usuario en ambos modelos
    let usuario = await Admin.findOne({ correo }).select('+contrasena');
    let tipoUsuario = 'admin';

    if (!usuario) {
      usuario = await Cliente.findOne({ correo }).select('+contrasena');
      tipoUsuario = 'cliente';
    }

    // Validar existencia de usuario
    if (!usuario) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas' // Mensaje genérico por seguridad
      });
    }

    // Verificar contraseña
    if (!usuario.contrasena) {
      return res.status(500).json({
        success: false,
        message: 'Error en la configuración del usuario'
      });
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas' // Mismo mensaje que usuario no encontrado
      });
    }

    // Crear token JWT (ahora con la clave validada)
    const token = jwt.sign(
      {
        id: usuario._id,
        correo: usuario.correo,
        rol: usuario.rol || 'usuario', // Valor por defecto
        tipoUsuario
      },
      JWT_SECRET, // Usamos la variable ya validada
      JWT_CONFIG
    );

    // Preparar respuesta sin datos sensibles
    const usuarioResponse = {
      id: usuario._id,
      nombre: usuario.nombreCompleto || 
             `${usuario.nombre || ''} ${usuario.apellido || ''}`.trim(),
      correo: usuario.correo,
      rol: usuario.rol || 'usuario',
      tipoUsuario
    };

    return res.json({
      success: true,
      token,
      usuario: usuarioResponse
    });

  } catch (error) {
    console.error('Error en autenticación:', error);
    return res.status(500).json({
      success: false,
      message: 'Error en el servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export { login };












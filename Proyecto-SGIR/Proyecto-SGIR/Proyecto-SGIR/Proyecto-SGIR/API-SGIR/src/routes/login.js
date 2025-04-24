import express from 'express';
import { login } from '../controllers/autenticacion_controller.js';
import { validatorHandler } from '../middleware/validator.handler.js';
import { loginSchema } from '../validators/loginValidarDTO.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints para iniciar sesión
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags: [Autenticación]
 *     summary: Iniciar sesión
 *     description: Permite a un cliente autenticarse usando email y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "caminantesporcolombia@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve el token y los datos del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token para autenticación
 *                 tipoUsuario:
 *                   type: string
 *                   description: Tipo de usuario (ej. "admin", "usuario")
 *       400:
 *         description: Contraseña incorrecta o datos inválidos
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/login', validatorHandler(loginSchema, 'body'), login);

export default router;

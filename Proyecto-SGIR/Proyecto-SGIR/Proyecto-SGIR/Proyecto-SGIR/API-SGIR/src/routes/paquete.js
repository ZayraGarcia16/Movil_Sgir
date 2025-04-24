import express from 'express';
import { createPaquete, getPaquete, updatePaquete, deletePaquete } from '../controllers/paquetecontrolador.js';
import { verifyToken, verifyRole } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Paquetes
 *   description: Gestión de paquetes turísticos
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Paquete:
 *       type: object
 *       properties:
 *         destino:
 *           type: string
 *           example: "Cancún"
 *         actividad: 
 *           type: string
 *           example: "Tour arqueológico"
 *         descripcion:
 *           type: string
 *           example: "Visita a ruinas mayas con guía experto"
 *         numeroPersonas:
 *           type: integer
 *           minimum: 1
 *           example: 4
 *         nombre:                                              
 *           type: string
 *           example: "Paquete Aventura Maya"
 *         precio:
 *           type: number
 *           format: float
 *           minimum: 0
 *           example: 299.99
 *         transporte:
 *           type: string
 *           enum: [avion, bus, tren, barco]
 *           example: "bus"
 *         comida:
 *           type: string
 *           example: "Desayuno y almuerzo incluidos"
 *         duracion:
 *           type: string
 *           example: "3 días 2 noches"
 *         imagen:
 *           type: string
 *           format: uri
 *           example: "https://ejemplo.com/paquete.jpg"
 *         disponible:
 *           type: boolean
 *           example: true
 *       required:
 *         - destino
 *         - actividad
 *         - descripcion
 *         - numeroPersonas
 *         - nombre
 *         - precio
 *         - transporte
 *         - comida
 */

/**
 * @swagger
 * /api/paquete:
 *   post:
 *     summary: Crea un nuevo paquete (Requiere autenticación y rol Administrador)
 *     tags: [Paquetes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paquete'
 *     responses:
 *       201:
 *         description: Paquete creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido (rol no autorizado)
 */
router.post('/paquete', verifyToken, verifyRole(['Administrador']), createPaquete);

/**
 * @swagger
 * /api/paquete:
 *   get:
 *     summary: Obtiene todos los paquetes (Público)
 *     tags: [Paquetes]
 *     responses:
 *       200:
 *         description: Lista de paquetes disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paquete'
 */
router.get('/paquete', getPaquete);

/**
 * @swagger
 * /api/paquete/{id}:
 *   get:
 *     summary: Obtiene un paquete por ID (Público)
 *     tags: [Paquetes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paquete
 *     responses:
 *       200:
 *         description: Información detallada del paquete
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paquete'
 *       404:
 *         description: Paquete no encontrado
 */
router.get('/paquete/:id', );

/**
 * @swagger
 * /api/paquete/{id}:
 *   put:
 *     summary: Actualiza un paquete por ID (Requiere autenticación y rol Administrador)
 *     tags: [Paquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paquete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paquete'
 *     responses:
 *       200:
 *         description: Paquete actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido (rol no autorizado)
 *       404:
 *         description: Paquete no encontrado
 */
router.put('/paquete/:id', verifyToken, verifyRole(['Administrador']), updatePaquete);

/**
 * @swagger
 * /api/paquete/{id}:
 *   delete:
 *     summary: Elimina un paquete por ID (Requiere autenticación y rol Administrador)
 *     tags: [Paquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paquete
 *     responses:
 *       200:
 *         description: Paquete eliminado exitosamente
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido (rol no autorizado)
 *       404:
 *         description: Paquete no encontrado
 */
router.delete('/paquete/:id', verifyToken, verifyRole(['Administrador']), deletePaquete);

export default router;

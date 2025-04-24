import Joi from 'joi';

// Esquema de validación para la creación de una reserva
export const createReservaSchema = Joi.object({
    servicio: Joi.string().valid('hotel', 'excursion', 'paquete').required(),
    destinos: Joi.array().items(Joi.string()).min(1).required(),  // Cambiado aquí
    hotel: Joi.string().optional(),
    comida: Joi.string().optional(),
    numeroPersonas: Joi.number().integer().min(1).required(),
    precioTotal: Joi.number().min(0).required(),
    fechaReserva: Joi.date().optional()
  });
  

// Esquema de validación para la actualización de una reserva
const updateReservaSchema = Joi.object({
    servicio: Joi.string().valid('hotel', 'excursion', 'paquete').optional(),  // El tipo de servicio
    destino: Joi.string().optional(),  // El destino de la reserva
    hotel: Joi.string().optional(),  // El nombre del hotel
    comida: Joi.string().optional(),  // El tipo de comida
    numeroPersonas: Joi.number().integer().min(1).optional(),  // Número de personas
    precioTotal: Joi.number().min(0).optional(),  // El precio total
    fechaReserva: Joi.date().optional()  // La fecha de la reserva (puede ser opcional)
});

// Esquema de validación para la eliminación de una reserva
const deleteReservaSchema = Joi.object({
    id: Joi.string().hex().length(24).required()  // ID debe ser un ObjectId válido de MongoDB
});

// Esquema de validación para obtener una reserva por ID
const getReservaByIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required()  // ID debe ser un ObjectId válido de MongoDB
});

// Exportar todos los esquemas para usarlos en el controlador
export { deleteReservaSchema, getReservaByIdSchema, updateReservaSchema };

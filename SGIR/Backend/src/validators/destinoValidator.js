import Joi from 'joi';

const id = Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
        "string.pattern.base": "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
        "any.required": "El campo ID es requerido.",
    });

const nombre = Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
        "string.base": "El nombre debe ser un texto.",
        "string.empty": "El nombre no puede estar vacío.",
        "string.min": "El nombre debe tener al menos 3 caracteres.",
        "string.max": "El nombre no puede exceder los 100 caracteres.",
        "any.required": "El campo nombre es requerido.",
    });

const descripcion = Joi.string()
    .min(10)
    .required()
    .messages({
        "string.base": "La descripción debe ser un texto.",
        "string.empty": "La descripción no puede estar vacía.",
        "string.min": "La descripción debe tener al menos 10 caracteres.",
        "any.required": "El campo descripción es requerido.",
    });

const precioBase = Joi.number()
    .min(0)
    .required()
    .messages({
        "number.base": "El precio debe ser un número.",
        "number.min": "El precio no puede ser negativo.",
        "any.required": "El campo precio es requerido.",
    });



const createDestinoSchema = Joi.object({
    nombre: nombre.required(),
    descripcion: descripcion.required(),
    precioBase: precioBase.required(),
    
});

const getDestinoSchema = Joi.object({
    id: id.required(),
});

const deleteDestinoSchema = Joi.object({
    id: id.required(),
});

export { createDestinoSchema, getDestinoSchema, deleteDestinoSchema };

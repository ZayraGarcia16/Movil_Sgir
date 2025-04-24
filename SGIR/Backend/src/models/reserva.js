import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario", // Asegúrate de que el nombre del modelo del usuario coincida
    required: true
  },
  servicio: { type: String, required: true }, // hotel, excursión, paquete
  destino: { type: String },
  hotel: { type: String },
  comida: { type: String },
  numeroPersonas: { type: Number, required: true },
  precioTotal: { type: Number, required: true },
  fechaReserva: { type: Date, default: Date.now }
});

export default mongoose.model("Reserva", reservaSchema);

import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import reservaRoutes from "./routes/reservas.js";
import contactosRoutes from "./routes/contactos.js";
import paqueteRoutes from "./routes/paquete.js";
import hotelsRoutes from "./routes/hotels.js";
import destinosRoutes from "./routes/destino.js";
import comentarioRoutes from "./routes/comentarios.js";
import excursionesRoutes from "./routes/excursiones.js";
import comidaRoutes from "./routes/comidas.js";
import clientesRoutes from "./routes/clientes.js";
import transporteRoutes from "./routes/transportes.js";
import authRoutes from "./routes/auth.js"; 
import port from "./config/config.js";
import swaggerJSDOCs from "./swaggerConfig.js";


const app = express();

// Middleware
app.use(cors({ origin: '192.168.0.16:9700' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la API

app.use("/api", hotelsRoutes);
app.use("/api", paqueteRoutes);
app.use("/api", comentarioRoutes);
app.use("/api", excursionesRoutes);
app.use("/api", clientesRoutes);
app.use("/api", contactosRoutes);
app.use("/api", transporteRoutes);
app.use("/api", destinosRoutes);
app.use("/api", comidaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reservas', reservaRoutes);
dotenv.config();
// Ejemplo: subir hotel con imagen



// Ruta de bienvenida
app.get("/api", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar servidor

app.listen(9700, "0.0.0.0", () => {
    console.log("Servidor corriendo en http://192.168.0.16:9700");
    swaggerJSDOCs(app, 9700)
  });

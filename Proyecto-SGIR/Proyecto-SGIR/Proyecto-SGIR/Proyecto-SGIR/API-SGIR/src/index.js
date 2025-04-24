import express from "express";
import contactosRoutes from "./routes/contactos.js"
import reservasRoutes from "./routes/reservas.js";
import paqueteRoutes from "./routes/paquete.js";
import adminRoutes from "./routes/admins.js";
import hotelsRoutes from "./routes/hotels.js";
import comentarioRoutes from "./routes/comentarios.js";
import excursionesRoutes from "./routes/excursiones.js";
import port from "./config/config.js";
import swaggerJSDOCs from "./swaggerConfig.js";
import cors from "cors";
import clientesRoutes from "./routes/clientes.js"
const app = express();
import transporteRoutes from "./routes/transportes.js"
import multer from 'multer';
import path from 'path';
import loginRoutes from './routes/login.js'; // ajusta la ruta si es diferente




app.use(express.urlencoded({ extended: true }));
const upload = multer({ dest: 'uploads/' }); 
// Ahora puedes usar 'app' para los middlewares
app.use(express.json()); // Middleware para manejar JSON (Express ya lo tiene)
app.use(express.urlencoded({ extended: true })); // Si necesitas manejar formularios con URL-encoded
app.use(cors()); // Habilitar CORS

// Rutas para la API
app.use("/api", reservasRoutes);
app.use("/api", hotelsRoutes);
app.use("/api", paqueteRoutes);
app.use("/api", adminRoutes);
app.use("/api", comentarioRoutes);
app.use("/api", excursionesRoutes);
app.use("/api", clientesRoutes);
app.use("/api", contactosRoutes);
app.use("/api", transporteRoutes);
app.use("/api", loginRoutes);



app.post('/hotels', upload.single('image'), (req, res) => {
    const { name, description, price } = req.body;
    const image = req.file;  // El archivo se guarda en 'req.file'
  
    // Aquí puedes hacer lo que necesites con los datos del hotel y la imagen
    // Por ejemplo, guardar en una base de datos y mover la imagen a una carpeta específica
  
    // Responde al cliente
    res.json({
      message: 'Hotel added successfully!',
      hotelData: { name, description, price, image },
    });
  });
// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    swaggerJSDOCs(app, 7700); // Opcional: configurar swagger
});

app.use(cors({
  origin: 'http://localhost:5174'
}));
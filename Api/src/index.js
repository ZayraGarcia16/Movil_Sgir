import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import port from './configuration/conexion.js';
import transporteRoutes from './routes/transportes.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', transporteRoutes);

var corsOptions = {
    origin: '*',
    method: "GET, POST, OPTIONS, PUT, DELETE",
    optionsSuccessStatus: 200,
}

app.get("/", (req, res) => {
    res.send("<h2>Bienvenido a la API</h2>");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
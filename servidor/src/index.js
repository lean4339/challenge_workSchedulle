const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Config env
dotenv.config();

// Create app
const app = express();

// Middlewares
app.use(cors()); // Habilita CORS para que React pueda hacer peticiones
app.use(express.json()); // Parseo de JSON
app.use(express.urlencoded({ extended: true })); // Formularios
app.use(morgan('dev')); // Log de peticiones HTTP

// Test route
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

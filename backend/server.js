const express = require('express');
const cors = require('cors');
const path = require('path'); // Herramienta para leer carpetas
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Magia: Le decimos al backend que muestre tu diseño
app.use(express.static(path.join(__dirname, '../frontend')));

// Tus rutas de los autos
const carRoutes = require('./routes/carRoutes');
app.use('/api/cars', carRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
//Importar variables de entorno
require('dotenv').config();

//Importación de los modelos
require('./models');

//Importar expres, mongoose y router
const express = require('express');
const mongoose= require('mongoose');
const routes = requiere('./routes');
const cors = require('cors');

//instanciar la app
const app = express();

//configuración de middlewares
app.use(cors());
app.use(express.json());

//Coneccion a mongo
mongoose.connect(process.env.URI_MONGO_SERVER);

//Rutas
app.use('/v1',routes);
app.use((req,res)=>{
    res.send('<a href="/v1">Go to api</a>');
})

//Levantar el servidor 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el puerto${process.env.PORT}`);
})
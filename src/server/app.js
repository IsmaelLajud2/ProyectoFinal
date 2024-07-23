const express = require('express')
const app = express()
require('dotenv').config()
require('../db/database') // Conexión a la base de datos
const port = process.env.port || 8000

app.use(express.json())

//rutas que utilizaremos
const articulosRoutes = require('../routes/articulos.routes')
app.use('/api/articulos', articulosRoutes)

//incialiazador del servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`)
})
const { Router } = require('express')
const {
    getAllArticulos,
    createArticulo,
    getByIdArticulo,
    editByIdArticulos,
    deleteByIdArticulos,


} = require('../controllers/articulosControllers')

const route = Router()
// Ruta para obtener todos los artículos
route.get('/getAll', getAllArticulos)
// Ruta para obtener articulo su ID unico
route.get('/getById/:id', getByIdArticulo)
// Ruta para crear articulo

route.post('/createArticulo', createArticulo)
// Ruta para obtener editar articulo por su ID unico

route.put('/editArticulo/:id', editByIdArticulos)
// Ruta para  borrar articulo su ID unico
route.delete('/deleteArticulo/:id', deleteByIdArticulos)

module.exports = route
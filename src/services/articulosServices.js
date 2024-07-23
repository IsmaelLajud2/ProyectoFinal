const Articulos = require('../model/articulosModel')

//servicio para obtener todos los articulos
const getAllArticulosServices = async () => {
    try {
        const articulo = await Articulos.find({})
        return articulo
    } catch (error) {
        throw new Error(error.message)
    }

}
//servicio para obtener los articulos por su ID unico

const getArticuloByIdService = async (id) => {
    try {
        const getArticuloById = await Articulos.findById(id)
        return getArticuloById

    } catch (error) {

        throw new Error({ message: error.message })
    }
}
//servicio para crear articulos

const createArticulosService = async (newArticulo) => {
    try {
        const {
            SKU,
            nombre,
            descripcion,
            fabricante,
            stock,
            precio
        } = newArticulo

        const createNewArticulo = new Articulos({
            SKU,
            nombre,
            descripcion,
            fabricante,
            stock,
            precio
        })

        const saveArticulo = await createNewArticulo.save()
        return saveArticulo
    } catch (error) {
        throw new Error({ message: error.message })
    }
}
//servicio para editar los articulos por su ID unico

const editArticulosService = async (id, payload, queryOptions) => {
    try {
        return await Articulos.findByIdAndUpdate(id, payload, queryOptions)
    } catch (error) {
        throw new Error({ message: error.message })
    }
}
//servicio para borrar los articulos por su ID unico

const deleteArticuloService = async (id) => {
    try {
        return await Articulos.findOneAndDelete(id)

    } catch (error) {
        throw new Error({ message: error.message })

    }
}

module.exports = {
    getAllArticulosServices,
    getArticuloByIdService,
    createArticulosService,
    editArticulosService,
    deleteArticuloService

}
const {
    getAllArticulosServices,
    createArticulosService,
    getArticuloByIdService,
    editArticulosService,
    deleteArticuloService
} = require('../services/articulosServices');

// Constantes para mensajes de error
const ERROR_MESSAGES = {
    NOT_FOUND: "Producto no encontrado",
    CREATION_FAILED: "No se pudo crear el artículo",
    INVALID_ID: "ID inválido o producto inexistente",
    SERVER_ERROR: "Error del servidor"
};

const handleError = (res, statusCode, message) => {
    res.status(statusCode).json({ message });
};

// Controlador para obtener todos los artículos
const getAllArticulos = async (req, res) => {
    try {
        const productos = await getAllArticulosServices();
        if (productos.length === 0) {
            return handleError(res, 404, ERROR_MESSAGES.NOT_FOUND);
        }
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al obtener todos los artículos:", error);
        handleError(res, 500, ERROR_MESSAGES.SERVER_ERROR);
    }
};
// Controlador para obtener los articulos por su ID unico
const getByIdArticulo = async (req, res) => {
    try {
        const { id } = req.params;
        const articulo = await getArticuloByIdService(id);
        if (!articulo) {
            return handleError(res, 404, ERROR_MESSAGES.INVALID_ID);
        }
        res.status(200).json(articulo);
    } catch (error) {
        console.error("Error al obtener el artículo por ID:", error);
        handleError(res, 500, ERROR_MESSAGES.SERVER_ERROR);
    }
};
// Controlador para crear articulos
const createArticulo = async (req, res) => {
    try {
        const nuevoArticulo = req.body;
        if (!nuevoArticulo) {
            return handleError(res, 400, ERROR_MESSAGES.CREATION_FAILED);
        }
        await createArticulosService(nuevoArticulo);
        res.status(201).json("Artículo creado correctamente");
    } catch (error) {
        console.error("Error al crear el artículo:", error);
        handleError(res, 500, ERROR_MESSAGES.SERVER_ERROR);
    }
};
// Controlador para editar articulos por su ID unico
const editByIdArticulos = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const queryOptions = { returnDocuments: "after" };

        const updatedArticulo = await editArticulosService(id, payload, queryOptions);
        if (!updatedArticulo) {
            return handleError(res, 404, ERROR_MESSAGES.INVALID_ID);
        }
        res.status(200).json(updatedArticulo);
    } catch (error) {
        console.error("Error al editar el artículo por ID:", error);
        handleError(res, 500, ERROR_MESSAGES.SERVER_ERROR);
    }
};
// Controlador para borrar los articulos por su ID unico
const deleteByIdArticulos = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteArticuloService(id);
        if (!result) {
            return handleError(res, 404, ERROR_MESSAGES.INVALID_ID);
        }
        res.status(200).json("Artículo borrado");
    } catch (error) {
        console.error("Error al borrar el artículo por ID:", error);
        handleError(res, 500, ERROR_MESSAGES.SERVER_ERROR);
    }
};

module.exports = {
    getAllArticulos,
    getByIdArticulo,
    createArticulo,
    editByIdArticulos,
    deleteByIdArticulos
};

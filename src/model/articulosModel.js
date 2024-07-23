const { Schema, model } = require("mongoose")

const articulosSchema = new Schema({

    SKU: {
        type: String,
        required: true,
        unique: true

    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = model("Articulos", articulosSchema)   
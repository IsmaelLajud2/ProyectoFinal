const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("conectado a la base de datos")
    } catch (error) {
        console.log({ message: error.message })
    }
}
dbConnect()
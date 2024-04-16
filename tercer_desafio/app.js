const express = require('express')
const app = express()
const PORT = 8080
const ProductManager = require('./productManager.js')

app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})

const manager = new ProductManager()
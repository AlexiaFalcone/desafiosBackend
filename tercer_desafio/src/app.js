const express = require('express')
const app = express()
const PORT = 8080
const ProductManager = require('./productManager.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})

const manager = new ProductManager('Productos.json')

app.get('/products', async (req, res) => {
    const products = await manager.getProduct()
    let limit = parseInt(req.query.limit)
    let limitProduct = [...products]

    if(!isNaN(limit) && limit > 0){
        limitProduct = limitProduct.slice(0, limit)
        res.json(limitProduct)
    }else{
        res.send(products) 
    }    
      
})

app.get('/:pid', async (req, res) => {
    const prodId = req.params.pid
    const prodUnico = await manager.getProductById(prodId)
    res.send(prodUnico)
})
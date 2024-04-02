const fs = require('fs').promises

class ProductManager {
    constructor(){
        this.numeroId = 1
        this.path = "produtos.json"
    }
    
    async addProduct(producto){
        try {
            let productos = await this.getProduct()
            const productoEncontrado = this.productos.find((producto) => producto.code === code)
            if (productoEncontrado){
                console.log("El producto ya se encuentra registrado.")
                return
            }
            producto.id = this.numeroId++
            this.productos.push(producto)
            await fs.writeFile(this.path, JSON.stringify(productos, null, 2))
        } catch(error){
            console.error("Error al crear el usuario", error)
        }      
    }
    async getProduct(){
        try{
            const data = await fs.readFile(this.path, 'utf8')
            return JSON.parse(data)
        }catch(error){
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
        }
    }
    async getProductById(producto_id){
        let productos = await this.getProduct(productos)
        const productoUnico = this.productos.find((producto) => producto_id === producto.id)
        if (!productoUnico) {
            console.log("Error, el producto no exite.")
            return
        }
        return productoUnico

    }
}
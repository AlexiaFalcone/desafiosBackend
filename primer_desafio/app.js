class ProductManager {
    constructor() {
        this.products = []
        this.idNumeber = 1
    }
    getProduct() {
        return this.products
    }
    addProduct(product, code) {
        if (!this.productValid(product)) {
            console.log("Debe completar todos los campos")
            return
        }
        const productFound = this.products.find((product) => product.code === code)
        if (productFound) {
            console.log("El producto ya se encuentra registrado.")
            return
        }
        
        product.id = this.idNumeber++       
        this.products.push(product)

    }
    productValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.stock &&
            product.code 
        )
    }

    getProductById(product_id) {
        const singleProduct = this.products.find((product) => product.id === product_id)
        if (!singleProduct) {
            console.log("Error, el producto no exite.")
            return
        }
        return singleProduct

    }
 
}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Blazer Monet",
    description: "Composición: Lino, disponible en 3 colores", 
    price: 32000, 
    thumbnail: 'https://images.app.goo.gl/EbEPghSLdwjjma257', 
    stock: 15, 
    code: "A01",
})
productManager.addProduct({
    title: "Pantalon Monet",
    description: "Composición: Lino, disponible en 3 colores", 
    price: 21000, 
    thumbnail: 'https://images.app.goo.gl/R4MLaCoMDuhrVxcF8', 
    stock: 15, 
    code: "A02",
})
productManager.addProduct({
    title: "Chaleco Monet",
    description: "Composición: Lino, disponible en 3 colores", 
    price: 24500, 
    thumbnail: 'https://images.app.goo.gl/2YQ3Gt2xdh4fUjax6', 
    stock: 10, 
    code: "A03",
})

const newSeason = productManager.getProduct()
console.log("Todos los productos", newSeason)

const bringSingleProduct = productManager.getProductById (2)
 console.log("Producto único", bringSingleProduct)
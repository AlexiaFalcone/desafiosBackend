class ProductManager {
    constructor() {
        this.products = []
    }
    getProduct() {
        return this.products
    }
    productsList(title, description, price, thumbnail, stock) {
        const code = this.products.length + 1
        const product = {
            id: code,
            title,
            description,
            price,
            thumbnail,
            stock,
        }
        this.products.push(product)
    }
    addProduct(product_id, new_title, new_price, new_description, new_image, new_stock) {
        const productFound = this.products.find((product) => product.id === product_id)
        if (productFound) {
            console.log("El producto ya se encuentra registrado.")
            return
        }
        const newProduct = { ...this.productFound }
        newProduct.id = this.products.length + 1
        newProduct.title = new_title
        newProduct.description = new_description
        newProduct.price = new_price
        newProduct.thumbnail = new_image
        newProduct.stock = new_stock

        this.products.push(newProduct)
        console.log("El producto se agrego de forma correcta.")
    }
    getProductById(product_id) {
        const singleProduct = this.products.find((product) => product.id === product_id)
        console.log(singleProduct)
    }
}

const productManager = new ProductManager()

productManager.productsList("Blazer Monet", "Composición: Lino, disponible en 3 colores", 32000, "https://images.app.goo.gl/EbEPghSLdwjjma257", 15)
productManager.productsList("Pantalon Monet", "Composición: Lino, disponible en 3 colores", 21000, "https://images.app.goo.gl/R4MLaCoMDuhrVxcF8", 15)
productManager.productsList("Chaleco Monet", "Composición: Lino, disponible en 3 colores", 24500, "https://images.app.goo.gl/2YQ3Gt2xdh4fUjax6", 15)

const products = productManager.getProduct()
console.log(products)

productManager.addProduct("Pollera Camet", "Composición: Lino, disponible en 3 colores", 19500, "https://images.app.goo.gl/bEkg65gtKwUjQQeP9", 10)
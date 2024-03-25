class ProductManager {
    constructor() {
        this.products = []
    }
    getProdut() {
        return this.products
    }
    listProducts(title, description, price, thumbnail, stock) {
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
    addProduct (product_id, new_title, new_price, new_description, new_image, new_stock){
        const productFound = this.products.find((product) => product.id === product_id)
        if(productFound){
            console.log ("El producto ya se encuentra registrado.")
            return
        }
        const newProduct = {...this.productFound}
        newProduct.id = this.products.length + 1
        newProduct.title = new_title
        newProduct.description = new_description
        newProduct.price = new_price
        newProduct.thumbnail = new_image
        newProduct.stock = new_stock

        this.products.push(newProduct)
        console.log ("El producto se agrego de forma correcta.")
    }
    getProductById (product_id){
        const singleProduct = this.products.find((product) => product.id === product_id)
        console.log(singleProduct)
    }
}



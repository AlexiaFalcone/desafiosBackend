const ProductManager = require('./segundo_desafio/productManager')

const manager = new ProductManager()

manager.addProduct({
    title: "Blazer Monet",
    description: "Composición: Lino, disponible en 3 colores", 
    price: 32000, 
    thumbnail: 'https://images.app.goo.gl/EbEPghSLdwjjma257', 
    stock: 15, 
    code: "A01",
}
)
manager.getProduct()
.then(productos => console.log('productos', productos))
.catch(error => console.error('Error al consultar productos', error))
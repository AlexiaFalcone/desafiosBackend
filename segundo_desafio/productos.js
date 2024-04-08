
const ProductManager = require('./productManager.js')

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
   manager.addProduct({
       title: "Blazer Monet",
       description: "Composición: Lino, disponible en 3 colores",
       price: 32000,
       thumbnail: 'https://images.app.goo.gl/EbEPghSLdwjjma257',
       stock: 15,
       code: "A02",

   }
   )

 manager.getProduct()
     .then(productos => console.log('productos', productos))
     .catch(error => console.error('Error al consultar productos', error))

 manager.getProductById(2)
     .then(productos => console.log('producto único', productos))
     .catch(error => console.error('El producto no existe', error))

// manager.upDateProduct({
//     title: "Pantalon Monet",
//     description: "Composición: Lino, disponible en 3 colores",
//     price: 42000,
//     thumbnail: 'https://images.app.goo.gl/EbEPghSLdwjjma257',
//     stock: 18,
//     code: "A02",
// }, 2)

//    manager.deleteProduct(1)
//    .then(productos => console.log('El producto fue eliminado', productos))
//    .catch(error => console.error('El producto no se pudo eliminar', error))
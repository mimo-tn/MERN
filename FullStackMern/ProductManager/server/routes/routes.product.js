const ProductController = require("../controllers/controllers.product");

module.exports = app =>{
    app.get('/api/Products',ProductController.findAllProducts);
    app.get('/api/Products/:id', ProductController.findOneProduct);
    app.patch('/api/Products/:id', ProductController.updateProduct);
    app.post('/api/Products', ProductController.createProduct);
    app.delete('/api/Products/:id', ProductController.deleteProduct);
}
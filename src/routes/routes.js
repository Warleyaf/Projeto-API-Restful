const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove) // Essa minha rota delete ela precisa receber um id, e vai chamar o método delete


module.exports = router
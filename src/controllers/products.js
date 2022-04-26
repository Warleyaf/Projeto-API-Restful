const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params
  
  let obj = id ? { _id: id } : null // aqui estou dizendo o seguinte, se ter um id atribui para o objeto { _id: id } caso contrário me retorna null

  const products = await ProductsModel.find(obj)

  res.send(products)
}
// Criando o método post
async function post(req, res) {
  const { 
    name,
    brand,
    price,
  } = req.body

  const products = new ProductsModel({
    name,
    brand,
    price,
  })

  products.save()
  res.send({
    message: 'Sucess'
  })

}
module.exports = {
  get,
  post,
}
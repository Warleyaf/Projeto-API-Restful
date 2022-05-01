const ProductsModel = require('../models/products')

// Criando o métoddo get
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

// Criando o método PUT (Editar as coisas)
async function put(req, res) {
  const { id } = req.params //capturando o meu id

  // Outro método de procurar o produto usando o findOneAndUpdate() mais adequado fazer com esse código
  const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, { new: true })

  res.send({
    message: 'Success!',
    product,
  })

  /*
  trecho do código de alterar o produto, uma das formas

  const product = await ProductsModel.findOne({ _id: id})

  await product.updateOne(req.body)

  res.send({
    message: 'success',
    product,
  })
  
  */
}

// Criando o Método DELETE (apagar as coisas)
async function remove(req, res) {
  const { id } = req.params

  const remove = await ProductsModel.deleteOne({ _id: id })

  const message = remove.ok ? "Succes" : "Error"

  res.send({
    message,
  })
}

module.exports = {
  get,
  post,
  put,
  remove,
}
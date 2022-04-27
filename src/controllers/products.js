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

// Criando o método PUT (Editar as coisas)
async function put(req, res) {
  const { id } = req.params //capturando o meu id

  // Outro método de procurar o produto usando o findOneAndUpdate() mais adequado fazer com esse código
  const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, { new: true }) // Esse método findOneAndUpdate() faz o seguinte, ele procura um item baseado no id que eu passar e ele já vai fazer a atualização desse item, o primeiro valor que passo é o id o poduto que quero procurar, o segundo valor é o valor que eu quero alterar ai passo o req.body, e o terceiro valor é se eu quero que ele me retorne o objeto novo ou o produto novo já atualizado ai eu passo o {new: true}

  res.send({
    message: 'Success!',
    product,
  })




  /*

  trecho do código de alterar o produto, uma das formas

  const product = await ProductsModel.findOne({ _id: id}) // aqui nessa linha eu estou procurando o meu produto com o .findOne(), depois que eu achei o meu elemento com o findOne() agora eu consigo alterar os elelemetos dele.

  await product.updateOne(req.body) // método updateOne meio que é para atualizar o produto, mas como ta one só vai atualizar 1 produto, e entre parenteses eu posso colocar o que eu quero atualizar nele Ex.: se eu quero atualizar só o name eu coloco name: '' <- dessa forma aqui mas como eu quero alterar tudo eu coloco o req.body

  res.send({ // isso aqui é uma boa prática, porque vai me retornar uma menssagem de sucesso que foi alterado e o produto que foi alterado.
    message: 'success',
    product,
  })
  
  */
}

module.exports = {
  get,
  post,
  put,
}
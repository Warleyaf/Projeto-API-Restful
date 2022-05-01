const express = require('express');
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes');
const { all } = require('./routes/routes');

const app = express()

// Conexão no banco
db.connect()

// Array de site permitido da minha API
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.app.com.br',
]


// Habilitando o CORS

app.use(cors({
  origin: function(origin, callback) {
    let allowed = true

    //mobile app
    if (!origin) allowed = true

    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))


/*
app.use(cors({ // limitando a API/CORS para um único endereço
  origin: 'http://127.0.0.1:5530' // aqui ficaria a url que eu quero liberar para acessar a minha API
}))
*/

// habilita server para receber dados json
app.use(express.json())


//definindo as rotas
app.use('/api', routes)

// Criando portas servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening port ${port}`))
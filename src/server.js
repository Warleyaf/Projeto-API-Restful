const express = require('express');
//const path = require('path');

const routes = require('./routes/routes')

const app = express()

//Habilita server para receber dados via post (formulário)

app.use(express.urlencoded({extended: true}))


//definindo as rotas
app.use('/api', routes)

// Criando portas servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening port ${port}`))
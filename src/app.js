const express = require('express')
const app = express()

//rotas
const maravilhosas = require("./routes/womanRoutes.js")


app.use(express.json()) // express. json() é um método embutido no express para reconhecer o pedido do objecto  recebido como um Objecto JSON. Este método é chamado como um intermediário na sua aplicação usando o código: app
app.use("/", maravilhosas )


module.exports = app


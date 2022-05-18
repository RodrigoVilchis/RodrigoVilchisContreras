const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const productos = []


app.engine('handlebars', handlebars.engine())
//app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    res.render('./layouts/main', { productos })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

const server = app.listen(8080, () => {
    console.log('Servidor esta corriendo satisfactoriamente')
})
//npm init "en el terminal"
//npm install express
const express = require("express")
const modulo = require("./ejercicioclase3")

let file = "./producto.txt";
const producto = new modulo.Contenedor(file)

const PORT = process.env.PORT || 8080
const app = express()


const server = app.listen(PORT, () => {
    console.log("Servidor HTTP escuchando en el puerto: " + PORT)

})
app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

app.get("/productos", async(req, res) => {
    const productos = await producto.getAll()
    //console.log(productos)

    res.status(200).send(productos)
})

app.get("/productoRandom", (req, res) =>{
    producto.getAll().then(productos => {
        const parseProducts = JSON.parse(productos)
        const tamanio = parseProducts.length
        const select = Math.ceil(Math.random() *tamanio-1)
        //console.log(select)
        //console.log(tamanio)
        //console.log(parseProducts)
        res.send(parseProducts[select])
        
    }) .catch(err => {
        console.error(err)
        res.status(500).send("Fallo del Servidor")
    })
    
})


// GET
// POST
// PUT
// PATCH
// DELETE
// OPTIONS
// HEAD

//ctrl + C para salir

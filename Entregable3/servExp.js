//npm init "en el terminal"
//npm install express

const express = require("express")

const { Contenedor } = require("../ejercicioclase3.js")

const producto = new Contenedor("../producto.txt")

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log("Servidor HTTP escuchando en el puerto: " + PORT)
    producto.save({title: "Ejemplo", price: 333, thumbnail: "https://libro-ejemplo/book"});
    producto.getById(1)
})
app.get("/", (req, res) => {
    res.send("../producto.txt")
})

// GET
// POST
// PUT
// PATCH
// DELETE
// OPTIONS
// HEAD

//ctrl + C para salir

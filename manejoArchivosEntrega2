const fs = require("fs")

class Contenedor{
    constructor(file){
        this.file = file
        this.id = 1
    }

    save({title, price, thumbnail}){
        fs.appendFile(this.file, `{ title: ${title}, price: ${price}, thumbnail: ${thumbnail}, id: ${this.id} }`, err =>{
            if(err){
                console.log("Hubo un error: " + err)
            }
            else{
                this.id++
                console.log("Se escribio correctamente")
            }
        })
    }

    getById(){

    }

    getAll(){

    }

    deleteById(){

    }

    deleteAll(){

    }
}

const contenedor1 = new Contenedor(productos.txt)
contenedor1.save("Principito", 250, "principito.jpg")

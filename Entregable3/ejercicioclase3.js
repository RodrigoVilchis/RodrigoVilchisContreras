const fs = require("fs");
const { parse } = require("path");
let file = "";
class Contenedor {
constructor(file) {
    this.file = file;
    this.products = "";
  }

  async save(product) {
    try {
      const { title, price, thumbnail } = product //Destructuring de un objeto "product"
      const file = fs.readFileSync(this.file, "utf-8")
      const parseFile = file.length ? JSON.parse(file) : []
      const id = parseFile.length > 0 ? parseFile[parseFile.length - 1].id + 1 : 1
      const newProducto = { title, price, thumbnail, id }
      //a
      fs.writeFile(this.file, JSON.stringify([...parseFile, newProducto], null, 2), (err) => {
          if (err) {
            console.log("Hubo un error: " + err)
          } else {
            console.log("Se escribio correctamente")
          }
        })
    } catch (error) {
      console.error(error)
    }
  }

  async getById(idProducto) {
    try{
      const ejemplo = await this.getAll(true)
    //console.log("BBB", ejemplo)
        const data = JSON.parse(ejemplo)
        let productoID = data.find((item) => item.id === idProducto);
        if(productoID==null){
          console.log("El elemento no existe")
        }else{
          console.log("El productoid es: ",productoID)
          //return productoID
        }

    }catch(error){
      console.error(error)
    }
      }
 //isCalled es una bandera, la cual sabra que codigo ejecutar segun fue llamada
 //isCalledFromClass
  getAll(isCalledFromClass) {
    return new Promise((resolve, reject) => {
      //console.log("Ejecutandose");
      try {
        fs.readFile(this.file, "utf-8", (err, data) => {
          if (err) {
            console.log("Hubo un error en getAll(): " + err);
          } else {
            if(!isCalledFromClass){
              console.log("Productos en el .txt: " + data)
            }
            
            resolve(data)
          }
        });
        //console.log("Estos son los productos",(productos))
        //return productos
      } catch (error) {
        console.error(error);
        reject(error)
        return []
      }
    });
  }

  async deleteById(idProducto) {
    try {
      const archivo = await this.getAll(true) //await this.getAll();
      const data = JSON.parse(archivo)//console.log(this.products);
      //console.log(data)
      let dataDeleteId = data.filter((item) => item.id != idProducto);
      //console.log(dataDeleteId)
      //console.log("aaaa", typeof(dataDeleteId))
      await fs.promises.writeFile(this.file, JSON.stringify(dataDeleteId, null, 2));
      console.log("aaaa", dataDeleteId)
      //return deleteId
    } catch (err) {
      console.log("Hubo un error al borrar el producto: "+err);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.file, JSON.stringify([]));
      console.log("Borrado");
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports.Contenedor = Contenedor
//const contenedor1 = new Contenedor("./producto.txt");


//const contenedor2 = new Contenedor('./file.txt')
//const contenedor2 = new Contenedor('./file.txt')

/*
contenedor1.deleteAll()
contenedor1.save({
  title: "Principito",
  price: 250,
  thumbnail: "https://principito/book",
});
contenedor1.save({
  title: "Libro de los piratas",
  price: 300,
  thumbnail: "https://libro-pirata/book",
});
contenedor1.save({
    title: "El señor de los anillos",
    price: 450,
    thumbnail: "https://libro-anillos-se/book",
  });

  contenedor1.save({
    title: "Harry Potter",
    price: 320,
    thumbnail: "https://libro-de-magia/book",
  });

  contenedor1.save({
    title: "El libro vaquero",
    price: 160,
    thumbnail: "https://libro-de-cultura/book",
  });

  contenedor1.save({
    title: "One Piece",
    price: 420,
    thumbnail: "https://una-eternidad/book",
  });
  
   contenedor1.getAll()
   contenedor1.deleteById({id:2})
   contenedor1.getById(3)

contenedor1.save({
  title: "La voladora",
  price: 69,
  thumbnail: "https://la-que-vuela/book",
});

  */
//contenedor1.deleteById(3)
//contenedor1.getAll()
//contenedor1.getById(2)
//contenedor1.deleteById(3)
//contenedor1.deleteAll()


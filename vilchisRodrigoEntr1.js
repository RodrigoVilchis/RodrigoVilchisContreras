

class Usuario{
    constructor(nombre, apellido){
        this.name = nombre
        this.lastname = apellido
        this.book = []
        this.pet = []
            
            
    }
        getFullName(){
            return `${this.name} ${this.lastname}`
        }

        addMascota(pet){
            return this.pet.push(pet)
        }

        countMascotas(){
            return this.pet.length
        }

        addBook (nombreB, autorB){
            return this.book.push(`{Nombre: ${nombreB}, Autor: ${autorB}`)
        }

        getBookNames(){
            return this.book[0]
        }
}

const usuario1 = new Usuario("Juan", "Pillado")
const usuario2 = new Usuario("Diego", "Federer")

console.log(usuario1.getFullName())
usuario1.addMascota("Perro")
usuario1.addMascota("Gato")
usuario1.addMascota("Perico")
usuario1.addMascota("Rana")
console.log(usuario1, usuario2)
console.log(usuario1.countMascotas())

usuario2.addBook("Harry Potter", "J.K. Rowling")
usuario2.addBook("El Alquimista", "Paulo Coelho")

console.log(usuario2.getBookNames())
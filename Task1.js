// Task 1: Clases y Constructores (8 minutos)
// JavaScript moderno ofrece sintaxis de clases que facilita la programación orientada a objetos.

// Sintaxis de Clase Básica

// Definición de clase
class Persona {
  // Constructor
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método de instancia
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }

  // Método que usa otros métodos
  presentarse() {
    console.log(this.saludar());
  }
}

// Crear instancia
const persona1 = new Persona("Ana", 25);
persona1.presentarse(); // "Hola, soy Ana y tengo 25 años"

// Verificar tipo
console.log(persona1 instanceof Persona); // true
console.log(typeof Persona); // "function"



// Propiedades y Métodos

class Coche {
  // Propiedades de instancia (se definen en constructor)
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = 0;
    this.encendido = false;
  }

  // Métodos de instancia
  encender() {
    if (!this.encendido) {
      this.encendido = true;
      console.log(`${this.marca} ${this.modelo} encendido`);
      return true;
    }
    return false;
  }

  apagar() {
    if (this.encendido) {
      this.encendido = false;
      console.log(`${this.marca} ${this.modelo} apagado`);
      return true;
    }
    return false;
  }

  conducir(kilometros) {
    if (this.encendido) {
      this.kilometraje += kilometros;
      console.log(`Condujiste ${kilometros}km. Total: ${this.kilometraje}km`);
    } else {
      console.log("Primero debes encender el coche");
    }
  }

  // Método getter (propiedad computada)
  get descripcion() {
    return `${this.marca} ${this.modelo} (${this.año}) - ${this.kilometraje}km`;
  }

  // Método setter
  set descripcion(nuevaDescripcion) {
    const partes = nuevaDescripcion.split(' ');
    if (partes.length >= 3) {
      this.marca = partes[0];
      this.modelo = partes[1];
      this.año = parseInt(partes[2]);
    }
  }
}

// Uso
const miCoche = new Coche("Toyota", "Corolla", 2020);
miCoche.encender(); // "Toyota Corolla encendido"
miCoche.conducir(50); // "Condujiste 50km. Total: 50km"

console.log(miCoche.descripcion); // "Toyota Corolla (2020) - 50km"

miCoche.descripcion = "Honda Civic 2021";
console.log(miCoche.descripcion); // "Honda Civic (2021) - 50km"


// Métodos Estáticos

class UtilidadesMatematicas {
  // Método estático - no necesita instancia
  static sumar(a, b) {
    return a + b;
  }

  static multiplicar(a, b) {
    return a * b;
  }

  // Método estático que puede acceder a otros métodos estáticos
  static calcularPromedio(...numeros) {
    const suma = this.sumar(numeros.reduce((acc, num) => acc + num, 0), 0);
    return suma / numeros.length;
  }
}

// Uso sin crear instancia
console.log(UtilidadesMatematicas.sumar(5, 3)); // 8
console.log(UtilidadesMatematicas.multiplicar(4, 6)); // 24
console.log(UtilidadesMatematicas.calcularPromedio(10, 20, 30)); // 20

// ❌ Error: no se puede llamar desde instancia
// const utils = new UtilidadesMatematicas();
// utils.sumar(1, 2); // TypeError
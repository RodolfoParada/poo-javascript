// Task 2: Herencia y Prototype Chain (10 minutos)
// JavaScript implementa herencia a través del prototype chain, que conecta objetos en una cadena de delegación.

// Herencia con Clases
// Clase padre
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }

  dormir() {
    console.log(`${this.nombre} está durmiendo`);
  }

  // Método que puede ser sobrescrito
  hacerSonido() {
    console.log("El animal hace un sonido");
  }
}

// Clase hija que hereda de Animal
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    // Llamar al constructor del padre
    super(nombre, edad);
    this.raza = raza;
  }

  // Sobrescribir método del padre
  hacerSonido() {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }

  // Nuevo método específico
  moverCola() {
    console.log(`${this.nombre} mueve la cola felizmente`);
  }

  // Método que usa funcionalidad del padre
  jugar() {
    this.hacerSonido(); // Método sobrescrito
    super.hacerSonido(); // Método original del padre
  }
}

// Uso de herencia
const perro1 = new Perro("Rex", 3, "Labrador");
perro1.comer(); // "Rex está comiendo" (heredado)
perro1.hacerSonido(); // "Rex dice: ¡Guau guau!" (sobrescrito)
perro1.moverCola(); // "Rex mueve la cola felizmente" (propio)

perro1.jugar();
// "Rex dice: ¡Guau guau!" (método sobrescrito)
// "El animal hace un sonido" (método original vía super)



// Prototype Chain en Detalle

// Entendiendo el prototype chain
console.log(perro1.__proto__); // Perro.prototype
console.log(perro1.__proto__.__proto__); // Animal.prototype
console.log(perro1.__proto__.__proto__.__proto__); // Object.prototype
console.log(perro1.__proto__.__proto__.__proto__.__proto__); // null

// Verificar herencia
console.log(perro1 instanceof Perro); // true
console.log(perro1 instanceof Animal); // true
console.log(perro1 instanceof Object); // true

// Acceder a propiedades del prototype
console.log(Perro.prototype.constructor); // [Function: Perro]
console.log(Animal.prototype.constructor); // [Function: Animal]


// Herencia Múltiple con Mixins
// Mixin para funcionalidad voladora
const Volador = {
  volar() {
    console.log(`${this.nombre} está volando`);
  },
  aterrizar() {
    console.log(`${this.nombre} aterrizó`);
  }
};

// Mixin para funcionalidad nadadora
const Nadador = {
  nadar() {
    console.log(`${this.nombre} está nadando`);
  },
  bucear() {
    console.log(`${this.nombre} se sumergió`);
  }
};

// Función para aplicar mixins
function aplicarMixins(clase, ...mixins) {
  mixins.forEach(mixin => {
    Object.assign(clase.prototype, mixin);
  });
}

// Clase que hereda de Animal
class Pato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  hacerSonido() {
    console.log(`${this.nombre} dice: ¡Cuac cuac!`);
  }
}

// Aplicar mixins
aplicarMixins(Pato, Volador, Nadador);

// Ahora Pato tiene métodos de Animal, Volador y Nadador
const pato = new Pato("Donald", 2);
pato.comer(); // De Animal
pato.volar(); // De Volador
pato.nadar(); // De Nadador
pato.hacerSonido(); // Propio
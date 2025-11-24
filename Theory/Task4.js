// Task 4: Polimorfismo (6 minutos)
// El polimorfismo permite que objetos de diferentes clases respondan de manera diferente al mismo método.

// Polimorfismo con Herencia

// Clase base
class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método que será sobrescrito (polimórfico)
  calcularArea() {
    return 0; // Implementación por defecto
  }

  // Método que usa el método polimórfico
  describir() {
    console.log(`Soy una ${this.nombre} con área ${this.calcularArea()}`);
  }
}

// Clases que heredan y sobrescriben
class Circulo extends Figura {
  constructor(radio) {
    super('círculo');
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super('rectángulo');
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super('triángulo');
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

// Función que demuestra polimorfismo
function mostrarAreas(figuras) {
  figuras.forEach(figura => {
    figura.describir(); // Cada figura responde diferente al mismo método
  });
}

// Uso polimórfico
const figuras = [
  new Circulo(5),
  new Rectangulo(10, 5),
  new Triangulo(8, 6)
];

mostrarAreas(figuras);
// "Soy una círculo con área 78.53981633974483"
// "Soy una rectángulo con área 50"
// "Soy una triángulo con área 24"


// Polimorfismo con Duck Typing

// En JavaScript, el polimorfismo también funciona por "duck typing"
// Si camina como pato y hace cuac como pato, entonces es un pato

class ProcesadorDePagos {
  procesarPago(proveedor, monto) {
    // No importa qué tipo de proveedor sea, solo que tenga método procesar
    return proveedor.procesar(monto);
  }
}

class PayPal {
  procesar(monto) {
    return `Procesando $${monto} con PayPal`;
  }
}

class Stripe {
  procesar(monto) {
    return `Procesando $${monto} con Stripe`;
  }
}

class Bitcoin {
  procesar(monto) {
    return `Procesando ${monto} BTC con wallet`;
  }
}

const procesador = new ProcesadorDePagos();
const proveedores = [new PayPal(), new Stripe(), new Bitcoin()];

proveedores.forEach(proveedor => {
  console.log(procesador.procesarPago(proveedor, 100));
});
// "Procesando $100 con PayPal"
// "Procesando $100 con Stripe"
// "Procesando 100 BTC con wallet"
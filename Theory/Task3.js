// Task 3: Encapsulamiento (6 minutos)
// El encapsulamiento permite ocultar detalles de implementación y proteger el estado interno.

// Propiedades Privadas (Convención)

class CuentaBancaria {
  constructor(saldoInicial) {
    // Propiedad "privada" por convención (no es realmente privada)
    this._saldo = saldoInicial;
    this._movimientos = [];
  }

  // Método público para acceder al saldo
  obtenerSaldo() {
    return this._saldo;
  }

  // Método público para depositar
  depositar(monto) {
    if (monto > 0) {
      this._saldo += monto;
      this._registrarMovimiento('depósito', monto);
      return true;
    }
    return false;
  }

  // Método público para retirar
  retirar(monto) {
    if (monto > 0 && monto <= this._saldo) {
      this._saldo -= monto;
      this._registrarMovimiento('retiro', -monto);
      return true;
    }
    return false;
  }

  // Método "privado" (por convención)
  _registrarMovimiento(tipo, monto) {
    this._movimientos.push({
      tipo,
      monto,
      fecha: new Date(),
      saldoResultante: this._saldo
    });
  }

  // Método para obtener movimientos (controlado)
  obtenerMovimientos() {
    return [...this._movimientos]; // Copia para evitar modificación externa
  }
}

// Uso
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log(cuenta.obtenerSaldo()); // 1300

// Aunque podríamos acceder directamente, no deberíamos
console.log(cuenta._saldo); // ❌ No recomendado
cuenta._saldo = 999999; // ❌ Modificación directa no controlada



// Propiedades Privadas con # (ES2022
class CuentaBancariaPrivada {
  #saldo; // Propiedad realmente privada
  #movimientos;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
    this.#movimientos = [];
  }

  obtenerSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      this.#registrarMovimiento('depósito', monto);
      return true;
    }
    return false;
  }

  // Método privado
  #registrarMovimiento(tipo, monto) {
    this.#movimientos.push({
      tipo,
      monto,
      fecha: new Date(),
      saldoResultante: this.#saldo
    });
  }

  obtenerMovimientos() {
    return [...this.#movimientos];
  }
}

// Uso
const cuentaPrivada = new CuentaBancariaPrivada(1000);
console.log(cuentaPrivada.obtenerSaldo()); // 1000

// console.log(cuentaPrivada.#saldo); // ❌ SyntaxError: Private field
// cuentaPrivada.#registrarMovimiento('test', 100); // ❌ SyntaxError
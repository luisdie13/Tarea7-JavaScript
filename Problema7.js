// Object cuentaBancaria
const cuentaBancaria = {
    titular: 'Juan Pérez',
    saldo: 1000
};

  // Function actualizarSaldo
function actualizarSaldo(monto) {
    this.saldo += monto;
}

  // Amount to add
const monto = 500;

  // Using apply() to invoke actualizarSaldo with the context of cuentaBancaria and the amount to add
actualizarSaldo.apply(cuentaBancaria, [monto]);

  // Printing the cuentaBancaria object with the updated balance
console.log(cuentaBancaria);
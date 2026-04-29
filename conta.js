
export function abrirConta(cpf, depositoInicial) {
  let saldo = depositoInicial;

  return { // objeto
    cpf,
    get saldo() { // propriedade: permite apenas leitura (encapsulamento)
      return saldo;
    },
    receberPix(valor) {
      if (valor > 0) {
        saldo += valor;
      }
    },
    pagarPix(valor) {
      if (valor > 0) {
        if (saldo > valor) {
          saldo -= valor;
        }
      }
    },
  };
}


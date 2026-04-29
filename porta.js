
// 3 modos de implementar:
// 1. Prototype (modo antigo de fazer)
// 2. Classes
// 3. Objetos literais (parecido com JSON)

export const porta = { // objeto literal {}
  aberta: false,
  trancada: true, // atributo
  get fechada() { // propriedade
    return !this.aberta;
  },
  destrancar() { // métodos
    this.trancada = false;
  },
  abrir() {
    if (!this.trancada) {
      this.aberta = true;
    }
  },
};

const personagem = {
  energia: 50,
  get vivo() {
    return this.energia > 0;
  },
  get morto() {
    return this.energia <= 0;
  },
};


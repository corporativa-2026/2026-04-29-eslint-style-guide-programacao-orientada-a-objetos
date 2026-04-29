import { split } from './strings.js';
import { porta } from './porta.js';
import { abrirConta } from './conta.js';

console.log(split('a,b,c', ','));
console.log(split('teste'));

// Programação Procedimental (tudo é baseado em procedimentos (funções))
// POO: Programação Orientada a Objetos (paradigma)
// Alan Kay: na XEROX PARC, tablet-like Dynabook
// Via um programa como um "sistema biológico".
// leanpub.com/poo

// Do que é formado um OBJETO: estado e comportamento.
// estado: valor de todas as variáveis de um sistema
// comportamento: o que é possível realizar sobre estas variáveis,
// transformando o estado.
// Quantidade de detalhes: ABSTRAÇÃO

console.log(porta.trancada); // true
console.log(porta.aberta); // false
console.log(porta.fechada); // true

// door.open()
// abrir(porta); // é procedimental
// abrir é um COMPORTAMENTO da porta
porta.abrir(); // função do objeto: MÉTODO

console.log(porta.trancada); // true
console.log(porta.aberta); // false
console.log(porta.fechada); // true

porta.destrancar();
console.log(porta.trancada); // false

porta.abrir();

console.log('aberta:', porta.aberta); // true
console.log('fechada:', porta.fechada); // false

// função abrirConta cria (instancia) um objeto Conta
const contaEliezer = abrirConta('12345678901', 100.00);

console.log('CPF:', contaEliezer.cpf); // 12345678901
console.log('Saldo do Eliézer:', contaEliezer.saldo); // 100.00

const contaMatheus = abrirConta('09876543210', 200.00);

console.log('Saldo do Matheus:', contaMatheus.saldo); // 200.0

contaEliezer.receberPix(200.0);

console.log('Saldo do Eliézer:', contaEliezer.saldo); // 300.00

contaEliezer.pagarPix(50.0);

console.log('Saldo do Eliézer:', contaEliezer.saldo); // 250.0

contaEliezer.pagarPix(500.0); // não vai realizar

console.log('Saldo do Eliézer:', contaEliezer.saldo); // 250.0

contaEliezer.receberPix(1000.0);

contaEliezer.pagarPix(500.0);

console.log('Saldo do Eliézer:', contaEliezer.saldo); // 750.0

// objeto: invariante (saldo nunca é negativo)
// contaEliezer.saldo = -20000; // não há um set saldo(), apenas get saldo()

console.log('Saldo do Eliézer:', contaEliezer.saldo); // 750.0



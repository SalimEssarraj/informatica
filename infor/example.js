"use strict";
//ESEMPIO CON RITORNO FUNZIONI
function somma(a, b) {
    return a + b;
}
console.log(somma(2, 3));
console.log(somma('2', '3'));
console.log(somma(2, '3'));



//ESEMPIO CON ARRAY
const numeri = [1, 2, 3, 4, 5];
numeri.push('sei');
function sum(arr) {
    let totale = 0;
    for (const numero of arr) {
        totale += numero;
    }
    return totale;
}
console.log(sum(numeri));




// ESEMPIO CLASSI
class Persona {
    constructor(nome, età) {
        this.nome = nome;
        this.età = età;
    }
    presentazione() {
        return `Buongiorno a tutti sono ${this.nome} es sarraj e ho ${this.età} anni.`;
    }
}
const salim = new Persona('Salim', 18);
console.log(salim.presentazione());
const salek = new Persona('Salek', 'diciotto');
console.log(salek.presentazione());




//ESEMPIO OGGETTI
function dettagliAuto(car) {
    console.log(`marca: ${car.marca}, modello: ${car.modello}, anno: ${car.anno}`);
}
const auto1 = {
    marca: 'Ford',
    modello: 'Fiesta',
    anno: 2020
};
dettagliAuto(auto1);
const auto2 = {
    marca: 'Honda',
    modello: 'Civic'
};
dettagliAuto(auto2);

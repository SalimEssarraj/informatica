//ESEMPIO CON RITORNO FUNZIONI
function somma(a: number, b: number): number {
    return a + b;
}

console.log(somma(2, 3));    
console.log(somma('2', '3'));
console.log(somma(2, '3'));


//ESEMPIO CON ARRAY
const numeri: number[] = [1, 2, 3, 4, 5];
numeri.push('sei');

function sum(arr: number[]): number {
    let totale = 0;
    for (const numero of arr) {
        totale += numero;
    }
    return totale;
}

console.log(sum(numeri)); 



// ESEMPIO CLASSI
class Persona {
    nome: string;
    età: number;

    constructor(nome: string, età: number) {
        this.nome = nome;
        this.età = età;
    }

    presentazione(): string {
        return `Buongiorno a tutti sono ${this.nome} es sarraj e ho ${this.età} anni.`;
    }
}

const salim = new Persona('Salim', 18);
console.log(salim.presentazione()); 

const salek = new Persona('Salek', 'diciotto'); 
console.log(salek.presentazione());








//ESEMPIO OGGETTI
interface Auto {
    marca: string;
    modello: string;
    anno: number;
}

function dettagliAuto(car: Auto): void {
    console.log(`marca: ${car.marca}, modello: ${car.modello}, anno: ${car.anno}`);
}

const auto1: Auto = {
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


//ESEMPIO UNION TYPES

type NumeroOstringa = number | string;

let valore: NumeroOstringa;

valore = 1;
console.log(valore)


valore = "Hello World"
console.log(valore)

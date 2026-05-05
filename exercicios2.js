const menu = 10;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionando. Executando...\n");
        ex1();
        break;

    case 2:
        console.log("Exercício 2 selecionando. Executando...\n");
        ex2();
        break;

    case 3:
        console.log("Exercício 3 selecionando. Executando...\n");
        ex3();
        break;

    case 4:
        console.log("Exercício 4 selecionando. Executando...\n");
        ex4();
        break;

    case 5:
        console.log("Exercício 5 selecionando. Executando...\n");
        ex5();
        break;

    case 6:
        console.log("Exercício 6 selecionando. Executando...\n");
        ex6();
        break;

    case 7:
        console.log("Exercício 7 selecionando. Executando...\n");
        ex7();
        break;

    case 8:
        console.log("Exercício 8 selecionando. Executando...\n");
        ex8();
        break;

    case 9:
        console.log("Exercício 9 selecionando. Executando...\n");
        ex9();
        break;

    case 10:
        console.log("Exercício 10 selecionando. Executando...\n");
        ex10();
        break;
}


// ====EXERCÍCIOS====

function ex1() {
    const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
    for (const nome of nomes) {
        console.log(nome);
    }
}

//-----------------------------
function ex2() {
    const numeros = [5, 10, 15, 20, 25];
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    console.log(soma);
}

//-----------------------------
function ex3() {
    const pessoa = {
        nome: "Valentina",
        idade: 17,
        cidade: "Sorocaba"
    };
     for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}

//------------------------------
function ex4() {
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        cor: "Preto",
        automatico: true
    };

    let contador = 0;

    for (const chave in carro){
        contador++;
    }
    console.log(`O carro tem ${contador} propriedades.`);
}

//-------------------------------
function ex5() {
    const frutas = ["Caqui", "Banana", "Manga", "Uva", "Abacaxi"];
let frutasString = "";

for (const nome of frutas) {
    frutasString += nome + ", ";
}

frutasString = frutasString.slice(0, -2);

console.log(frutasString);
}

//-------------------------------

function ex6(){
    const valores = [42, "Olá", true, {nome: "Lucas"}, [1, 2, 3]];

    for (const valor of valores) {
        console.log(typeof valor);
    }
}

//-------------------------------

function ex7() {
    const pessoas = {
        Ana: 20,
        Bruno: 25,
        Valentina: 17,
        Giovana: 17
    };
    for (const chave in pessoas) {
        pessoas[chave] += 1;
    }

    console.log(pessoas);
}

//-------------------------------

function ex8() {
    const objeto = {
        nome: "Lucas",
        idade: 28,
        cargo: "Artista"
    };
    const resultado = [];

    for (const chave in objeto) {
        resultado.push(`${chave}: ${objeto[chave]}`);
    }
    console.log(resultado);

}

//-------------------------------
function ex9() {
    const numeros = [1, 2,2, 3, 4, 5, 5, 6];
    const conjunto = new Set();
    for (const numero of numeros) {
        conjunto.add(numero);
    }
    console.log(conjunto);
}

//-------------------------------
function ex10() {
    const frase = "Brawl Stars"; 
    const contagem = {};

    for (const char of frase) {
        if (char === " ") continue; 

        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }

    console.log(contagem);
}

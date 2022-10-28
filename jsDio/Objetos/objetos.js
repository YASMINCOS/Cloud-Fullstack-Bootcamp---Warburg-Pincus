
//objeto literal- colecao dinamica de dados(chave, valor).
const pessoa = {
    nome : "Yasmin costa",
    idade : 19,

    descrever : function () {
    console.log(`Meu nome é ${this.nome} e minha idade e ${this.idade}`);

    }
};

pessoa.nome="Brian";

pessoa.altura = 1.68;

console.log(pessoa);

//delete pessoa.nome;

//consultando
const atributo = "idade";
console.log(pessoa[atributo]);

const atributo2 = "nome";
console.log(pessoa[atributo2]);
//




//class como deve ser
class Pessoa{
    nome;
    idade;
    anoNasc;
    constructor(nome, idade){
        this.nome =nome;
        this.idade=idade;
        this.anoNasc = 2022 -idade;
        
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade e ${this.idade}`);

    }
}
//instancia
const brian = {
    nome : "Brian ",
    idade : 19,

    descrever : function () {
    console.log(`Meu nome é ${this.nome} e minha idade e ${this.idade}`);

    }
};

//instancia
const veronica = new Pessoa();
veronica.nome= "Veronica";
veronica.idade = 23;
veronica.descrever();

const mariar = new Pessoa("Maria", 21,2001);


//o que acontece quando uma pessoa e instanciada com o constructor- obriga a sempre passar o paramentro 





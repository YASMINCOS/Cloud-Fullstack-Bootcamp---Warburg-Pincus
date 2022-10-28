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
function compararPessoas(p1,p2){
    if ( p1.idade > p2.idade){
        console.log(`${p1.nome} e mais velha que ${p2.nome}`);
    }else if ( p1.idade > p2.idade){
        console.log(`${p2.nome} e mais velha que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} tem a mesma idade ${p2.nome}`);
    }
}
const brian= new Pessoa("brian",23);
const bruna= new Pessoa ("Bruna", 45);
compararPessoas(brian,bruna);
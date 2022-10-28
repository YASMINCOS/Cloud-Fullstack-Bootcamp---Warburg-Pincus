class Carros{

    marca;
    cor;
    gastoMedioPorkm;
    kmRodados;
    constructor(marca, cor,gastoMedioPorkm){
        this.marca =marca;
        this.cor=cor;
        this.gastoMedioPorkm= gastoMedioPorkm;
        
        
    }

    calcularGastoDePercurso(distancia,precoCombustivel){
//this, pois estou acessando o atributo aqui dentro
        return distancia * this.gastoMedioPorkm *precoCombustivel;

    }
    
}
const uno = new Carros ('Fiat', 'vermelho',1/13);
console.log(uno.calcularGastoDePercurso(70,5));

const palio = new Carros("Palio","azul",1/10);
console.log(uno.calcularGastoDePercurso(70,5));


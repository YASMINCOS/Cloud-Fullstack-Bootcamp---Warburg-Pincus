//importando
const funcoes = require ('./funcoesAuxiliares');

const numerosSorteados =[];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = funcoes.get();
    numerosSorteados.push(numerosSorteados);
    
}
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteados = numerosSorteados[i];
    if(numerosSorteados >maiorValor){
        maiorValor = numerosSorteados;
    }
}



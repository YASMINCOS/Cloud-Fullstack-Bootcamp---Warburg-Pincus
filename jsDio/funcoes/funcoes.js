
function sayMyNamename(name){
    console.log("Your name is" + name);
}

//chamadno a funcao
sayMyNamename("Bryan");
sayMyNamename("Mia");

function quadrado(valor){
   return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor,percentualJuros){
    const valoDeAcrescimo = (percentualJuros/100) * valor;
    return valor + valoDeAcrescimo;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));





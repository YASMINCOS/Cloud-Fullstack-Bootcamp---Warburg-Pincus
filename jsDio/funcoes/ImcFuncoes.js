

function calcularImc(peso, altura){
    return peso/ Math.pow(altura,2);
}
function classificarImc(imc){

    
    if( imc <10.5){
        return "Abaixo do peso";
    }else if (imc >= 18.5 && imc<25){
        console.log("Peso normal");
    }else if (imc >= 25 && imc<30){
        return"Acima do peso";
    }else if (imc >= 30 && imc<40){
        return "obeso";
    }else {
        return "Obesidade alta";
    }
}
function main (){

    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc));

}
console.log(main);

main();  


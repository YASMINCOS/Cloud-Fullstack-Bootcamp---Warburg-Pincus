
function aplicarDesconto(valor, desconto){

    return (valor - (valor * (desconto /100 )));
}
function aplicarJuros(valor, juros){
    return (valor +( valor* (juros/100)));
}

const precoEti=100;
const formaPag= 1; 

if(formaPag == 1){
    console.log (aplicarDesconto(precoEti ,10 ));
}else if (formaPag ==2){
    console.log (aplicarDesconto(precoEti ,15 ));
}else if (formaPag ==3){
    console.log (precoEti);
}else{
    console.log (aplicarJuros(precoEti, 10))
}


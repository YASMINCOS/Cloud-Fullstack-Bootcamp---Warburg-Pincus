const entradas = [5,50,10,98,23];
let i = 0;

function get(){
    const valor = entradas[i];
    i++;
    return ;
}
function print(texto){
    console.log(texto);
}
//exportando
module.exports = {
     get,
     print
};
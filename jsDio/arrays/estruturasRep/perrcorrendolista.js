const numeros = [0,1,2,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {

    const numero = numeros[i] ;
    //imprimindo todos os numeros
   // console.log(numero);

   //imprimindo somente o que e par
   if (numero %2 === 0){
     console.log(numero);
   }
}
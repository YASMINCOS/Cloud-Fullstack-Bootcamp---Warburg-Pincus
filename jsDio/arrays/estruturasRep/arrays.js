const alunos = ["Joao", "Vitor", "Marina"];
//adicionando
alunos.push("Brian");
alunos[4]="Ana";

//removendo
alunos.pop();//remove o ultimo elemento

//imprimindo posicao
console.log(alunos[0]);

const notas=[];
notas.push(5);
notas.push(8);
notas.push(2);
notas.push(6);
notas.push(8);
//calculando media
const soma =notas[0]+ notas[1] +notas[2] +notas[3]+notas[4];
console.log(soma/5);
//mostra o tamanho
console.log(notas.length);
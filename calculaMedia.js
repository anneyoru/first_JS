//Calcular média dos alunos
//Nome do aluno
const nomeAluno = "Maria";
//Notas
const nota1 = 2;
const nota2 = 6;
const nota3 = 8;
const nota4 = 7;
//Calculo de média
const media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7 ){
    console.log(`${nomeAluno}, parabéns sua média é ${media}. Você está na média!`)
}
else{
    console.log(`${nomeAluno}, sua média é ${media}. Vamos estudar mais!`)
}
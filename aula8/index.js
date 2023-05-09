/*
Kauê Abrantes tem 25 anos, pesa 62 kg, 
tem 1.65 de altura e seu IMC é de 22.77318640955005

calculo do imc peso /(altura*altura)
*/
const nome = 'Kauê';
const sobrenome = 'Abrantes'
const idade = 25;
const peso = 62;
const alturaEmM = 1.65;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento =  2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

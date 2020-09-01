const nome = "Maria";
const peso = 69.9;
const altura = 1.63;

var imc = peso / (altura * altura);


if(imc < 17){
    console.log(`${nome}, seu IMC é ${imc}. Muito abaixo do peso.`)
}
else if(imc < 18.49){
    console.log(`${nome}, seu IMC é ${imc}. Abaixo do peso.`)
}
else if(imc < 24.99){
    console.log(`${nome}, seu IMC é ${imc}. Peso normal.`)
}
else if(imc < 29.99){
    console.log(`${nome}, seu IMC é ${imc}. Acima do peso.`)
}
else if(imc < 34.99){
    console.log(`${nome}, seu IMC é ${imc}. Obesidade I.`)
}
else if(imc < 39.99){
    console.log(`${nome}, seu IMC é ${imc}. Obesidade II (severa).`)
}
else if(imc > 40){
    console.log(`${nome}, seu IMC é ${imc}. Obesidade III (mórbida).`)
}
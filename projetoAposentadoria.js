const nome = "Maria";
const sexo = "F";
const idade = 60;
const contribuicao = 25;
const calculoContribuicao = idade + contribuicao;

if (sexo == "F"){
    if(calculoContribuicao >= 85 ){
        console.log(`${nome}, você pode se aposentar.`)
    }
    else(
        console.log(`${nome}, você ainda não pode se aposentar.`)
    )
}

if (sexo == "M"){
    if(calculoContribuicao >= 90 ){
    console.log(`${nome}, você pode se aposentar.`)
}
else(
    console.log(`${nome}, você ainda não pode se aposentar.`)
)
}

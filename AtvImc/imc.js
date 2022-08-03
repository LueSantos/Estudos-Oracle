/* let peso = 56;
let altura = 1.67;
let imc = peso / (altura * altura);
console.log ("O seu IMC é : " + imc);
 */

imc = (peso, altura) =>{

    return peso/ (altura*altura)
}
imc(56, 1.67);

let nome = prompt("Digite seu nome: ");
let alturaInformada  = prompt("Informe sua altura: ");
let pesoInformado = prompt("Informe seu peso: ");


let calcularImc = imc(alturaInformada, pesoInformado)
;
console.log(Math.round(nome + 'O seu IMC é: ' + imc ));


if(imc < 18.5){
    console.log("Você está abaixo do peso recomendado.");
}

if (imc > 35){
    console.log("CUIDADO! Você está acima do peso recomendado, procure uma orientação médica!")
}

if(imc >= 18.5 && imc <= 35){
        console.log("Parabéns!!! Seu imc está excelente! ");  
}

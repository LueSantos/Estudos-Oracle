/* start = () => {
start();
  
}; */

// Função com o cálculo do IMC
calculatorImc = (weight, height) => {
  return weight / (height * height);
};
calculatorImc();

//Outra forma de colocar o botão para fucncionar: btnCalculator.addEventListener("click",buttonClick)
//Função do funcionamento do botão
// Quanda clicar no botão irá retornar o resultudado btnCalculator()
let btnCalculator = document.querySelector('#btnCalculator');
buttonClick = () => {
  return btnCalculator();
};
btnCalculator.onclick = buttonClick;

//Quando clicar no botao irá executar a função:
//1- Pegar os dados do input;
//2- guardar os valores dos inputs dentro das letizinhas;
//3- guardar o resultado da calculatorImc() passando os paramentros com os valores dos inputs
btnCalculator = () => {
  let inputWeight = document.querySelector('#input_weigth');
  let inputHeight = document.querySelector('#input_heigth');
  let imcResult = document.querySelector("#imc_result");
  let imc_result2 = document.querySelector("#imc_result2")

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  let imc = (calculatorImc(weight, height));
  //formatando o valor com duas casas decimais e trocando o ponto pela vírgula
  let formatedImc = imc.toFixed(2).replace(".", ",");
  
// Inserindo conteúdo no html por meio do js
 

if (imc >=16.00 && imc <= 16.9 ) {
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = "  Muito abaixo do peso"
   ;
    
} else if (imc >=17.00 && imc <= 18.4 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = " Abaixo do peso"
}
else if (imc >=18.5 && imc <= 24.9 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = " Peso normal"

}
else if (imc >=25 && imc <= 29.9 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = "Acima do peso"
}
else if (imc >=30 && imc <= 34.9 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = "Obesidade grau 1"
}

else if (imc >=35 && imc <= 40 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = "Obesidade grau 2"
}
else if (imc > 40 ){
    imcResult.textContent = formatedImc + "%";
    imc_result2.textContent = "Obesidade grau 3"
}

else{
    alert("Valor inválido!")
}
};

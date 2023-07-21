function calcularIMC (evento){
  evento.preventDefault();

  var peso = document.querySelector('.peso').value;
  var altura = document.querySelector('.altura').value;

  let imc = peso / (altura * altura);
  console.log(imc.toFixed(2))

  estadoNutricional(imc.toFixed(1))
}

function limparForms(){
  form.document.querySelector('.form').reset();
}

function estadoNutricional(imc){

const nivel = [' Você está abaixo do peso.', ' Peso normal.', ' Sobrepeso.', ' Obesidade grau 1.', 
' Obesidade grau 2.', '(Obesidade grau 3.' ]

resultado.innerHTML = `Resultado:`
if(imc <= 18.5 ){
  resultado.style.backgroundColor = 'aquamarine;'
  resultado.innerHTML = `Seu IMC é ${imc}: ${nivel[0]}`
}
else if(imc >= 18.5 && imc <= 24.9){
  resultado.style.backgroundColor = 'aquamarine'
  resultado.innerHTML = `Seu IMC é ${imc}:  ${nivel[1]}`
}
else if(imc >= 25 && imc <= 29.9){
resultado.style.backgroundColor = 'aquamarine'
resultado.innerHTML = `Seu IMC é ${imc}:  ${nivel[2]}`
}
else if(imc >= 30 && imc <= 34.9 ){
resultado.style.backgroundColor = 'aquamarine'
resultado.innerHTML = `Seu IMC é ${imc}:  ${nivel[3]}`
}
else if(imc >= 35 && imc <= 39.9){
resultado.style.backgroundColor = 'aquamarine'
resultado.innerHTML = `Seu IMC é ${imc}:  ${nivel[4]}`
}
else if(imc >= 40 ){
resultado.style.backgroundColor = 'aquamarine'
resultado.innerHTML = `Seu IMC é ${imc}:  ${nivel[5]}`
}
}

const form = document.querySelector('.form');
var resultado = document.getElementById('resultado');
form.addEventListener('submit', calcularIMC);
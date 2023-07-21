function calcularIMC (evento){
    evento.preventDefault();

    var peso = document.querySelector('.peso').value;
    var altura = document.querySelector('.altura').value;

    let imc = peso / (altura * altura);
    console.log(imc.toFixed(2))

    estadoNutricional(imc.toFixed(2))
}

function limparForms(){
    form.document.querySelector('.form').reset();
}

function estadoNutricional(imc){
    resultado.innerHTML = `Resultado:`
   if(imc <= 18.5 ){
     resultado.innerHTML = `Seu IMC é ${imc}: Você está abaixo do peso.`
     console.log('passou1')
   }
   else if(imc >= 18.5 && imc <= 24.9 ){
    console.log('passou2')
     resultado.innerHTML = `Seu IMC é ${imc}:  Peso normal.`
   }
   else if(imc >= 25 && imc <= 29.9){
    console.log('passou3')
     resultado.innerHTML = `Seu IMC é ${imc}:  Sobrepeso.`
   }
   else if(imc >= 30 && imc <= 34.90 ){
     resultado.innerHTML = `Seu IMC é ${imc}:  Obesidade grau 1.`
   }
   else if(imc >= 35 && imc <= 39.90){
     resultado.innerHTML = `Seu IMC é ${imc}:  Obesidade grau 2.`
   }
   else if(imc >= 40 ){
     resultado.innerHTML = `Seu IMC é ${imc}:  Obesidade grau 3.`
   }
}

const form = document.querySelector('.form');
var resultado = document.getElementById('resultado');
form.addEventListener('submit', calcularIMC);
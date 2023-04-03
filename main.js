button = document.getElementById("btnCalcular");
button.addEventListener('click', calcular);

function calcular() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var imc = peso / (altura * altura)
    var d = document.getElementById('resultImc')
    d.innerHTML = `O IMC é: <strong> ${imc.toFixed(2)} </strong>` //fixando 2 casas decimais
}

/*if(imc < 18.5) {
    "Está abaixo do peso"
} else if (imc >= 18.6 && imc <= 24.9 ) {
    "Seu peso está normal"
} else if( imc >= 25 && imc <= 29.9 ) {
    "Você está acima do peso"
} else if( imc >= 30 && imc <= 34.9 ) {
    "Você está com obesidade tipo I"
} else if( imc >= 35 && imc <= 39.9 ) {
    "Você está com obesidade tipo II"
} else {
        "Você está com obesidade tipo III"
}*/
    
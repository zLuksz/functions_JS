// CALCULAR CIRCULO

function calculararea_circulo(){
    const pi = 3.14
    let raio = document.getElementById('raio').value;
    let area = (pi * raio* raio).toFixed(2);

    if (raio == '' || area == '') {
        document.getElementById('resultado').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('resultado').innerHTML = parseFloat(area);
    }
}

// CALCULAR AREA TRIANGULO

function area_hipotenusa(){
    let cateto1 = document.getElementById('cateto1').value;
    let cateto2 = document.getElementById('cateto2').value;
    let hipotenusa = Math.sqrt((cateto1 * cateto2) + (cateto1 * cateto2)).toFixed(2);

    if (cateto1 == '' || cateto2 == '') {
        document.getElementById('resultadohi').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('resultadohi').innerHTML = parseFloat(hipotenusa);
    }
}

// CONVERTER REAL EM DOLAR

function real_dolar() {
    let valor_cotacao = document.getElementById('valor_cotacao').value;
    let valor_reais = document.getElementById('valor_reais').value;
    let conversao = (valor_reais / valor_cotacao).toFixed(2);

    if (valor_cotacao == '' || valor_reais == '') {
        document.getElementById('resultadodolar').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('resultadodolar').innerHTML = parseFloat(conversao);
    }
}

// CONVERTER GRAUS CELCIUS EM FAHRENHEIT

function graus_celcius() {
    let graus_celcius = document.getElementById('graus_celcius').value;
    fahrenheit = (graus_celcius * 1.8 + 32).toFixed(2);

    if (graus_celcius == '') {
        document.getElementById('resultatempera').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('resultatempera').innerHTML = parseFloat(fahrenheit);
    }
}

// CALCULAR MEDIA ALUNOS

function media_alunos() {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    media_ponderada = ((nota1 + nota2 + nota3) / 3).toFixed(2)

    if (nota1 == '' || nota2 == '' || nota3 == '') {
        document.getElementById('resultadomedia').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('resultadomedia').innerHTML = parseInt(media_ponderada);
    }
}

// CALCULAR BASKARA

function calcularRaizes() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let delta = b ** 2 - 4 * a * c;

    if (delta == 0) {
        document.getElementById('semresultado').innerHTML = ('Não há raízes reais');
    } else {
      let raizDelta = Math.sqrt(delta);
      let x1 = (-b + raizDelta) / (2 * a).toFixed(2);
      let x2 = (-b - raizDelta) / (2 * a).toFixed(2);
      document.getElementById('resultadobaskaraposstivo').innerHTML = x1;
      document.getElementById('resultadobaskaranegativo').innerHTML = x2;
    }
}

// Conversão Velocidade

function conversaoVelocidade() {
    let kmhora = document.getElementById('kmhora').value;
    let mSegundo = (kmhora / 3.6).toFixed(2);

    if (kmhora == '') {
        document.getElementById('conversaokm').innerHTML = ('Por gentileza digitar um valor a cima.');
    } else {
        document.getElementById('conversaokm').innerHTML = parseFloat(mSegundo);
    }
}

// Calculo Retangulo

function calculararea_retangulo() {
    let base = document.getElementById('baseretang').value;
    let altura = document.getElementById('alturaretang').value;
    let resultado = parseFloat(base * altura);

    if (base == '' || altura == '') {
        document.getElementById('resultadoretang').innerHTML = ('Por gentileza digitar um valor a cima.')
    } else {
        document.getElementById('resultadoretang').innerHTML = parseFloat(resultado);
    }
}

// Area Triangulo

function area_triangulo() {
    let basetr = document.getElementById('basetriang').value;
    let alturatr = document.getElementById('alturatriang').value;
    let resultadotriang = (basetr * alturatr) / 2;

    if (basetr == '' || alturatr == '') {
        document.getElementById('resultadotriang').innerHTML = ('Por gentileza digitar um valor a cima.')
    } else {
        document.getElementById('resultadotriang').innerHTML = parseFloat(resultadotriang);
    }
}

// Calculadora Cientifica

function calculadorasomar() {
    let number1 = document.getElementById('numero1').value;
    let number2 = document.getElementById('numero2').value;
    let resultadosoma = (number1 + number2);

    if (number1 == '' || number2 == '') {
        document.getElementById('resultadocalculadora').innerHTML = ('Por gentileza digitar um valor a cima.')
    } else {
        document.getElementById('resultadocalculadora').innerHTML = parseInt(resultadosoma)
    }
}

function calculadorasubtrair() {
    let number1 = document.getElementById('numero1').value;
    let number2 = document.getElementById('numero2').value;
    let resultadosoma = (number1 - number2);

    if (number1 == '' || number2 == '') {
        document.getElementById('resultadocalculadora').innerHTML = ('Por gentileza digitar um valor a cima.')
    } else {
        document.getElementById('resultadocalculadora').innerHTML = parseInt(resultadosoma)
    }
}

function calculadoramultiplicar() {
    let number1 = document.getElementById('numero1').value;
    let number2 = document.getElementById('numero2').value;
    let resultadosoma = (number1 * number2);

    if (number1 == '' || number2 == '') {
        document.getElementById('resultadocalculadora').innerHTML = ('Por gentileza digitar um valor a cima.')
    } else {
        document.getElementById('resultadocalculadora').innerHTML = parseInt(resultadosoma)
    }
}

function calculadoradividir() {
    let number1 = parseInt(document.getElementById('numero1').value);
    let number2 = parseInt(document.getElementById('numero2').value);
    let resultadosoma = (number1 / number2);

    if (number1 == 0 || number2 == 0) {
        document.getElementById('resultadocalculadora').innerHTML = ('Não há divisão por 0');
    } else {
        document.getElementById('resultadocalculadora').innerHTML = resultadosoma
    }
}

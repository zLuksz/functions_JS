// CALCULAR CIRCULO

const pi = 3.14

function calculararea_circulo(){
    var raio = parseInt(document.getElementById('raio').value);
    let area = (pi * raio* raio).toFixed(2);
    document.getElementById('resultado').innerHTML = area;
}

// CALCULAR AREA TRIANGULO

function area_triangulo(){
    var cateto1 = parseInt(document.getElementById('cateto1').value);
    var cateto2 = parseInt(document.getElementById('cateto2').value);
    let hipotenusa = Math.sqrt((cateto1 * cateto2) + (cateto1 * cateto2)).toFixed(2);
    document.getElementById('resultadohi').innerHTML = hipotenusa;
}

// CONVERTER REAL EM DOLAR

function real_dolar() {
    var valor_cotacao = parseInt(document.getElementById('valor_cotacao').value);
    var valor_reais = parseInt(document.getElementById('valor_reais').value);
    let conversao = (valor_cotacao * valor_reais).toFixed(2);
    document.getElementById('resultadodolar').innerHTML = conversao;
}

// CONVERTER GRAUS CELCIUS EM FAHRENHEIT

function graus_celcius() {
    var graus_celcius = parseInt(document.getElementById('graus_celcius').value);
    fahrenheit = (graus_celcius * 1.8 + 32).toFixed(2);
    document.getElementById('resultatempera').innerHTML = fahrenheit;
}

// CALCULAR MEDIA ALUNOS

function media_alunos() {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    media_ponderada = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    document.getElementById('resultadomedia').innerHTML = media_ponderada;
}

// CALCULAR BASKARA

function calcularRaizes() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    let delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        document.getElementById('semresultado').innerHTML = ('Não há raízes reais');
    } else {
      let raizDelta = Math.sqrt(delta);
      let x1 = (-b + raizDelta) / (2 * a).toFixed(2);
      let x2 = (-b - raizDelta) / (2 * a).toFixed(2);
      document.getElementById('resultadobaskaraposstivo').innerHTML = x1;
      document.getElementById('resultadobaskaranegativo').innerHTML = x2;
    }
}
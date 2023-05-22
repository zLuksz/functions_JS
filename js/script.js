// CALCULAR CIRCULO

function calculararea_circulo(){
    const pi = 3.14
    let raio = parseInt(document.getElementById('raio').value);
    let area = (pi * raio* raio).toFixed(2);
    document.getElementById('resultado').innerHTML = area;
}

// CALCULAR AREA TRIANGULO

function area_hipotenusa(){
    let cateto1 = parseInt(document.getElementById('cateto1').value);
    let cateto2 = parseInt(document.getElementById('cateto2').value);
    let hipotenusa = Math.sqrt((cateto1 * cateto2) + (cateto1 * cateto2)).toFixed(2);
    document.getElementById('resultadohi').innerHTML = hipotenusa;
}

// CONVERTER REAL EM DOLAR

function real_dolar() {
    let valor_cotacao = parseInt(document.getElementById('valor_cotacao').value);
    let valor_reais = parseInt(document.getElementById('valor_reais').value);
    let conversao = (valor_reais / valor_cotacao).toFixed(2);
    document.getElementById('resultadodolar').innerHTML = conversao;
}

// CONVERTER GRAUS CELCIUS EM FAHRENHEIT

function graus_celcius() {
    let graus_celcius = parseInt(document.getElementById('graus_celcius').value);
    fahrenheit = (graus_celcius * 1.8 + 32).toFixed(2);
    document.getElementById('resultatempera').innerHTML = fahrenheit;
}

// CALCULAR MEDIA ALUNOS

function media_alunos() {
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    media_ponderada = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    document.getElementById('resultadomedia').innerHTML = media_ponderada;
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
    document.getElementById('conversaokm').innerHTML = mSegundo;
}

// Calculo Retangulo

function calculararea_retangulo() {
    let base = document.getElementById('baseretang').value;
    let altura = document.getElementById('alturaretang').value;
    let resultado = parseFloat(base * altura);
    document.getElementById('resultadoretang').innerHTML = resultado;
}

// Area Triangulo

function area_triangulo() {
    let basetr = document.getElementById('basetriang').value;
    let alturatr = document.getElementById('alturatriang').value;
    let resultadotriang = (basetr * alturatr) / 2;
    document.getElementById('resultadotriang').innerHTML = resultadotriang;
}
function soma(n1, n2) {
    //return n1 + n2;
    alert(n1 + n2);
}
function subtracao(n1, n2) {
    //return n1 - n2;
    alert(n1 - n2);
}
function multiplicacao(n1, n2) {
    //return n1 * n2;
    alert(n1 * n2);
}
function divisao(n1 ,n2) {
    //return n1 / n2;
    alert(n1 / n2);
}

function mostrarnome() {
    let nome = prompt('Digite Seu Nome:');
    alert('Hello, ' + nome);
}

function retangulo(base, altura) {
    alert(base * altura);
}
function areacirculo(pi, raio) {
    alert(pi*(raio*raio));
}

// CALCULAR CIRCULO

const pi = 3.14

function calculararea_circulo(){
    let raio = prompt('Informe o raio: ');
    let area = (pi * raio* raio);
    alert('A area do circulo e: ' + area);
}

// CALCULAR AREA TRIANGULO

function area_triangulo(){
    let cateto1 = prompt('Digite o valor 1: ');
    let cateto2 = prompt('Digite o valor 2: ');
    let hipotenusa = Math.sqrt((cateto1 * cateto2) + (cateto1 * cateto2));
    alert('Sua Hipotenusa é: ' + hipotenusa);
}

// CONVERTER REAL EM DOLAR

function real_dolar() {
    let valor_cotacao = 4.94
    let valor_reais = prompt('Informe o valor a ser convertido: ');
    let conversao = valor_cotacao * valor_reais;
    alert('O valor em dolares é: ' + conversao);
}

// CONVERTER GRAUS CELCIUS EM FAHRENHEIT

function graus_celcius() {
    let graus_celcius = prompt('Insira A Temperatura De Hoje: ');
    fahrenheit = (graus_celcius * 1.8 + 32);
    alert('Temperatura Em Fahrenheit: ' + fahrenheit);
}

// CALCULAR MEDIA ALUNOS

function media_alunos() {
    let nota1 = parseFloat(prompt('1° Nota: '));
    let nota2 = parseFloat(prompt('2° Nota: '));
    let nota3 = parseFloat(prompt('3° Nota: '));
    media_ponderada = (nota1 + nota2 + nota3) / 3
    alert('A Média Aritimetica é: ' + media_ponderada);
}

// CALCULAR BASKARA

function calcularRaizes() {
    let a = parseFloat(prompt('Digite 1° Valor: '));
    let b = parseFloat(prompt('Digite 2° Valor: '));
    let c = parseFloat(prompt('Digite 3° Valor: '));
    let delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
      alert('Não há raízes reais');
    } else {
      let raizDelta = Math.sqrt(delta);
      let x1 = (-b + raizDelta) / (2 * a);
      let x2 = (-b - raizDelta) / (2 * a);
      alert('Baskara Positiva é: ' + x1)
      alert('Baskara Negativa é: ' + x2)
    }
}
//Este es el código del cuadrado

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}
 
//Este es el código del Triangulo
function perimetroTriangulo (base, ladoTriangulo1, ladoTriangulo2){
    return base + ladoTriangulo1 + ladoTriangulo2;
}

function areaTriangulo (base, altura){
    return base * altura
}


//Este es el código del circulo
const PI = Math.PI;

function diametroCirculo (radio){
    return radio * 2
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
 
function areaCirculo (radio, PI){
    return radio * radio * PI;
}


//desde aqui tomo datos formulario
//para el Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = Number(input.value);
    const perimetro = perimetroCuadrado(valor);
    resultadoCuadrado.innerHTML = 'El perimetro del cuadrado es: ' + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = Number(input.value);
    const area = areaCuadrado(valor);
    resultadoCuadrado.innerHTML = 'El área del cuadrado es: ' + area;

}


//para el Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLadoA");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("inputTrianguloLadoB");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("inputTrianguloBase");
    const base = Number(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    resultadoTriangulo.innerHTML = 'El perímetro del triángulo es: ' + perimetro.toFixed(2);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloBase");
    const base = Number(input1.value);
    const input2 = document.getElementById("inputTrianguloAltura");
    const altura = Number(input2.value);
    const area = areaTriangulo(base, altura);
    resultadoTriangulo.innerHTML = 'El área del triángulo es: ' + area.toFixed(2);

}

//para el Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const valor = Number(input.value);
    const perimetro = perimetroCirculo(valor);
    resultadoCirculo.innerHTML = 'El perímetro del circulo es: ' + perimetro.toFixed(2);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const valor = Number(input.value);
    const PI = Math.PI;
    const area = areaCirculo(valor, PI);
    resultadoCirculo.innerHTML = 'El área del circulo es: ' + area.toFixed(2);

}   
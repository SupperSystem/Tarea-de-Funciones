// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
    function despedir() {
        return "¡Adios!";
    } console.log(despedir());

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
    function multiplicarPorDos(numero){
        let resultadoMultiplicacion = numero * 2;
        console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);
    } multiplicarPorDos(700);

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
    function esMayorDeEdad(edad) {
        if (edad >= 18){
            return "Eres mayor de edad (true)";
        } else {
            return "Eres menor de edad (false)";
        }
    } 
    console.log(esMayorDeEdad(17));

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
    function multiplicar(number1, number2) {
        let mulitiplicacionResultado = number1 * number2;
        console.log("El resultado del producto es: " + mulitiplicacionResultado);
    }
    multiplicar(4, 8);

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
    function saludarPersonalizado(name, lastName) {
        console.log(`¡Hola ${name} ${lastName}!`);
    }
    saludarPersonalizado("Eduardo", "Jara");

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
    function calcularPotencia(base1, exponent) {
        let pow = base1 ** exponent;
        console.log("El resultado de la potencia es: " + pow)
    }
    calcularPotencia(8, 4)

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
    function restar(minusNumber, minusNumber2) {
        let minusresult = minusNumber - minusNumber2;
        console.log("La diferencia de los números dados es: " + minusresult);
    }
    restar(90, 80);

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
    function dividir(divisionNumber, divisionNumber2){
        let divisionResult = divisionNumber / divisionNumber2;
        console.log("El resultado de la división es: " + divisionResult);
    }
    dividir(400, 80);

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    // Tu código aquí
    const multiplicarDOS = function (numberMultiplication, numberMultiplication2) {
        return "El resultado de la multiplicación dada, es: " + numberMultiplication * numberMultiplication2;
    }
    console.log(multiplicarDOS(80, 50));

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
    const saludar = function (name2) {
        return "¡Hola, " + name2 + "!";
    }
    console.log(saludar("Eduardo"));

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí
    const esPar = function (numberTesting) {
        if (numberTesting % 2 === 0){
            return "El Numero es par y es: " + true;
        } else {
            return "El Número es impar y es: " + false;
        }
    }
    console.log(esPar(8));
// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    // Tu código aquí
    const multiplicarFlecha = (a, b) => {
        return "La multiplicación de la función flecha de los valores dados, es: " + a * b;
    }
    console.log(multiplicarFlecha(4, 70))

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
    const saludarFlecha = (firstName) => {
        return "Hola " + firstName;
    }
    console.log(saludarFlecha("Jennifer"));

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {
    // Tu código aquí
    let pi = Math.PI;
    let area;
    area = pi * (radio**2);
    return "El área es: " + area + " cm2"
};
console.log(calcularArea(4));

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    // Tu código aquí
    if (n === 1) {
        return 1
    }
    return n + suma(n - 1);
}
console.log("La suma de 'n' números es: " + suma(3));

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    // Tu código aquí
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
console.log("La sucesion de Fibonacci es: " + fibonacci(20));

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    // Tu código aquí
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log("El resultado del factorial es:", factorial(8));

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    // Tu código aquí
    if (exponente == 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1)
    }
}
console.log("El resultado de la recursion de la potencia, es:", potencia(2, 9));

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
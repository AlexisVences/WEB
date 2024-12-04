// Ejercicio 1: Número Par
function esPar() {
    let num = document.getElementById('numeroPar').value;
    if (num % 2 === 0) {
        document.getElementById('resultadoPar').innerText = "El número es par.";
    } else {
        document.getElementById('resultadoPar').innerText = "El número es impar.";
    }
}

// Ejercicio 2: Tabla de Multiplicar
function tablaMultiplicar() {
    let num = document.getElementById('numeroTabla').value;
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById('resultadoTabla').innerHTML = resultado;
}

// Ejercicio 3: Producto mediante Sumas
function productoSumas() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    let producto = 0;
    for (let i = 0; i < num2; i++) {
        producto += num1;
    }
    document.getElementById('resultadoProducto').innerText = `El producto es: ${producto}`;
}

// Ejercicio 4: Mayor Valor
function mayorValor() {
    let numeros = document.getElementById('numerosSecuencia').value.split(',').map(Number);
    let maxValor = Math.max(...numeros);
    let posicion = numeros.indexOf(maxValor) + 1;
    document.getElementById('resultadoMayorValor').innerText = `El mayor valor es ${maxValor} en la posición ${posicion}.`;
}

// Ejercicio 5: Suma de Vectores
function sumarVectores() {
    let A = document.getElementById('vectorA').value.split(',').map(Number);
    let B = document.getElementById('vectorB').value.split(',').map(Number);
    let C = A.map((num, index) => num + B[index]);
    document.getElementById('resultadoVectores').innerText = `El vector resultante C es: ${C}`;
}

// Ejercicio 6: Calcular la Media
function calcularMedia() {
    let numeros = document.getElementById('numerosMedia').value.split(',').map(Number);
    let suma = numeros.reduce((a, b) => a + b, 0);
    let media = suma / numeros.length;
    document.getElementById('resultadoMedia').innerText = `La media es: ${media}`;
}

// Ejercicio 7: Ordenar Números
function ordenarNumeros() {
    let numeros = document.getElementById('numerosOrden').value.split(',').map(Number);
    numeros.sort((a, b) => a - b);
    document.getElementById('resultadoOrden').innerText = `Los números ordenados son: ${numeros}`;
}

// Ejercicio 8: Procesar Textos
function procesarTextos() {
    let textos = document.getElementById('textosSecuencia').value.split(',');
    let resultado = '';
    textos.forEach(texto => {
        resultado += `Texto: ${texto}<br>`;
        resultado += `Longitud: ${texto.length}<br>`;
        resultado += `Mayúsculas: ${texto.toUpperCase()}<br>`;
        resultado += `Minúsculas: ${texto.toLowerCase()}<br><br>`;
    });
    document.getElementById('resultadoTextos').innerHTML = resultado;
}

function normalizarTexto(texto) {
    return texto
        .normalize('NFD') // Descompone caracteres con tilde
        .replace(/[\u0300-\u036f]/g, '') // Elimina tildes
        .trim() // Elimina espacios en blanco
        .toUpperCase(); // Convierte a mayúsculas
}

// Ejercicio Generador de curp
function generarCurp() {
    let Nombre = normalizarTexto(document.getElementById('Nombre').value);
    let apellidoPaterno = normalizarTexto(document.getElementById('aPaterno').value);
    let apellidoMaterno = normalizarTexto(document.getElementById('aMaterno').value);
    let fechaDeNacimiento = document.getElementById('fechaNacimiento').value; // Formato YYYY-MM-DD
    let Sexo = normalizarTexto(document.getElementById('Sexo').value);
    let Entidad = normalizarTexto(document.getElementById('Entidad').value);

    // Mapa de entidades y sus abreviaturas
    const entidades = {
        "AGUASCALIENTES": "AS",
        "BAJACALIFORNIA": "BC",
        "BAJACALIFORNIASUR": "BS",
        "CAMPECHE": "CC",
        "COAHUILADEZARAGOZA": "CL",
        "COLIMA": "CM",
        "CHIAPAS": "CS",
        "CHIHUAHUA": "CH",
        "CIUDADDEMEXICO": "DF",
        "DURANGO": "DG",
        "GUANAJUATO": "GT",
        "GUERRERO": "GR",
        "HIDALGO": "HG",
        "JALISCO": "JC",
        "MEXICO": "MC",
        "MICHOACÁNDEOCAMPO": "MN",
        "MORELOS": "MS",
        "NAYARIT": "NT",
        "NUEVOLEON": "NL",
        "OAXACA": "OC",
        "PUEBLA": "PL",
        "QUERETARO": "QT",
        "QUINTANAROO": "QR",
        "SANLUISPOTOSI": "SP",
        "SINALOA": "SL",
        "SONORA": "SR",
        "TABASCO": "TC",
        "TAMAULIPAS": "TS",
        "TLAXCALA": "TL",
        "VERACRUZ": "VZ",
        "YUCATÁN": "YN",
        "ZACATECAS": "ZS",
        "NACIDOENELEXTRANJERO": "NE"
    };

    let anio = fechaDeNacimiento.slice(2, 4);
    let mes = fechaDeNacimiento.slice(5, 7);
    let dia = fechaDeNacimiento.slice(8, 10);

    let curp = apellidoPaterno.charAt(0);
    let vocalApellidoPaterno = apellidoPaterno.slice(1).match(/[AEIOU]/);
    curp += vocalApellidoPaterno ? vocalApellidoPaterno[0] : 'X';
    curp += apellidoMaterno.charAt(0) || 'X';
    curp += Nombre.charAt(0);
    
    curp += anio + mes + dia;

    // Asignar la abreviatura de la entidad
    let entidadAbreviatura = entidades[Entidad] || 'NE'; // NE por defecto si no se encuentra la entidad
    curp += Sexo.charAt(0) + entidadAbreviatura;

    let consonantePaterno = apellidoPaterno.slice(1).match(/[^AEIOU]/);
    curp += consonantePaterno ? consonantePaterno[0] : 'X';

    let consonanteMaterno = apellidoMaterno.slice(1).match(/[^AEIOU]/);
    curp += consonanteMaterno ? consonanteMaterno[0] : 'X';

    let consonanteNombre = Nombre.slice(1).match(/[^AEIOU]/);
    curp += consonanteNombre ? consonanteNombre[0] : 'X';

    // Mostrar el CURP generado
    document.getElementById('resultadoCurp').innerText = `El CURP es: ${curp}`;
}

// *************************************************************************
//Funciones para evaluar expresiones regulares
function evaluaER(expresion, cadena) {
    var expresionRegular = new RegExp(expresion);
    if (cadena.match(expresionRegular)) {
        document.getElementById('resultadoExpresionRegular').innerText = 'Muy bien, tu contraseña cumple como expresion regular '
    } else {
        document.getElementById('resultadoExpresionRegular').innerText = 'Verifica nuevamente tu contraseña'
    }
}

function verificarExpresion() {
    const expresion = "^(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$"; // Expresión para validar contraseña
    const cadena = document.getElementById("inputCadena").value;
    evaluaER(expresion, cadena);
}
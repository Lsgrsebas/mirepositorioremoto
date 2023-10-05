//alert("Hola este es mi Javascript");

//let nombre = "LUIS GONZALEZ";

//var nombre1 = "LUIS";

//const nombre2 = "LUIS";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);


// CONDICIONALES



let contenidoTitulo = "LUIS GONZALEZ"; // se crea variable - en la comillas se escribe lo que se quiere mostrar en el encabezado

let titulo = document.querySelector(".ENC"); // se crea variable titulo, la variable es igual al texto dentro de la clase ENC = Luis Gonzalez
titulo.innerHTML = contenidoTitulo; // lo leido con el query en la variable "titulo", lo reemplaza por la variable "contenidoTitulo"

let textoTitulo = titulo.innerText; // se crea la variable textoTitulo que es igual a el titulo inner -obtenido
console.log(textoTitulo); // se imprime en la consola del navegador de javascript el titulo que se cambia en la primer variable


if(textoTitulo == "fgfgfgf") {  // lee la tercer variable "textoTitulo" si es igual al texto que colocamos entonces lo cambia
   titulo.innerHTML = "Otro";   // si es diferente muestra mensaje en la consola de javascript " no se cumple"
}

else {
    console.log("no se cumple")
}


////////////////////////////////////////////


let acerca = "ACERCA DE MI"; // se crea variable - en la comillas se escribe lo que se quiere mostrar-cambiar en la parte ACERCA DE MI

let tituloAcerca = document.querySelector(".ACERCA"); // se crea variable tituloAcerca, la variable es igual al texto dentro de la clase ACERCA = Acerca de mi
tituloAcerca.innerHTML = acerca; // lo leido con el query en la variable "tituloAcerca", lo reemplaza por la variable "acerca"

let texto = tituloAcerca.innerText; // se crea la variable texto que es igual a el titulo inner -obtenido
console.log(texto); // se imprime en la consola del navegador de javascript el titulo que se cambia en la primer variable


if(texto == "ACERCA DE") {  // lee la tercer variable "textoTitulo" si es igual al texto que colocamos entonces lo cambia
   tituloAcerca.innerHTML = "Otro";   // si es diferente muestra mensaje en la consola de javascript " no se cumple"
}

else {
    console.log("no se cumple")
}


/////////////////////////////

let nomb = 'Julian';
let ciudad = "Cali";
let ambito = "Cocina";

let parrafo = document.querySelector(".AD");

/* este ejercicio solo funciono colocando los caracteres del parrafo dentro del simbolo "`", con ' y "" no funciona*/

/*function CambiarTexto(nomb, ciudad, ambito) {
    let contenido = `Mi nombre es ${nomb} , vivo en la ciudad de ${ciudad} y trabajo en el ambito de la ${ambito}.`;

    return contenido;   
}

parrafo.innerText = CambiarTexto(nomb, ciudad, ambito);*/

function suma(a, b) {
    return a+b;
}
console.log(suma(3,7));

const imprimir = (texto) => {
    console.log(texto);
}
imprimir("hola mundo");
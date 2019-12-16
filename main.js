
    alert('Hello') /* Ejemplo de alerta en JS */

    var nombre = "Eduardo Vidal"; /* Variables */
    var altura = 170;
/*
   var concatenacion = nombre + " " + altura;
   var datos = document.getElementById("datos");
   datos.innerHTML = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> Mido : ${altura} </h3>
    `;

    if(altura >= 190){     Controlador condicional 
        datos.innerHTML +=`<h1>Eres una persona Alta </h1>`
    }else{
        datos.innerHTML +=`<h1>Eres una persona Bajita </h1>`
    }

for(var i = 2010 ; i <= 2010; i++){  Ejemplo de Bucle 
    //bloque de instruciones 
    datos.innerHTML += "<h2> Estamos en el año "+i
}*/

function muestraminombre(nombre, altura){ /* Ejemplo de Funcion */
    var misdatos = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> Mido : ${altura} </h3>
    `;
    return misdatos;
}

function imprimir () {
    var datos = document.getElementById("datos");
   datos.innerHTML =  muestraminombre("Eduardo Vidal" , 170);
}

imprimir();

var nombres = ['Victor','Eduardo','Andres'];
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>')
}
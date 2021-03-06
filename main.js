
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

/* Objetos JSON con metodo */
var coche = {
    modelo: 'Audi TT',
    maxima: 500,
    antiguedad: 2019,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    }
};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos(); /* Estos datos se ven por consola del navegador */


/* Promesa */

var saludar = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        let saludo = " Hola chaval , soy un saludo dentro de una promesa";
        if(saludo){
            resolve(saludo);
    
        }else{
            reject("No hay saludo disponible");
        }
    }, 2000)

});

saludar.then(resultado =>{
    alert(resultado);
}
)
.catch(err =>{
    alert(err);
    
});



class Coche{ /* Ejrmplo de clases */
    constructor(modelo, velocidad, antiguedad){
        this.modelo= modelo;
        this.velocidad= velocidad;
        this.antiguedad= antiguedad;
    }

    aumentarvelocidad(){
        this.velocidad +=1;
    }
    reducirvelocidad(){
        this.velocidad -=1;
    }
}

var coche1 = new Coche ("BMW", 240, 2018);
var coche2 = new Coche ("Audio", 270, 2015);
var coche3 = new Coche ("Mercedes", 225, 2010);
var coche4 = new Coche ("BMW", 200, 2018);

document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>")
coche1.aumentarvelocidad();
coche1.aumentarvelocidad();
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>")
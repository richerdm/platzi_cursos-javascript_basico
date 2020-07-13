//Generación del objeto miAuto con sus propiedades
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    //metodo del objeto
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

//Acceder a una propiedad de un objeto
miAuto.marca;
miAuto.modelo;
miAuto.annio;

//Acceder al metodo del objeto
miAuto.detalleDelAuto();







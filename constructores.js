//Función constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Nuevo objeto instanciado
var autoNuevo = new auto("Tesla", "Model 3", 2020);

//Nuevo objeto instanciado - 2
var autoNuevo2 = new auto("Tesla", "Model X", 2018);

//Nuevo objeto instanciado - 3
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
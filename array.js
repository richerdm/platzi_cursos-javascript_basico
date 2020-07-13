//Arreglo de frutas
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

//Imprime el arreglo de frutas
console.log(frutas);

//Longitud del arreglo
console.log(frutas.length);

//Seleccionar un elemento del arreglo
console.log(frutas[0]);

//Agregar frutas al arreglo
var masFrutas = frutas.push("Uvas");

//Eliminar ultimo elementos el arreglo
var ultimo = frutas.pop();

//Agregar frutas al inicio del arreglo
var nuevaLongitud = frutas.unshift("Uvas");

//Eliminar elemento del inicio del arreglo
var borrarFruta = frutas.shift("Manzana");

//Posición de los elementos
var posicion = frutas.indexOf("Cereza");

//Arreglo de objetos
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre:"TV", costo: 2500 },
    { nombre:"Libro", costo: 320 },
    { nombre:"Celular", costo: 10000 },
    { nombre:"Portatil", costo: 20000 },
    { nombre:"Teclado", costo: 2500 },
    { nombre:"Audifonos", costo: 1700 },
];

//Filtrado de articulos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//Filtrado de articulos con map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//Uso de find() --> Encuentra un articulo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Portatil"
});

//Uso de forEach() --> Muestra cada articulo por propiedad
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Uso de some() --> Hace una validación de verdadero o falso
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
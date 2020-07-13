//Arreglo de estudiantes
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//Función saludar a los estudiantes
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//Bucle while
while(estudiantes.length > 0){
    console.log(estudiantes);
    //El elemento shift va ir sacando un elemento del arreglo
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

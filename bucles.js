//Arreglo de estudiantes
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//tarea de saludar estudiantes
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//Bucle que recorra todo el arreglo de estudiantes
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Bucle for / of
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
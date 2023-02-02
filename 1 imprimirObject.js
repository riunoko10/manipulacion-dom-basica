informacion = {
    nombre: "Miguel Andres",
    apellidos: "Castañeda Sarmiento",
    estudios: {
        primaria: "Isabel II",
        segundaria: "La Amistad",
        universidad: "Uniminuto"
    },
    edad: 36,
    profesion: "Desarrollador"

}


function imprimirElementos(obj){
    const arr = Object.values(obj);
    for(element of arr){
        console.log(element);
    }
}

function imprimirElementos2(obj){
    const arr = Object.values(obj);
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}


tiposSubscripciones = {
    free : "solo puedes tomar los cursos gratis",
    basic : "Puedes tomar casi todos los cursos de Platzi por un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi por un año",
    experduo: "Puedes tomar TODOS los cursos de Platzi por un año"
}

function validarSubcripcion(subs){
    const arr = Object.keys(tiposSubscripciones);
    const arr_v = Object.values(tiposSubscripciones);
    for(let i=0; i < arr.length; i++){
        if(arr[i] == subs){
            console.log(arr_v[i])
            return
        }
        console.warn('Ese tipo de subscripcion no existe')
    }
}
function validarSubcripcion2(subs){
    if(tiposSubscripciones[subs]){
        console.log(tiposSubscripciones[subs])
        return
    }
    console.warn('Ese tipo de Subscripcion no existe')

}
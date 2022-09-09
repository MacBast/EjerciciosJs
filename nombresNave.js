let codigos=[
     "ARQ2555: Sara Bel-Sun",
     "ARQ2556: Nodin Chavdri",
     "ARQ2557: Finn",
     "ARQ2558: Chewie Chewbacca",
     ]
//Metodo Tradicional 
     console.log("Forma tradicional")
     console.log("Los nombres de los pilotos son los siguientes:");
     codigos.forEach(function(codigo) {
          let nombre = codigo.split(":")[1] //separando nombre de codigo
          return console.log(nombre);
     })

//forma Flecha
     console.log("Forma Flecha")
     console.log("Los nombres de los pilotos son los siguientes:");
     codigos.forEach(codigo=>console.log(codigo.split(":")[1]));


/*
//forma con un solo dato
Funcion Tradicional

     function obtenerNombre(codigo) {
          let result = codigo.split(":")[1]
          return result
     }

     let imprimir= obtenerNombre("ARQ2555: Sara Bel-Sun")
     console.log(`Los nombres son los siguientes ${imprimir}`)
------------
Funcion Flecha
     let obtenerNombre = (codigo=>codigo.split(":")[1]) 
     let imprimir= obtenerNombre("ARQ2555: Sara Bel-Sun")
     console.log(`Los nombres son los siguientes33 ${imprimir}`)

*/



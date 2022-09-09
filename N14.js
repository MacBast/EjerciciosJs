const readline = require('readline');

let opcion = readline.createInterface({
     input: process.stdin,
     output: process.stdout
})

opcion.question('Que deseas ejecutar, Flecha o Tradicional? ', function(respuesta){
     let min = respuesta.toLowerCase().trim();
     if(min == 'tradicional'){
          // funcion tradicional
          function calculardistancia(x1, x2, y1, y2) {
               let potencia1 = (x2 - x1)
               let potencia2 = (y2 - y1)
               let raiz = Math.pow(potencia1, 2) + Math.pow(potencia2, 2)
               let resultado = Math.sqrt(raiz)
               return resultado
          }

          let result = calculardistancia(0, 0, 12, 0)
          console.log(`la distancia calculada de la forma Tradicional fue: ${result} Kilometros`)
     }else if(min=="flecha"){
          //Forma en funcion de flecha
          console.log("Opcion de Funcion de Flecha");
          let funcionFlecha_CalDis = (x1, x2, y1, y2) => (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
          let resulF = funcionFlecha_CalDis(0, 0, 12, 0);
          console.log(`la distancia calculada en la forma Flecha fue: ${resulF} flecharometras`);
     }else{
          console.log("Opcion no Valida");
     }

     opcion.close();
})






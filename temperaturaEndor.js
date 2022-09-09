//Funcion Tradicional

function promediolunar(tempAlta, tempBaja) {
     let promedio = (tempAlta+tempBaja)/2
     return (promedio)
}

let tempDia=promediolunar(23,-80)
console.log(`El promedio lunar es de ${tempDia}`)

//funcion Flecha
     let promedioLunar = (tempAlta, tempBaja) => ((tempAlta + tempBaja) / 2)
     let imprimir = promedioLunar(32,12)
     console.log(`El promedio lunar es de ${imprimir}`)
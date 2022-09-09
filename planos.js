//funcion tradicional

function filtrarPlanos(fplanos, arrancarNave) {

     let filto =
          fplanos.filter(function (plano) {
               return (plano >= 1 && plano <= 10)
          })
     arrancarNave(filto)
}

let planos = [1,3]

filtrarPlanos(planos, function (filtro) {
     let cuenta = filtro.length
     if (cuenta > 0) {
          console.log("Arranque papito metale chancleta.")
     } else {
          console.log("Demalas papi esos planos no son.")
     }
})

//forma flecha

let FFplanos=(planos,arrancarnave)=>{
     let Ffiltro=planos.filter((plano)=>plano>=1 && plano <= 10)
     arrancarnave(Ffiltro)
}

let Fplanos=[1,2]

FFplanos(Fplanos,(filtroF)=>{
     let contar= filtroF.length
     if (contar > 0) {
          console.log("Arranque papito metale chancleta flecha.");
     } else {
          console.log("Demalas papi esos planos no son flecha.")
     }
})

//funcion tradiconal
function crearaprendiz(nombre,planeta,edad,estatura, clasificarDatosAprendiz){
     
     let datosAprendiz={
          nombre: nombre,
          planeta: planeta,
          edad: edad,
          estatura: estatura 
     }
     clasificarDatosAprendiz(datosAprendiz)

}     

crearaprendiz("daniel","c-53",23,1.70,function(aprendiz){
     if (aprendiz.edad>=15) {
          console.log("Vas pa clase de manejo de sable")
     }else{
          console.log("Vas pa clase de manejo de fuerza")
     }
})


//funcion de flechas
//ca Crear aprendiz
let funCA = (nombre, planeta, edad, estatura, clasificarDatosAprendiz ) =>{
     let datosAprendiz = {
          nombre: nombre,
          planeta: planeta,
          edad: edad,
          estatura: estatura
     }
     clasificarDatosAprendiz(datosAprendiz)
}


funCA("daniel", "c-53", 23, 1.70, (aprendizF)=>{
     if (aprendizF.edad>=15) {
          console.log("Vas pa clase de manejo de sable con funcion de felcha")
     }else{
          console.log("Vas pa clase de manejo de fuerza con funcion de flecha")
     }
} )
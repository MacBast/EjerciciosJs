//Funcion tradicional
const S = 3500000 //Salario
const C = 1500000 //comision
const IMP = 0.05 //impuestos
let clv = 5  //cantidad de licencias vendidas

function salarioNeto(){
     let impp = ( clv * C )* IMP
     let subtotal = (clv * C)-impp
     let SN = subtotal + S
     return SN
}

let pagar = salarioNeto();
console.log(`El salario neto a pagar es de: ${pagar}`)

//funcion Flecha
let salarioNetoF = () =>(((clv * C) - (clv * C) * IMP) + S)

//RF respuesta funcion Flecha 
let pagarF = salarioNetoF();
console.log(`RF: El salario neto a pagar es de: ${pagar}`)
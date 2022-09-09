//cvp= cantidad de veces que se hara push al array sables en este caso numeros aletoreos entre 0 y 20 
let cvp = ()=> (Math.floor(Math.random() * 20))
let ctsa = cvp();

//Seleccion energia de sables(es) entre -100 y 100
let es = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))

let sables=[];

for (let i = 0; i < ctsa; i++) {
     let ves = es(-100, 100); //valor energia sables
     sables.push(ves);
}

function respuesta() {
     let filtro = sables.filter(numero => numero < 0)
     return filtro
}
let rr=respuesta()


//encontrando sables defectuosos forma flecha
let filtro=sables.filter(numeroF=>numeroF<0)

console.log(`funcion tradicional`);
console.log(`La cantidad escogida aleatoreamente es de ${ctsa},Este es el tamaño del array sables ${sables.length} `);
console.log(`Estos sus valores ${sables}, Esta es la cantidad de sables defectuosos: ${rr.length}`);
console.log(`Esta es la cantidad de sables defectuosos: ${filtro.length}, Y estos son sus valores ${filtro}`);


console.log(`funcion Flecha`);
console.log(`La cantidad escogida aleatoreamente es de ${ctsa}, Este es el tamaño del array sables ${sables.length}`);
console.log(`Estos sus valores ${sables}`);
console.log(`Esta es la cantidad de sables defectuosos: ${filtro.length}, Y estos son sus valores ${filtro}`);



// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const nombreDeUsers = users.map((usuario)=>{
    return usuario.name
})
console.log(nombreDeUsers)

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

//let lista = users2.filter((elemento)=>{// igual que la línea 25, solo que con arrow function =====>>>>
let lista = users2.filter(function(elemento){
    if(elemento.name[0]==="A"){
        elemento.name= "Anacleto"
    }
    return elemento.name
})
console.log(lista)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let lista2 = cities.filter(function(elemento){
    if(elemento.isVisited== true){
        
        elemento.name= elemento.name + " ,Visitado"
    }
    return elemento.name
})
console.log(lista2)
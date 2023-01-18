'use strict'
// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let mayorEdad = ages.filter((edad)=>{
    return edad >=18;
})
console.log('estos son mayores de edad ' + mayorEdad)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const esPar = ages2.filter(function(edad){
    return edad %2==0
})
console.log('Estos números son par ' +esPar);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]
const newStreamers = streamers.filter(function(propiedad){
    return propiedad.gameMorePlayed==='League of Legends'
})
	console.log(newStreamers)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const newStreamers2 = streamers2.filter((propiedad)=>{
    return propiedad.name.includes('u');
})
 console.log(newStreamers2)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
let newStreamers3 = streamers2.filter(function(propiedad){
    return propiedad.gameMorePlayed.includes('Legends')  
})

for(let i = 0; i<newStreamers3.length; i++){
	// console.log(i)
    if( newStreamers3[i].age > 35){
            //  console.log(newStreamers3[i].age)
		newStreamers3[i].gameMorePlayed = newStreamers3[i].gameMorePlayed.toUpperCase()
      }
}
 console.log(newStreamers3)

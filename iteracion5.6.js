// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

//nota, el 5.6 está comentado para que funcione el 5.7 en el mismo archivo. Solo hay que dejar uno de los dos comentado y 
// el otro sin comentar. Los dos funcionan bien.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// function filtrarDatos(event){
// 	const valor = event.target.value;
//     // console.log(valor)
// 	let filtrados = streamers.filter(streamer => streamer.name.toLowerCase().includes(valor.toLowerCase()));
//     console.log(filtrados); 
// }
// const input = document.querySelector('input')
// input.addEventListener('keyup', filtrarDatos);
// // input.removeEventListener('keydown', filtrarDatos)


//5.7
const filtrarDatos2 = () =>{
    let inputValue = document.querySelector('input').value;
	let filtrados2 = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue.toLowerCase()));
	console.log(filtrados2);
}
const boton = document.querySelector('[data-function="toShowFilterStreamers"]');
console.log(boton)
boton.addEventListener('click', filtrarDatos2)
// // 1. Seleccionamos la card
// const player = document.getElementById("reproductor")

// // almacenamos todas las card (div)que tengan en el atributo class la clase card
// const tarjetas = document.querySelectorAll(".card")

// // recorremos cada una de las tarjetas almacenadas previamente y los asignamos el evento
// tarjetas.forEach(tarjeta => {
//     tarjeta.addEventListener("click", function(){
//         //  Obtenemos la url de la cancion que se almacena en el atributo data-set de la card seleccionada
//         const rutaMusica = this.dataset.url
//         // Enviamos la ruta de la card seleccionada al atributo src de la etiqueta audio
//         player.src = rutaMusica
//         // al dar clic sobre la card tambien activamos la reproduccion de la pista
//         player.play()
//     });
// });

window.data = {

//     show:(data, type) => {

//         const imprimir = (nombre,imagen,id) =>{

//         const pokemons = document.getElementById("pokemons");

//         let nombrePokemon = `<div class="divPokemon"><figure class="imgPokemon"><img src="${imagen}"></figure>
//                             <p class="namePokemon"> ${nombre}</p><br><p class="idPokemon"> Número: ${num}</p></div>`;

//         pokemons.insertAdjacentHTML("beforeend",nombrePokemon);



//         };
//     data.forEach(element =>{

//         let nombre = element.name;
//         let imagen = element.img;
//         let num = element.num;
//         imprimir(nombre, imagen, num);

//      })
//     return imprimir;



// },

filterPokemon:(dataPokemon,types) =>{

    const arrayPokemon = dataPokemon;
    const arrayFilter = arrayPokemon.filter(dataPokemon => dataPokemon.type.includes(types));
    
    return arrayFilter;

}

    

}

// imprim: (tipo) => {
//   let arrNew = [];


// tipo.forEach(element => {
//   if(element.type[0] === 'Water' || element.type[1] === 'Water' || element.type[2] === 'Water'){
//     arrNew.push(element)
//   }



// })

// console.log(arrNew)
// return arrNew
// },

// impri: (tipo) => {
//   let arrNew = [];

// tipo.forEach(element => {
//   if(element.type[0] === 'Fire' || element.type[1] === 'Fire' || element.type[2] === 'Fire'){
//     arrNew.push(element)
//   }

// })


// return arrNew

// },

// impr: (tipo) => {
//   const arrNew = [];

// tipo.forEach(element => {
//   if(element.type[0] === 'Grass' || element.type[1] === 'Grass' || element.type[2] === 'Grass'){
//     arrNew.push(element)
//   }

// })


// return arrNew

// }
// }

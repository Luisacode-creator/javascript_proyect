/*---------Script para los botones-----------*/ 

//rescato los botones 

const botonplaya =document.getElementById('playas'); 
const botonhoteles =document.getElementById('hoteles'); 
const botoncultura =document.getElementById('cultura'); 
//rescato los contenedores que voy a manipular 

let contePlaya = document.querySelector('.carrusel-playa-container'); 
let conteHotel = document.querySelector('.carrusel-hoteles-container'); 
let conteCultura = document.querySelector('.carrusel-cultura-container'); 

botonplaya.addEventListener('click', ()=>{ 
    contePlaya.style.display = 'flex'
    conteHotel.style.display ='none'; 
    conteCultura.style.display='none'; 
})
botonhoteles.addEventListener('click', ()=>{ 
    contePlaya.style.display = 'none'
    conteHotel.style.display ='flex'; 
    conteCultura.style.display='none'; 
    
})
botoncultura.addEventListener('click', ()=>{ 
    contePlaya.style.display = 'none'
    conteHotel.style.display ='none'; 
    conteCultura.style.display='flex'; 
})

/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ CARRUSEL PLAYA +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/

//RECUPERO LOS ELEMENTOS DEL CARRUSEL  
const cajasplaya = document.querySelectorAll('.caja'); //me devuelve un array 

const bntAnterior = document.getElementById('anterior'); 
const bntPosterior = document.getElementById('posterior'); 

let contador = 0; 
let arrayplaya = [
    "../assets/images/galeria/foto1.avif",
    "../assets/images/galeria/foto2.avif",
    "../assets/images/galeria/foto3.avif",
    "../assets/images/galeria/foto4.avif",
    "../assets/images/galeria/foto5.avif",
    "../assets/images/galeria/foto6.avif"
] 

//creo un elemento img por cada una de los divs 'cajas' que tengo 

cajasplaya.forEach((elemento)=>{ 
    const imagenplaya = document.createElement('img'); 
    imagenplaya.alt ='imagenes de la playa'; 
    imagenplaya.classList ='imagenes'
    elemento.appendChild(imagenplaya); 
})
//creo la palabra de fondo 
    const texto = document.createElement ('p'); 
    texto.textContent = 'Playa'
    texto.classList = 'diseño'
    cajasplaya[1].appendChild(texto)
   


function actualizarimagenes (){ 
    //esto va a ser que mi ir a tras / ir alante siempre dependa de lo que valga mi contador. 
    const iratras = (contador -1 + arrayplaya.length)%arrayplaya.length
    const iralante = (contador+1)%arrayplaya.length
    //creo un bucle que recorra todas las cajas 

    cajasplaya.forEach((div, index)=>{
        const imagenesplaya = div.querySelector('img');
      //cojo todas las imagenes que voy creando 
        if (index===0){ 
            imagenesplaya.src= arrayplaya[iratras];  
        }else if(index===1){ 
            imagenesplaya.src = arrayplaya[contador]
        }else if (index===2){ 
            imagenesplaya.src = arrayplaya[iralante]
        }
     })
}


 //funcionalidad en botones 
     bntAnterior.addEventListener('click', ()=>{ 
        contador = (contador -1 + arrayplaya.length)%arrayplaya.length
        actualizarimagenes()
     })
     bntPosterior.addEventListener('click', ()=>{ 
       contador =  (contador+1)%arrayplaya.length
       actualizarimagenes()
     })

actualizarimagenes()


/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ CARRUSEL HOTELES +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/


const cajashoteles = document.querySelectorAll('.caja2'); //me devuelve un array 

const bntAnterior2 = document.getElementById('anterior2'); 
const bntPosterior2 = document.getElementById('posterior2'); 

let contador2 = 0; 
let arrayhoteles = [
    "../assets/images/galeria/hotel1.avif",
    "../assets/images/galeria/hotel2.avif",
    "../assets/images/galeria/hotel3.avif",
    "../assets/images/galeria/hotel4.avif",
    "../assets/images/galeria/hotel5.avif",
    "../assets/images/galeria/hotel6.avif"
] 

//creo un elemento img por cada una de los divs 'cajas' que tengo 

cajashoteles.forEach((elemento)=>{ 
    const imagenhotel = document.createElement('img'); 
    imagenhotel.alt ='imagenes de hoteles'; 
    imagenhotel.classList ='imagenes'
    elemento.appendChild(imagenhotel); 
})

//creo la palabra de fondo 
    const texto2 = document.createElement ('p'); 
    texto2.textContent = 'Hoteles'
    texto2.classList = 'diseño'
    cajashoteles[1].appendChild(texto2)
   


function actualizarimagenes2(){ 
    //esto va a ser que mi ir a tras / ir alante siempre dependa de lo que valga mi contador. 
    const iratras = (contador2 -1 + arrayhoteles.length)%arrayhoteles.length
    const iralante = (contador2+1)%arrayhoteles.length
    //creo un bucle que recorra todas las cajas 

    cajashoteles.forEach((div, index)=>{
        const imagenesplaya = div.querySelector('img');
      //cojo todas las imagenes que voy creando 
        if (index===0){ 
            imagenesplaya.src= arrayhoteles[iratras];  
        }else if(index===1){ 
            imagenesplaya.src = arrayhoteles[contador2]
        }else if (index===2){ 
            imagenesplaya.src = arrayhoteles[iralante]
        }
     })
}


 //funcionalidad en botones 
     bntAnterior2.addEventListener('click', ()=>{ 
        contador2 = (contador2 -1 + arrayhoteles.length)%arrayhoteles.length
        actualizarimagenes2()
     })
     bntPosterior2.addEventListener('click', ()=>{ 
       contador2 =  (contador2+1)%arrayhoteles.length
       actualizarimagenes2()
     })

actualizarimagenes2()

/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ CARRUSEL CULTURA +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/



const cajascultura = document.querySelectorAll('.caja3'); //me devuelve un array 

const bntAnterior3 = document.getElementById('anterior3'); 
const bntPosterior3= document.getElementById('posterior3'); 

let contador3 = 0; 
let arraycultura = [
    "../assets/images/galeria/cultura4.avif",
    "../assets/images/galeria/cultura1.avif",
    "../assets/images/galeria/cultura2.avif",
    "../assets/images/galeria/cultura3.avif",
    "../assets/images/galeria/cultura5.avif",
    "../assets/images/galeria/cultura6.avif"
] 

//creo un elemento img por cada una de los divs 'cajas' que tengo 

cajascultura.forEach((elemento)=>{ 
    const imagencultura = document.createElement('img'); 
    imagencultura.alt ='imagenes de hoteles'; 
    imagencultura.classList ='imagenes'
    elemento.appendChild(imagencultura); 
})

//creo la palabra de fondo 
    const texto3 = document.createElement ('p'); 
    texto3.textContent = 'Cultura'
    texto3.classList = 'diseño'
    cajascultura[1].appendChild(texto3)
   


function actualizarimagenes3(){ 
    //esto va a ser que mi ir a tras / ir alante siempre dependa de lo que valga mi contador. 
    const iratras = (contador3 -1 + arraycultura.length)%arraycultura.length
    const iralante = (contador3+1) % arraycultura.length
    //creo un bucle que recorra todas las cajas 

    cajascultura.forEach((div, index)=>{
        const imagenesplaya = div.querySelector('img');
      //cojo todas las imagenes que voy creando 
        if (index===0){ 
            imagenesplaya.src= arraycultura[iratras];  
        }else if(index===1){ 
            imagenesplaya.src = arraycultura[contador3]
        }else if (index===2){ 
            imagenesplaya.src = arraycultura[iralante]
        }
     })
}


 //funcionalidad en botones 
     bntAnterior3.addEventListener('click', ()=>{ 
        contador3 = (contador3 -1 + arraycultura.length)%arraycultura.length
        actualizarimagenes3()
     })
     bntPosterior3.addEventListener('click', ()=>{ 
       contador3 =  (contador3+1)%arraycultura.length
       actualizarimagenes3()
     })

actualizarimagenes3()

//-------------------//botón de pedir presupuesto//-------------------------//

import {presupuesto} from "./scriptIndex.js"; 

presupuesto()
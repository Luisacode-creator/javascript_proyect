//Aquí lo que tengo que hacer es por un lado crear el boton de pedir presupuesto, que lo crearé con una función que luego reutilizaré y por otro lado  cargar un archivo ajax para las noticias.


export function presupuesto(){ 
    const bntPresupuesto = document.getElementById('miboton-header')
    bntPresupuesto.addEventListener('click', ()=>{
       window.location.href = "viws/presupuesto.html"
    })
}
presupuesto()

//cargar un json con las últimas noticias del país 

const noticias = document.getElementById('ultimas-noticias')
const ErrorDiv = document.getElementById('error')

function CrearFetch(mylink){ 
    return fetch(mylink)
    .then (response=> { 
        if(!response.ok){ 
            throw new Error ('Error en la solicitud de: ' + response.statusText)
        } else { 
            return response.json()           
        }
    })
    
    .then(data=>{ 
        console.log(data)
        data.top_news[0].news.forEach(objeto => {
            noticias.innerHTML += 
            ` 
            <div class="tarjeta"> 
                <a href="${objeto.url}" class="link-imagen">
                   <img src="${objeto.image}">
                </a>
                <h3>${objeto.title}</h3>
            </div>
            `
        });
    })

    .catch(error=> { 
        ErrorDiv.innerHTML += '<p>Error(fetch):' + error + '</p>'
        throw new Error ('Error de red ' + error)
    })
}

CrearFetch('https://api.worldnewsapi.com/top-news?source-country=do&language=es&api-key=0440a18b55234d73873092fd3a0d4b34')

let options = { 
    enableHighAccuracy:true, 
    timeout:5000,
    maximunAge:0

}

if(navigator.geolocation){ 
   navigator.geolocation.getCurrentPosition(
    success, error, options
   )
}

function success(position){
    let latitude = position.coords.latitude; 
    let longitude = position.coords.longitude; 

    let mapa = L.map('mapa', {
        center:[latitude, longitude],
        zoom:14
    })
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'mi mapa interactivo'}).addTo(mapa); 

     let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude,longitude), 
            L.latLng(40.636004,-3.517277)
        ], 
        language:'es', 
     }).addTo(mapa)
}

function error(){ 
    let mapa = L.map('mapa').setView([40.636004,-3.517277],17); 

    //añadir un titulo 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'mi mapa interactivo'}).addTo(mapa); 

    //incluir marca y un popUp 
      let popup = L.popup().setLatLng([40.636004,-3.517277]).setContent("<h2 class='frase'>Dirección: C/ No existe, n4. España, Madrid </h2>").openPopup().addTo(mapa); 
      L.marker([40.636004,-3.517277]).addTo(mapa).bindPopup(popup); 

}

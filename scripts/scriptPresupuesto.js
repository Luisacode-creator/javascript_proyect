//--------PRESUPUESTO---------//

//validación de los datos del formulario

const Boton = document.getElementById('enviar'); 
const Formulario = document.getElementById('miformulario'); 
const Presupuesto = document.getElementById('presupuesto'); 

Boton.addEventListener('click', (evento)=>{ 
    evento.preventDefault()//cancelar el boton 

    let valForm = validarForm(); 
    //let valPresu= validarPresu(); 

    if(valForm==true /*|| valPresu ==true*/){ 
        Formulario.submit(); 
       // Presupuesto.submit(); 
        console.log('el formulario se puede enviar')
    }
}); 

   //Validar el formulario y poner un alert con todos los errores al enviar// 

function validarForm (){ 
  const nombre = document.getElementById('name'); 
  const apellido = document.getElementById('apellido'); 
  const telefono = document.getElementById('telefono'); 
  const email = document.getElementById('correo');
  const checkbox = document.getElementById('condiciones'); 
  
   let errores = ''
   let correcto = true; 

   /**************************NOMBRE**********************************/

  if(nombre.value==null || nombre.value==''){ 
       errores += "El campo nombre debe ser completado\n"
       setError(nombre)

  }else { 
    let name_re = /^[a-zA-Z ]{2,15}$/; 
    if(!name_re.exec(nombre.value)){ 
        errores += "El campo nombre solo puede estar compuesto por letras y tener una longitud máxima de 15\n"
        correcto = false;
        setError(nombre) 
    }
  }
 /**************************APELLIDO**********************************/
  if(apellido.value ==null || apellido.value == ''){
    errores += "El campo apellido debe ser completado\n"
    correcto = false; 
    setError(apellido)
  }else { 
    let apellido_re = /^[a-zA-Z]{2,40}$/; 
    if(!apellido_re.exec(apellido.value)){ 
        errores += "El campo apellido solo podrá contener letras y tendrá una longitud máxima de 40 carácteres \n"; 
        correcto = false; 
        setError(apellido)
    }
  }
/**************************TELÉFONO**********************************/
 if(telefono.value==null || telefono.value == ''){ 
    errores += "El campo Teléfono debe ser completado \n"
    correcto = false; 
    setError(telefono)
 }else { 
    let telefono_re =/^[6789]\d{8}$/; 
    if(!telefono_re.exec(telefono.value)){ 
        errores += "El campo Teléfono solo puede tener números y longitud de 9 dígitos \n"; 
        correcto = false; 
        setError(telefono)
    }
 }

/**************************CORREO**********************************/
  if(email.value == null || email.value == '' ){ 
    errores += "El campo correo debe ser completado\n"
    correcto = false; 
    setError(email)
  }else { 
    let email_re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if(!email_re.exec(email.value)){ 
        errores += "El campo correo no cumple los requisitos\n"; 
        correcto = false; 
        setError(email)
    }
  }

/**************************PRIVACIDAD**********************************/
 if(!checkbox.checked){ 
    errores += "Tienes aceptar los terminos y condiciones\n"
    correcto = false; 
 }

  //controlar los errores y si está valido
  if(errores !==""){ 
    alert(errores)
  }

  if (correcto== true){ 
    return true
  }else { 
    return false 

  }
}

//Poner rojo o verde si está válido o no 

function setError(input){ 
    input.style.border = "2px solid red"
    
}

//Parte del carrito 
const paquete = document.getElementById('producto'); 
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('.extras');
const totalinput = document.getElementById('calculo'); 

function calcularTotal(){
    let total = 0; 
    //precio del paquete 
    if(paquete.value){ 
        let precioPaquete = Number(paquete.value.split("-")[1])
        total += precioPaquete; 
    }
    //multiplicar por plazo
    let dias = Number(plazo.value); 
    if (dias > 0){ 
        total = total*dias; 
    }

    //extras 
    extras.forEach(extra=> { 
        if(extra.checked){ 
            if(extra.id === 'transporte'){ 
                total +=20
            }
            if(extra.id === 'equipaje10'){ 
                total +=30
            }
            if(extra.id === 'equipaje20'){ 
                total +=40
            }
            if(extra.id === 'premium'){ 
                total +=50
            }
        }
    }); 
    totalinput.value = total + " €"
}

//eventos 
paquete.addEventListener("change", calcularTotal); 
plazo.addEventListener("input", calcularTotal); 

extras.forEach(extra=>{
    extra.addEventListener("change", calcularTotal)
})













































//EVENTO PARA MOSTRAR LOS PAQUETES: 

let paquetes =document.querySelector('label[for="producto"]'); 
let seccion = document.querySelector('.paquetes-descripcion'); 

paquetes.addEventListener('click', ()=>{ 
    seccion.scrollIntoView({behavior:"smooth"}); 
})


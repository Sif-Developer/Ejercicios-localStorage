let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");

//EVITAR QUE LA PÁGINA REFRESQUE -.-! //
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// FUNCIÓN PARA QUE EL BOTON DE RESET FUNCIONE CORRECTAMENTE//
resetButton.addEventListener("click", (e) => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  /*Cuando escuche el Click pasa a hacer lo siguiente => toma name, email y message 
     y los vacía de contenido con el el valor "" (vacío) */
  name.value = "";
  email.value = "";
  message.value = "";
});

// Darle vida al botón envíar : al escuchar click obtiene los ids del inputs //
sendButton.addEventListener("click", (e) => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");


  
//Creo un obejeto llamado "datos" donde tengo todos los valores de los respectivos "Id" del input metidos)

let datos = {
    name : name.value ,
    email: email.value ,
    message: message.value ,
}

  //Aquí = LocalStorage los llamo para que aparezcan en el Local Storage//
const contactData = localStorage.setItem("user", JSON.stringify(datos));
});


// Validacion formulario de contacto
const nombre=document.getElementById("nombreContacto")
const email=document.getElementById("email")
const mensaje=document.getElementById("mensaje")
const errores=document.getElementById("errores")


const form=document.getElementById("formulario")
    form.addEventListener("submit",function(e){
        e.preventDefault()
    console.log("enviando")
    const emailValido=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const mensajesError=[]
    errores.innerHTML=""
    if (nombre.value===""){
        mensajesError.push("Debe ingresar su nombre")
    }
    if (email.value==="" || !emailValido.test(email.value)){
        mensajesError.push("Debe ingresar un e-mail válido")
    }
    
    if (mensaje.value.length<=10 ){
        mensajesError.push("Su mensaje debe tener un mínimo de 10 caracteres")
    }

    
    errores.textContent = mensajesError.join(". ");
   
})


fetch("https://jsonplaceholder.typicode.com/comments?_limit=6")
  .then(response => response.json())
  .then(data => {
    data.forEach(comentario => {
      const div = document.createElement("div");

      const nombre = document.createElement("p");
      nombre.innerText = "Nombre: " + comentario.name;
      div.appendChild(nombre);

      const email = document.createElement("p");
      email.innerText = "Email: " + comentario.email;
      div.appendChild(email);

      const cuerpo = document.createElement("p");
      cuerpo.innerText = comentario.body;
      div.appendChild(cuerpo);

      div.classList.add("comentario");
      api.appendChild(div);
    });
  });
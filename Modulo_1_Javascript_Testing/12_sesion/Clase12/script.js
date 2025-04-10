document.getElementById("loginForm").addEventListener("submit", function(e){
e.preventDefault();

const user = document.getElementById("username").value.trim();
const pass = document.getElementById("password").value.trim();

const message = document.getElementById("message");

if(user === "" || pass === ""){
    message.textContent = "Todos los campos son obligatorios"
    message.style.color = "red";
    return;
}
if(user === "jmoreno" && pass === "elmismo"){
    message.textContent = "Login exitoso!"
    message.style.color = "blue";
}else{
    message.textContent = "Usuario o contraseña incorrectos"
    message.style.color = "red";
}

})
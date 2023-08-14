
    function compararCampos() {
        var contrasena1 = document.getElementById("contrasenaregistro").value;
        var contrasenaRep = document.getElementById("contrasenaregistro1").value;
        
        if (contrasena1 !== contrasenaRep) {
            alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
            return false; 
        }
        window.location.href = "perfil.html"}

    function cancelar(){
        document.getElementById("usuario").value=" ";
        document.getElementById("contrasena").value="";
    }


    function mostrarregistro(){
        const contenedorRegistro = document.querySelector(".registro");
        const botonregistro = document.querySelector(".botonRegistro");
        const contenedorLogin = document.querySelector(".loginDeUsuario");
        const cajalogin = document.querySelector(".cajalogin")
       
        botonregistro.addEventListener("click",()=>{
            contenedorRegistro.style.display ="block"
            contenedorLogin.style.display = "none"
            botonregistro.style.display = "none"
            cajalogin.style.display="none"
        })
    }
    function volverAtras(){
        const contenedorRegistro = document.querySelector(".registro");
        const contenedorLogin = document.querySelector(".loginDeUsuario");
        const botonregistro = document.querySelector(".botonvolver");
        const cajalogin = document.querySelector(".cajalogin")
        botonvolver.addEventListener("click",()=>{
            contenedorRegistro.style.display = "none"
            contenedorLogin.style.display = "block"
            botonvolver.style.display = "none"
            cajalogin.style.display="block"
        })
    }
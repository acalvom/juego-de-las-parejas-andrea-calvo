function comprobarUsuarioContrasenia() {
    // Esta función comprueba que se han enviado correctamente el usuario y la contraseña
    var usuario, contrasenia;
    usuario = document.getElementById("introducir_usuario").value;
    console.log('usuario', usuario);
    contrasenia = document.getElementById("introducir_contraseña").value;
    console.log('contraseña', contrasenia);
    var iniciar_sesion = [usuario, contrasenia];
    localStorage.setItem("iniciar_sesion", iniciar_sesion);
}

function mostrarContrasenia() {
    var x = document.getElementById("introducir_contraseña");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

window.onload = function () {
    document.getElementById('btn_iniciar_sesion').onclick = comprobarUsuarioContrasenia;
    document.getElementById('mostrar_contrasenia').onclick = mostrarContrasenia;
}
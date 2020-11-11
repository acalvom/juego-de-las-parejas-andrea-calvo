function comprobarRegistro() {
    // Esta función comprueba que se ha rellenado correctamente el formulario
    var usuario, email, contrasenia, contraseniaRepetida;
    usuario = document.getElementById("introducir_usuario").value;
    console.log('usuario', usuario);
    email = document.getElementById("introducir_email").value;
    console.log('email', email);
    contrasenia = document.getElementById("introducir_contraseña").value;
    console.log('contraseña', contrasenia);
    contraseniaRepetida = document.getElementById("repetir_contraseña").value;
    console.log('contraseña repetida', contraseniaRepetida);

    // Comprobar que las contraseñas son iguales
    if (contrasenia == contraseniaRepetida) {
        console.log('contraseña válida');
        document.getElementById('error_contraseña').innerHTML = '';
        var registro = [usuario, email, contrasenia];
        localStorage.setItem("registro", registro);
    } else {
        console.log('contraseña inválida');
        document.getElementById('error_contraseña').innerHTML = 'Las contraseñas deben coincidir';
    }
}

window.onload = function () {
    document.getElementById('btn_registro').onclick = comprobarRegistro;
}
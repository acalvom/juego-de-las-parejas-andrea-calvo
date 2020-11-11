function aceptarPreferencias() {
    var numeroCartas, limiteTiempo;
    numeroCartas = parseInt(document.getElementById('numero_cartas').value);
    console.log('numeroCartas', numeroCartas);
    limiteTiempo = parseInt(document.getElementById('limite_tiempo').value);
    console.log('limiteTiempo', limiteTiempo);
    var preferencias = [numeroCartas, limiteTiempo];
    localStorage.setItem("preferencias", preferencias);
}

window.onload = function () {
    document.getElementById('btn_aceptar').onclick = aceptarPreferencias;
}
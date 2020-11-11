var url = 'http://fenw.etsisi.upm.es:10000/records'; // URL sobre la que lanzar la petición
var peticion_http = new XMLHttpRequest();

peticion_http.open("GET", url);
console.log('http', peticion_http);
peticion_http.responseType = 'json';
peticion_http.onload = recibirRespuesta;
peticion_http.send();

function recibirRespuesta() {
    var respuesta;
    if (peticion_http.status == 200) {
        respuesta = peticion_http.response;
        crearTabla(respuesta);
    } else
        alert("Ocurrio un problema con la URL.");
}

function adaptarFecha(fechaMs){
    var fecha;
    fecha = new Date(fechaMs);
    fecha = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    return fecha;
}

function crearTabla(datos) {
    var tabla = document.getElementById('tabla-records');
    for (var i = 0; i < datos.length; i++) {
        var fecha = adaptarFecha(datos[i].recordDate);
        var fila = `<tr>
							<td>${datos[i].username}</td>
							<td>${datos[i].punctuation}</td>
							<td>${datos[i].cards}</td>
                            <td>${datos[i].disposedTime}</td>
                            <td>${fecha}</td>
					  </tr>`
        tabla.innerHTML += fila;
    }
}
var valores = [];
var cartasSeleccionadas = [];
var cartasSeleccionadasIds = [];
var cartasVoletadas = 0;

var numCartas = 0;
var tiempoLimite = 0;
var puntuacion = 0;
var cuentaAtras;
var tiempoActual;

function leerPreferencias() {

    var prefecencias = localStorage.getItem("preferencias");
    // console.log('prefecencias', prefecencias);
    // Comprobar si hay preferencias guardadas y si no las hay, asignar valores por defecto para el numero de cartas y el tiempo
    if (prefecencias == null) {
        numCartas = 20;
        tiempoLimite = 0;
    } else {
        var prefecenciasArray = prefecencias.split(',').map(Number); // Para obtener el array de preferencias
        numCartas = prefecenciasArray[0];
        tiempoLimite = prefecenciasArray[1];
    }

    // console.log('numCartas', numCartas);
    // console.log('tiempoLimite', tiempoLimite);
    tiempoActual = tiempoLimite;


}

function reiniciarJuego() {
    // Se reinicializan los valores de la partida y se muestran en pantalla
    puntuacion = 0;
    cartasVoletadas = 0;
    leerPreferencias();
    document.getElementById('parejas_conseguidas').value = cartasVoletadas;
    document.getElementById('puntos_actuales').value = puntuacion;
}

function temporizador() {
    // El temporizador decrementa el tiempo limite establecido en las preferencias de segundo en segundo y lo muestra en pantalla  hasta llegar a cero. En ese moemnto se detiene el juego estableciendo la puntuación a cero e indicandolo en una ventana 'alert'
    cuentaAtras = setInterval(function () {
        if (tiempoActual <= 0) {
            clearInterval(cuentaAtras);
            document.getElementById("tiempo_restante").value = 'FIN';
            //reiniciarJuego();
            puntuacion = 0;
            alert("¡Has agotado el tiempo!");
        } else {
            document.getElementById("tiempo_restante").value = tiempoActual;
        }
        tiempoActual -= 1;
    }, 1000);

}

function puntuacionExtra() {
    // Puntos extra por numero de cartas
    if (numCartas == 26) {
        puntuacion = puntuacion + 25;
    } else if (numCartas == 32) {
        puntuacion = puntuacion + 50;
    } else {
        puntuacion = puntuacion;
    }

    // Puntos extra por tiempo
    if (tiempoLimite == 150) {
        puntuacion = puntuacion + 25;
    } else if (tiempoLimite == 120) {
        puntuacion = puntuacion + 75;
    } else if (tiempoLimite == 90) {
        puntuacion = puntuacion + 50;
    } else if (tiempoLimite == 60) {
        puntuacion = puntuacion + 25;
    } else {
        puntuacion = puntuacion;
    }
}

function vectorPosiciones() {
    // Asignar numCartas numeros aleatorios diferentes y meterlos en un array valores[]
    var end = 0;
    valores = [];
    // console.log('numCartas', numCartas);
    while (end !== numCartas) {
        for (let i = 0; i <= (numCartas - 1); i++) {
            var numAleatorio = Math.round(Math.random() * (numCartas - 1));
            if (valores.indexOf(numAleatorio) == -1) {
                valores.push(numAleatorio);
                end++;
            }
        }
    }
    
    // Reasignar los valores del array para que haya parejas de valores. 
    for (let i = 0; i < numCartas; i++) {
        numAleatorio = valores[i];
        if (numAleatorio > ((numCartas / 2)) - 1) {
            valores[i] = numAleatorio - (numCartas / 2);
        } else {
            valores[i] = numAleatorio;

        }
    }
    console.log('valores', valores);
}

function nuevaPartida() {
    reiniciarJuego();
    if (tiempoLimite != 0)
        temporizador();
    else
        document.getElementById("tiempo_restante").value = 'Sin tiempo';

    vectorPosiciones();
    var output = '';
    for (let i = 0; i < parseInt(numCartas); i++) {
        output = output + '<div id="carta_' + i + '" onclick="voltearCarta(this,\'' + valores[i] + '\')"></div>';
    }
    document.getElementById('tablero').innerHTML = output;
}

function voltearCarta(carta, valor) {
    //console.log('carta', carta.id);
    //console.log('valor', valor);

    var cartaElegida = document.getElementById(carta.id)
    //= "../images/naipes/gf_" + valor + ".png";
    //console.log('cartaElegida', cartaElegida);
    var urlCarta = 'url(images/naipes/img_' + valor + '.jpg)';
    //console.log('urlCarta', urlCarta);
    //cartaElegida.style.background = 'url(images/naipes/img_0.jpg)';


    cartaElegida.style.backgroundImage = urlCarta;
    cartaElegida.style.backgroundSize = '79px 140px';



    if (cartasSeleccionadas.length == 0) {
        cartasSeleccionadas.push(valor);
        cartasSeleccionadasIds.push(carta.id);
        //console.log('Una carta seleccionada', cartasSeleccionadas, cartasSeleccionadasIds);
    } else if (cartasSeleccionadas.length == 1) {
        cartasSeleccionadas.push(valor);
        cartasSeleccionadasIds.push(carta.id);
        console.log('Dos cartas seleccionada', cartasSeleccionadas, cartasSeleccionadasIds);
        // COMPARAR LAS CARTAS
        //console.log('Comparar cartas');
        if (cartasSeleccionadas[0] == cartasSeleccionadas[1]) {
            //console.log('Las cartas coinciden', cartasVoletadas);

            cartasVoletadas = cartasVoletadas + 2;
            puntuacion = puntuacion + 15;
            document.getElementById('parejas_conseguidas').value =
                 cartasVoletadas;
            // document.getElementById('parejas_conseguidas').innerText =
            //     cartasVoletadas;
            document.getElementById('puntos_actuales').value =
                puntuacion;
            if (cartasVoletadas == numCartas) {
                clearInterval(cuentaAtras);
                puntuacionExtra();


                //alert("¡HAS COMPLETADO TODAS LAS PAREJAS!");
                //document.getElementById('tablero').innerHTML = "";
                // nuevaPartida();
            }

            // Vaciar los arrays de las posiciones de las cartas y sus ids
            cartasSeleccionadas = [];
            cartasSeleccionadasIds = [];
        } else {
            //console.log('Las cartas no coinciden');
            //console.log(cartasSeleccionadas[0] + '=!' + cartasSeleccionadas[1]);
            puntuacion = puntuacion - 5;
            setTimeout(voltear, 500);
        }
        document.getElementById('parejas_conseguidas').value =
            cartasVoletadas;
        document.getElementById('puntos_actuales').value =
            puntuacion;
    }
}

function voltear() {
    // Voltear las cartas si se falla la pareja
    var carta1 = document.getElementById(cartasSeleccionadasIds[0]);
    var carta2 = document.getElementById(cartasSeleccionadasIds[1]);
    carta1.style.background = 'url(images/naipes/fondo_espacio.jpg)';
    carta1.innerHTML = "";
    carta2.style.background = 'url(images/naipes/fondo_espacio.jpg)';
    carta2.innerHTML = "";

    // Vaciar los arrays de las posiciones de las cartas y sus ids
    cartasSeleccionadas = [];
    cartasSeleccionadasIds = [];
}
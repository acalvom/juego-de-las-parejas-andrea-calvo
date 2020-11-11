# Juego de las parejas

#### Enlace del proyecto GitHub:

https://github.com/acalvom/juego-de-las-parejas-andrea-calvo.git

> Este proyecto desarrolla el juego de las parejas haciendo uso de HTML5, CSS3, Bootstrap3 y Ajax.

### Tecnologías necesarias

`Javascrip` `HTML5` `GitHub` `CSS3` `Bootstrap3` `Ajax` `Swagger`

### :gear: Instalación del proyecto

Clonar el repositorio en el equipo, **mediante consola**:

```sh
> cd <folder path>
> git clone https://github.com/acalvom/juego-de-las-parejas-andrea-calvo.git
```

### :movie_camera: Videos (www.youtube.com/miw-upm)

- Lista de reproducción: **FENW. Front-end para Navegadores Web**

### :page_with_curl: Desarrollo de la práctica

#### Menú de inicio

- Se muestra un calendario con la hora y la fecha actual.
- Se muestra la portada del juego en formato neón. Al pinchar en el enlase, el jugador
  es redirigido al canal de YouTube del máster.
- Se muestra el enlace al perfil de LinkedIn y GitHub de Andrea Calvo.
- **TODAS LAS FUENTES DE LAS QUE SE HAN OBTENIDOS LOS RECURSOS HAN SIDO REFERENCIADOS PARA
  MANTENER LA PROPIEDAD INTELECTUAL.**

#### Menú de preferencias

- Por defecto, 20 cartas y sin tiempo límite son las preferencias.
- El jugador tiene la opción de modificar estos parámetros seleccionando algunas de las
  opciones disponibles en el menú desplegable.

#### Menú de juego

- Al iniciar una partida, el tiempo empieza a correr.
- Por cada pareja de cartas descubierta, se añadirá al marcador 15 puntos (+15).
- Por cada pareja fallida, se descontarán 5 puntos (-5).
- Si el tiempo se agota, la puntuación es 0.
- Dependiendo del tiempo y el número de cartas seleccionado se sumará una puntuación extra
  a la partida:

  - 20 cartas -> +0 puntos
  - 26 cartas -> +25 puntos
  - 32 cartas -> +50 puntos

  - 0 segundos -> +0 puntos
  - 150 segundos -> +25 puntos
  - 120 segundos -> +50 puntos
  - 90 segundos -> +75 puntos
  - 60 segundos -> +100 puntos

#### Menú de récords

- Se realiza una petición a un API Rest solicitando el listado de los 10 mejores resultados
  obtenidos en el juego.

#### Menú para iniciar sesión

- Permite al usuario iniciar sesión a través de su usuario y contraseña. (EN PROGRESO)
- Permite visualizar la contraeña si se pincha en el checkbox "Mostrar Contraseña".

#### Menú de registro

- Permite a un usuario registrarse introduciendo su email, su usuario y contraseña. (EN PROGRESO)
- Valida si las dos contraseñas introducidas coindiden y en caso contrario lo notifica.

#### Otros

- La barra de navegación es adaptativa, es decir, si el ancho de la pantalla se reduce hasta
  alcanzar un ancho mínimo las pestañas se recogen y se agrupan en un desplegable.

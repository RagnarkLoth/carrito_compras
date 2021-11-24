import{guardarInformacion}from "../controlador/coontrolador.js"
import{informacionJsonC}from "../controlador/coontrolador.js"

const MAIN = document.querySelector("main")

function crearTarjetas() {
    informacionJsonC().then(respuesta => {
        respuesta.forEach(juegos => {
            const TARJETA = document.createElement('div')
            TARJETA.setAttribute('class', 'tarjeta')
            
            const TITULO_TARJETA = document.createElement('h2')
            TITULO_TARJETA.textContent = juegos.nombre
            
            const IMAGEN = document.createElement('img')
            IMAGEN.setAttribute('src', juegos.imagen)
            IMAGEN.setAttribute('alt', juegos.alt)
            IMAGEN.setAttribute('class', 'imagen')

            const PRECIO = document.createElement('p')
            PRECIO.setAttribute('class', 'precio')
            PRECIO.textContent = `$${juegos.precio}`
            
            const BOTON = document.createElement('button')
            BOTON.setAttribute('class', 'btnAñadir')
            BOTON.textContent = 'AÑADIR'
            BOTON.addEventListener('click',()=>{
                guardarInformacion(juegos.imagen, juegos.nombre, juegos.alt, Number(juegos.precio))
     
            })
            
            TARJETA.appendChild(TITULO_TARJETA)
            TARJETA.appendChild(IMAGEN)
            TARJETA.appendChild(PRECIO)
            TARJETA.appendChild(BOTON)
            MAIN.appendChild(TARJETA)
        })
    })
}

crearTarjetas()



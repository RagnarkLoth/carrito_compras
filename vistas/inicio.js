import{guardarInformacion}from "../controlador/coontrolador.js"
import{informacionJsonC}from "../controlador/coontrolador.js"

localStorage.clear()
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
            
            const boton = document.createElement('button')
            boton.setAttribute('class', 'btnAñadir')
            boton.textContent = 'AÑADIR'
            boton.addEventListener('click',()=>{
                guardarInformacion(juegos.imagen, juegos.nombre, juegos.alt)
            })
            
            TARJETA.appendChild(TITULO_TARJETA)
            TARJETA.appendChild(IMAGEN)
            TARJETA.appendChild(boton)
            MAIN.appendChild(TARJETA)
        })
    })
}

crearTarjetas()



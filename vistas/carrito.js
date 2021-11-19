import{setTarjetasCar}from "../controlador/coontrolador.js"
import{eliminarTarjet}from "../controlador/coontrolador.js"

const MAIN = document.querySelector("main")

function crearTarjetas() {
    setTarjetasCar().forEach(juegos => {
        if(juegos == undefined){}
        else{
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
            boton.textContent = 'ELIMINAR'
            boton.addEventListener('click', ()=>{
                eliminarTarjet(juegos.id)
                window.location.reload()
            })
    
            TARJETA.appendChild(TITULO_TARJETA)
            TARJETA.appendChild(IMAGEN)
            TARJETA.appendChild(boton)
            MAIN.appendChild(TARJETA)   
        }
    })
}

crearTarjetas()

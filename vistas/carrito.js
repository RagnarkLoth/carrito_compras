import{setTarjetasCar}from "../controlador/coontrolador.js"
import{eliminarTarjet}from "../controlador/coontrolador.js"
import{precio}from "../controlador/coontrolador.js"
import{cantidad_juegos}from "../controlador/coontrolador.js"

const MAIN = document.querySelector("main")
const FOOTER = document.querySelector("footer")

function crearTarjetas() {
    setTarjetasCar().forEach(juegos => {
        if(juegos == undefined){
        }
        else{
            const TARJETA = document.createElement('div')
            TARJETA.setAttribute('class', 'tarjeta')
    
            const TITULO_TARJETA = document.createElement('h2')
            TITULO_TARJETA.textContent = juegos.nombre
    
            const IMAGEN = document.createElement('img')
            IMAGEN.setAttribute('src', juegos.imagen)
            IMAGEN.setAttribute('alt', juegos.alt)
            IMAGEN.setAttribute('class', 'imagen')
            
            const PRECIO = document.createElement('p')
            PRECIO.textContent = `$${juegos.precio}`
            PRECIO.setAttribute('class', 'precio')

            const BOTON_CONFIRMAR = document.createElement('button')
            BOTON_CONFIRMAR.setAttribute('class', 'btnEliminar')
            BOTON_CONFIRMAR.textContent = 'ELIMINAR'
            BOTON_CONFIRMAR.addEventListener('click', ()=>{
                eliminarTarjet(juegos.id, juegos.precio, BOTON_CONFIRMAR.className)
            })

            const BOTON_ELIMINAR = document.createElement('button')
            BOTON_ELIMINAR.textContent = 'COMPRAR'
            BOTON_ELIMINAR.setAttribute('class', 'btnComprar')
            BOTON_ELIMINAR.addEventListener('click', ()=>{
                eliminarTarjet(juegos.id, juegos.precio, BOTON_ELIMINAR.className)
            })

            const CONTENEDOR_BOTONONES = document.createElement('div')
            CONTENEDOR_BOTONONES.setAttribute('class', 'contenedor')

            CONTENEDOR_BOTONONES.appendChild(BOTON_CONFIRMAR)
            CONTENEDOR_BOTONONES.appendChild(BOTON_ELIMINAR)
            TARJETA.appendChild(TITULO_TARJETA)
            TARJETA.appendChild(IMAGEN)
            TARJETA.appendChild(PRECIO)
            TARJETA.appendChild(CONTENEDOR_BOTONONES)
            MAIN.appendChild(TARJETA)   
        }
    })
}

function crearFooter(){

    const CONTENEDOR_PRECIO = document.createElement('div')
    CONTENEDOR_PRECIO.setAttribute('class', 'contenedorP')

    const CONTENEDOR_CANTIDAD = document.createElement('div')
    CONTENEDOR_CANTIDAD.setAttribute('class', 'contenedorC')

    const PRECIO = document.createElement('p')
    PRECIO.textContent = `$${precio()}`

    const CANTIDAD_JUEGOS = document.createElement('p')
    CANTIDAD_JUEGOS.textContent = cantidad_juegos()

    CONTENEDOR_PRECIO.appendChild(PRECIO)
    CONTENEDOR_CANTIDAD.appendChild(CANTIDAD_JUEGOS)
    FOOTER.appendChild(CONTENEDOR_PRECIO)
    FOOTER.appendChild(CONTENEDOR_CANTIDAD)
}

crearTarjetas()
crearFooter()

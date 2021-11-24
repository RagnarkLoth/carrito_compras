import{guardarInformacionT}from "../modelos/procesos.js"
import{setTarjetasCarr}from "../modelos/procesos.js"
import{eliminarTarjeta}from "../modelos/procesos.js"
import{informacionJson}from "../modelos/procesos.js"
import{precioP}from "../modelos/procesos.js"
import{cantidad_juegosP}from "../modelos/procesos.js"



export function guardarInformacion(imagen, nombre, alt, precio){
    return guardarInformacionT(imagen,nombre, alt, precio)
}

export function setTarjetasCar(){
    return setTarjetasCarr()
}

export function eliminarTarjet(index, precio, tipoBoton){
    return eliminarTarjeta(index, precio, tipoBoton)
}

export function informacionJsonC(){
    return informacionJson()
}

export function precio(){
    return precioP()
}

export function cantidad_juegos() {
    return cantidad_juegosP()
}
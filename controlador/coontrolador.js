import{guardarInformacionT}from "../modelos/procesos.js"
import{setTarjetasCarr}from "../modelos/procesos.js"
import{eliminarTarjeta}from "../modelos/procesos.js"
import{informacionJson}from "../modelos/procesos.js"


export function guardarInformacion(imagen, nombre, alt){
    return guardarInformacionT(imagen,nombre, alt)
}

export function setTarjetasCar(){
    return setTarjetasCarr()
}

export function eliminarTarjet(index){
    return eliminarTarjeta(index)
}

export function informacionJsonC(){
    return informacionJson()
}
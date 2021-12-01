const JUEGOS_GUARDAR=[]
let ide = 0
let total = 0

ide = Number(localStorage.getItem('id'))
total = Number(localStorage.getItem('totals'))

try{
    setJuegosGuardar()
}catch(e){
    console.log("No existen elementos");
}

export function guardarInformacionT(imagen, nombre, alt, precios){
    if(ide == null){
        JUEGOS_GUARDAR.push(
            {
                id:0,
                imagen:imagen,
                nombre:nombre,
                alt: alt,
                precio:precios
            }
        )
    }else{
        JUEGOS_GUARDAR[ide]=(
            {
                id:ide,
                imagen:imagen,
                nombre:nombre,
                alt: alt,
                precio:precios
            }
        )
    }
    ide++
    total+=Number(precios)
    localStorage.setItem('id', JSON.stringify(ide))
    localStorage.setItem('juegos', JSON.stringify(JUEGOS_GUARDAR))
    localStorage.setItem('totals', JSON.stringify(total))
    return Swal.fire({
        background: '#1B1717',
        icon: 'success',
        iconColor: 'green',
        confirmButton: 'Aceptar',
        confirmButtonColor: 'green',
        confirmButtonText: 'OK',
        title: 'Se agrego correctamente'
    })
}

export function setTarjetasCarr(){
    total = localStorage.getItem('totals')
    return JUEGOS_GUARDAR
}

export function eliminarTarjeta(index, precio, tipoBoton){

    if(tipoBoton == 'btnEliminar'){
        return Swal.fire({
            background: '#1B1717',
            icon: 'warning',
            iconColor: 'red',
            confirmButton: true,
            confirmButtonColor: 'green',
            confirmButtonText: 'ACEPTAR',
            showCancelButton: true,
            cancelButtonColor: '#670000',
            cancelButtonText: 'CANCELAR',
            title: '¿Seguro que quiere eliminar este videojuego del carrito?'
        }).then((result) =>{
            if (result.isConfirmed) {
                eliminar(index, precio)
                Swal.fire({
                    background: '#1B1717',
                    icon: 'warning',
                    iconColor: 'red',
                    title: 'SE ELIMINO CORRECTAMENTE',
                    confirmButton: true,
                    confirmButtonColor: 'green',
                    confirmButtonText: 'ACEPTAR',
                }).then((result) =>{
                    if(result.isConfirmed) {
                        window.location.reload()
                    }
                })
            }
        })
    }else if(tipoBoton == 'btnComprar'){
        eliminar(index, precio)
        Swal.fire({
            background: '#1B1717',
            icon: 'success',
            iconColor: 'green',
            title: 'GRACIAS POR SU COMPRA',
            confirmButton: true,
            confirmButtonColor: 'green',
            confirmButtonText: 'ACEPTAR',
        }).then((result) =>{
            if(result.isConfirmed){
                window.location.reload()
            }
        })
    }
}

export function informacionJson(){
    return fetch('../json/juegos.json').then(respuesta=>respuesta.json()) 
}

export function precioP() {
    if(JUEGOS_GUARDAR == undefined){
        total = 0
    }
    return total
}

export function cantidad_juegosP() {
    return ide
}

function setJuegosGuardar(){
    let datos = localStorage.getItem('juegos')
    let juegos = JSON.parse(datos)
    juegos.forEach(elementos => {
        JUEGOS_GUARDAR.push(elementos)
    })
}

function eliminar(index, precio){
    delete JUEGOS_GUARDAR[index]
    ide--
    total-=Number(precio)
    localStorage.setItem('id', JSON.stringify(ide))
    localStorage.setItem('juegos', JSON.stringify(JUEGOS_GUARDAR))
    localStorage.setItem('totals', JSON.stringify(total))
}
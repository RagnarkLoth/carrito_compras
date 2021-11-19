const JUEGOS_GUARDAR=[]
let ide = 0
ide = localStorage.getItem('id')

setJuegosGuardar()

export function guardarInformacionT(imagen, nombre, alt){
    if(ide == null){
        JUEGOS_GUARDAR.push(
            {
                id:0,
                imagen:imagen,
                nombre:nombre,
                alt: alt
            }
        )
    }else{
        JUEGOS_GUARDAR[ide]=(
            {
                id:ide,
                imagen:imagen,
                nombre:nombre,
                alt: alt
            }
        )
    }
    ide++
    localStorage.setItem('id', JSON.stringify(ide))
    localStorage.setItem('juegos', JSON.stringify(JUEGOS_GUARDAR))
    return alert(`Se guardo correctamente ${ide}`);
}

export function setTarjetasCarr(){
    return JUEGOS_GUARDAR
}

export function eliminarTarjeta(index){
    delete JUEGOS_GUARDAR[index]
    ide--
    localStorage.setItem('id', JSON.stringify(ide))
    localStorage.setItem('juegos', JSON.stringify(JUEGOS_GUARDAR))
    return alert(index)
}

export function informacionJson(){
    return fetch('../json/juegos.json').then(respuesta=>respuesta.json()) 
}

function setJuegosGuardar(){
    let datos = localStorage.getItem('juegos')
    let juegos = JSON.parse(datos)
    juegos.forEach(elementos => {
        JUEGOS_GUARDAR.push(elementos)
    })
}


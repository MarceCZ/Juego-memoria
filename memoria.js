
let simbolosD = ["&#128640;","&#128657;","&#128668;"]
let listaCasilla = []
let turno = 1
let anterior = null

function crearCasilla() {
    for(let i=0;i<simbolosD.length;i++){
        let casilla1 = {
            simbolo : simbolosD[i],
            mostrandoSimbolo : false
        }
        let casilla2 = {
            simbolo : simbolosD[i],
            mostrandoSimbolo : false
        }
        listaCasilla.push(casilla1)
        listaCasilla.push(casilla2)
    }
}

function devolverCasilla(row,col) {
    const pos = (row*simbolosD.length)+col
    return listaCasilla[pos]
}


function ponerSimboloCasilla() {
    for(let i=0;i<2;i++){
        for(let k=0;k<3;k++){
            const but = document.getElementById(i + ";" + k)
            const casilla = devolverCasilla(i,k)
            if(casilla.mostrandoSimbolo){
                but.innerHTML = casilla.simbolo
            }
            else {
                but.innerHTML = "UL"
            }
            
        }
    }
}

function casillaOnClick(row,col) {
    //obtener casilla
    const seleccion = devolverCasilla(row,col)

    if(turno==1){
        seleccion.mostrandoSimbolo = true
        anterior = seleccion
        ponerSimboloCasilla()
        turno = 2
    }
    else{
        seleccion.mostrandoSimbolo = true
        
        if(anterior.simbolo != seleccion.simbolo){
            ponerSimboloCasilla()
            setTimeout(function(){
                seleccion.mostrandoSimbolo = false
                anterior.mostrandoSimbolo = false
                ponerSimboloCasilla()
                anterior = null
                turno = 1
            }, 2000)
        }
        else{
            anterior = null
            turno = 1
            ponerSimboloCasilla()
        }
    }
    
}

function main() {
    crearCasilla()
    ponerSimboloCasilla()
}

main()
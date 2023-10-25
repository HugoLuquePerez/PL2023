const menuToggleBtn = document.getElementById('menu-toggle')
menuToggleBtn.addEventListener('click', menuToggle)
const bloques = document.getElementById('bloques')
const heroImg = document.getElementById('heroImg')
const bloque1 = document.querySelector('.bloque1Temas')


function menuToggle() {
    let infoStatus = menuToggleBtn.getAttribute('data-status')

    if (bloques.style.display === 'flex' && infoStatus == 'open'){
    /* cerrar menu */
        bloques.style.display = "none"
        menuToggleBtn.setAttribute('data-status','close')
    }else {
        /* abrir menu */
        bloques.style.display = 'flex'
        bloques.style.flexDirection = 'column'
        bloques.style.alignItems = 'center'
        bloques.style.borderRadius = '10px'
        heroImg.style.display = 'none'
        menuToggleBtn.setAttribute('data-status','open')
    }
}

const bloqueToggleBtn = document.querySelectorAll('.bloque')

bloqueToggleBtn.forEach(bloque => {

    bloque.addEventListener('click', bloqueToggle) 

    function bloqueToggle() {
        let infoBloque = bloque.getAttribute('data-info')
        let infoStatus = bloque.getAttribute('data-status')

        console.log(infoBloque);
        console.log(infoStatus);

        if (infoBloque == '1' && infoStatus == 'close') {
            bloques.style.display = 'none'

            /* Creacion de elmentos html */
            const bloque1Ctn = document.createElement('div')
            const temasCtn = document.createElement('div')
            const titleBloque1 = document.createElement('h3')
            const parrafoBloque1 = document.createElement('p')
            const contenidosCtn = document.createElement('div')
            const titleContenidos = document.createElement('h3')
            const parrafoContenidosCtn = document.createElement('div')
            const parrafoContenidos = document.createElement('p')

            parrafoBloque1.textContent = 'Un Aula Multicultural'
            titleBloque1.textContent = 'Bloque 1'

            bloque1Ctn.appendChild(titleBloque1)
            bloque1Ctn.appendChild(parrafoBloque1)
            bloque1Ctn.classList.add('bloque1Ctn')

            bloque1.appendChild(bloque1Ctn)
            bloque1.appendChild(temasCtn)

            temasCtn.appendChild(contenidosCtn)
            temasCtn.classList.add('temasCtn')
            temasCtn.appendChild(parrafoContenidosCtn)

            contenidosCtn.appendChild(titleContenidos)
            contenidosCtn.classList.add('contenidosCtn')

            titleContenidos.textContent = 'Contenidos'

            parrafoContenidosCtn.appendChild(parrafoContenidos)
            parrafoContenidosCtn.classList.add('parrafoContenidosCtn')

            parrafoContenidos.classList.add('parrafoContenidos')
            parrafoContenidos.textContent = 'Tema 1'

            bloque.setAttribute('data-status','open')

            console.log(bloque1);
        }
        if (infoBloque == '1' && infoStatus == 'open') {
            alert('El bloque 1 ya esta abierto')
        }
    }
})
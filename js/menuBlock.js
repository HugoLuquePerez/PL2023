const menuToggleBtn = document.getElementById('menu-toggle')
menuToggleBtn.addEventListener('click', menuToggle)
const bloques = document.getElementById('bloques')
const heroImg = document.getElementById('heroImg')
const bloque1 = document.getElementById('bloque1Temas')
const bloque2 = document.getElementById('bloque2Temas')


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
const closeMenu = document.getElementById('closeMenu')
const menuCtn = document.getElementById('menuCtn')

bloqueToggleBtn.forEach(bloque => {

    bloque.addEventListener('click', bloqueToggle) 
    
    function bloqueToggle() {
        let infoBloque = bloque.getAttribute('data-info')
        let infoStatus = bloque.getAttribute('data-status')

        if (infoBloque == '1' ) {
            bloques.style.display = 'none'
            bloque1.style.display = 'flex'
            closeMenu.classList.remove('none')
            menuCtn.classList.remove('none')

            bloque.setAttribute('data-status','open')
        }
        if (infoBloque == '2') {
            bloques.style.display = 'none'
            bloque2.style.display = 'flex'
            closeMenu.classList.remove('none')
            menuCtn.classList.remove('none')
        }
    }
})

menuCtn.addEventListener('click', cerrarMenu)
function cerrarMenu() {
    bloque1.style.display = 'none'
    bloque2.style.display = 'none'
    closeMenu.classList.add('none')
    menuCtn.classList.add('none')
}
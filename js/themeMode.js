/* const con los objetos que contien bc */

function toggleTheme() {
    const body = document.body;
    const bcHeader = document.getElementById('bcHeader')
    const themeIcon = document.getElementById('theme-icon');
    const menuToggle = document.getElementById('menu-toggle')
    const bloques = document.querySelectorAll('.bloque')
    const nav = document.querySelectorAll('nav')
    const bloque1 = document.getElementById('bloque1Temas')

    if (body.classList.contains('dark-theme')) {
        // Cambiar de oscuro a claro
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        bcHeader.style.backgroundColor = '#eee'
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.background = 'transparent'
        menuToggle.style.background = '#eee'
        bloque1.classList.remove('dark-theme')
        bloque1.classList.add('light-theme')
        bloques.forEach(bloque => {
            bloque.classList.remove('dark-theme');
            bloque.classList.add('light-theme');
        });
        nav.forEach(nav => {
            nav.classList.add('light-theme')
            nav.classList.remove('dark-theme')
        });
    } else {
        // Cambiar de claro a oscuro
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        bcHeader.style.backgroundColor = '#444'
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.background = 'transparent'
        menuToggle.style.background = '#222'
        bloque1.classList.remove('light-theme')
        bloque1.classList.add('dark-theme')
        bloques.forEach(bloque => {
            bloque.classList.remove('light-theme');
            bloque.classList.add('dark-theme');
        });
        nav.forEach(nav => {
            nav.classList.remove('light-theme');
            nav.classList.add('dark-theme');
        })
    }
}

const themeToggleBtn = document.getElementById('theme-toggle')
themeToggleBtn.addEventListener('click', toggleTheme)

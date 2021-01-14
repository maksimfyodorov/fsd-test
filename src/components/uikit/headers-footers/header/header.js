const header = document.querySelectorAll('.header')

window.onload = function () {
    header.forEach(i => {
        const nav = i.querySelector('.header__nav')
        const navArr = Array.from(nav.children)

        if(i.offsetWidth >= 928) {
            for (let i = 0; i < navArr.length; i++) {
                navArr[i].style.width = navArr[i].offsetWidth + 1 + 'px'
            }
        }
    })  
}

header.forEach(i => {
    const nav = i.querySelector('.header__nav')
    const toggleNav = i.querySelector('.header__toggle-nav')
    const overlay = i.querySelector('.header__overlay')

    toggleNav.addEventListener('click', () => {
        toggleNav.classList.toggle('active')
        nav.classList.toggle('active')
        nav.style.transition = '1s' 
        overlay.classList.toggle('active')
    })

    overlay.addEventListener('click', () => {
        removeClass()
    })

    window.addEventListener('resize', () => {
        removeClass()
    })

    function removeClass() {
        toggleNav.classList.remove('active')
        nav.classList.remove('active')
        overlay.classList.remove('active')
    }
})  
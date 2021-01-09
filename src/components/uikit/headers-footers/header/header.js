const header = document.querySelectorAll('.header')
header.forEach(i => {
    nav = i.querySelector('.header__nav')
    navArr = Array.from(nav.children)
    

    for (let i = 0; i < navArr.length; i++) {
        setTimeout(() => {
            navArr[i].style.width = navArr[i].offsetWidth + 1 + 'px'
        }, 1000)
    }
})

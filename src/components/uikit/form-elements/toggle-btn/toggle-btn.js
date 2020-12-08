const toggleBtns = document.querySelectorAll('.toggle-btn')

Array.from(toggleBtns).forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('toggle')
    })
})

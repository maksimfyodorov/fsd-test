const likeBtns = document.getElementsByClassName('like-btn')

Array.from(likeBtns).forEach(btn => {
        btn.addEventListener('click', function() {
            let count = parseInt(btn.children[1].innerText)

            if (btn.classList.contains('liked')) {
                btn.classList.remove('liked')
                btn.children[0].innerHTML = `<i class="far fa-heart"></i>`
                count -= 1
            } else {
                btn.classList.add('liked')
                btn.children[0].innerHTML = `<i class="fas fa-heart"></i>`
                count += 1
            }
            btn.children[1].innerText = count
    })
});


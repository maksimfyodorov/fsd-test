const rating = document.querySelectorAll('.rating')

Array.from(rating).forEach(function(i) {
    const ratingItems = Array.from(i.children)
    const ratng = i.closest('.rating')
    const starsRated = parseInt(ratng.dataset.starsRated) + 1

    addClss(ratingItems)
    
    i.addEventListener('click', function(e) {
        const ratingItem = e.target.closest('.rating-item')
        if (ratingItem) {
            removeClass(ratingItems, 'current-rated')
            ratingItem.classList.add('rated', 'current-rated')
            isRated(ratingItems)
        }
    })

    i.addEventListener('mouseover', function(e) {
        const ratingItem = e.target.closest('.rating-item')
        if (ratingItem) {
            removeClass(ratingItems, 'rated')
            ratingItem.classList.add('rated')
            mouseOverRatedClass(ratingItems)
            isRated(ratingItems)
        }
    })

    i.addEventListener('mouseout', function() {
        addClass(ratingItems, 'rated')
        mouseOutRatedClass(ratingItems)
        isRated(ratingItems)
    })

    function addClss(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (starsRated === parseInt(arr[i].dataset.rate)) {
                break
            } else {
                arr[i].classList.add('rated')
                isRated(arr)
            }
        }
    }

    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++){
            for (let j = 1; j < arguments.length; j++){
                arr[i].classList.remove(arguments[j])
            }
        }
    }
    
    function addClass(arr) {
        for (let i = 0; i < arr.length; i++){
            for (let j = 1; j < arguments.length; j++){
                arr[i].classList.add(arguments[j])
            }
        }
    }
    
    function mouseOverRatedClass(arr) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('rated')) {
                break
            } else {
                arr[i].classList.add('rated')
            }
        }
    }
    
    function mouseOutRatedClass(arr) {
        for(let i = arr.length - 1; i >= 0; i--) {
            if (arr[i].classList.contains('current-rated')) {
                break
            } else {
                arr[i].classList.remove('rated')
            }
        }
    }
    
    function isRated (arr) {
        arr.forEach(i => {
            if (i.classList.contains('rated')) {
                i.children[0].children[1].style.display = 'block'
            } else {
                i.children[0].children[1].style.display = 'none'
            }
        })
    }
})






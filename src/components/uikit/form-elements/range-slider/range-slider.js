const sliderWrapper = document.querySelectorAll('.slider__wrapper')
Array.from(sliderWrapper).forEach(i => {
    i.onmouseover = function(e) {
        const slider = i.children[1]
        const between =  slider.children[0]
        const btn1 = slider.children[1]
        const btn2 = slider.children[2]
        const rightEdge = slider.offsetWidth - btn1.offsetWidth + 2
        const lowPrice = i.children[0].children[1].children[0]
        const tallPrice = i.children[0].children[1].children[1]
        const maxPrice = 15000

        const btn1CoordsLeft = getCoords(btn1).left
        const btn2CoordsLeft = getCoords(btn2).left
        let lowPriceNum
        let tallPriceNum

        if (btn1CoordsLeft > btn2CoordsLeft) {
            lowPriceNum = tallPrice.innerText
            tallPriceNum = lowPrice.innerText
        } else {
            lowPriceNum = lowPrice.innerText
            tallPriceNum = tallPrice.innerText
        }

        btn1.onmousedown = function(e) {
            const sliderCoords = getCoords(slider)
            const btn1Coords = getCoords(btn1)
            const btn2Coords = getCoords(btn2)
            const left2 = btn2Coords.left - sliderCoords.left
            const shiftX1 = e.pageX - btn1Coords.left
        
            document.onmousemove = function(e) {
                let left1 = e.pageX - shiftX1 - sliderCoords.left
        
                if (left1 < 0) left1 = 0
                if (left1 > rightEdge) left1 = rightEdge
                btn1.style.marginLeft = left1 + 'px'
        
                if (left1 > left2) {
                    between.style.width = (left1 - left2 + 2) + 'px'  
                    between.style.marginLeft = left2 + 'px'  
                } else {
                    between.style.width = (left2 - left1 + 2) + 'px'  
                    between.style.marginLeft = left1 + 'px'
                }
                
                const percent = left1 * 100 / rightEdge
                const changedLowPrice = Math.round(percent * maxPrice / 100)
                lowPrice.innerText = formateNum(changedLowPrice)
                lowPriceNum = lowPrice.innerText
                
                if (strToNum(lowPrice.innerText) >= strToNum(tallPriceNum)) {
                    lowPrice.innerText = formateNum(tallPriceNum) 
                    tallPrice.innerText = formateNum(changedLowPrice) 
                }
            }
        
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null
            }
        }
        
        btn2.onmousedown = function(e) {
            const sliderCoords = getCoords(slider)
            const btn1Coords = getCoords(btn1)
            const btn2Coords = getCoords(btn2)
            const left1 = btn1Coords.left - sliderCoords.left
            const shiftX2 = e.pageX - btn2Coords.left
        
            document.onmousemove = function(e) {
                let left2 = e.pageX - shiftX2 - sliderCoords.left
        
                if (left2 < 0) left2 = 0
                if (left2 > rightEdge) left2 = rightEdge
                btn2.style.marginLeft = left2 + 'px'
        
                if (left1 > left2) {
                    between.style.width = (left1 - left2 + 2) + 'px'  
                    between.style.marginLeft = left2 + 'px'  
                } else {
                    between.style.width = (left2 - left1 + 2) + 'px'  
                    between.style.marginLeft = left1 + 'px'
                }
        
                const percent = left2 * 100 / rightEdge
                const changedTallPrice = Math.round(percent * maxPrice / 100)
                tallPrice.innerText = formateNum(changedTallPrice)
                tallPriceNum = tallPrice.innerText
        
                if (strToNum(tallPrice.innerText) <= strToNum(lowPriceNum)) {
                    tallPrice.innerText = formateNum(lowPriceNum) 
                    lowPrice.innerText = formateNum(changedTallPrice) 
                } 
            }
        
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null
            }
        }
        
        btn1.ondragstart = function() {
            return false
        } 
        
        btn2.ondragstart = function() {
            return false
        }
        
        function getCoords(elem) {
            const box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            }
        }
        
        function strToNum(str) {
            return parseInt(str.split(' ').join(''))
            
        }
        
        function formateNum(num) {
            const str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            return str
        }
    }
})
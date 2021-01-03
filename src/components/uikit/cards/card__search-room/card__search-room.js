const cardSearchRoom = document.querySelectorAll('.card__search-room')

cardSearchRoom.forEach(i => {

    const calendar = i.querySelector('.calendar')
    const calendarDate = calendar.querySelector('.calendar__date')   
    const month = calendarDate.children[0]
    const year = calendarDate.children[1]
    const monthDays = calendar.querySelector('.calendar__days')
    const prevMonth = calendar.querySelector('.calendar__arrow-prev')
    const nextMonth = calendar.querySelector('.calendar__arrow-next')
    const date = new Date

    prevMonth.addEventListener('click', function() {
        date.setMonth(date.getMonth() - 1)
        renderCalendar()
    })

    nextMonth.addEventListener('click', function() {
        date.setMonth(date.getMonth() + 1)
        renderCalendar()
    })

    renderCalendar()

    function renderCalendar() {
        date.setDate(1)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
        
        let firstDayIndex = date.getDay()
        if (firstDayIndex === 0) firstDayIndex = 7
        
        let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
        if (lastDayIndex === 0) lastDayIndex = 7
        
        const nextDays = 7 - lastDayIndex
        let days = ''
        const months = [
                            'Январь',
                            'Февраль',
                            'Март',
                            'Апрель',
                            'Май',
                            'Июнь',
                            'Июль',
                            'Август',
                            'Сентябрь',
                            'Октябрь',
                            'Ноябрь',
                            'Декабрь'
                       ]

        month.textContent = months[date.getMonth()]
        year.textContent = date.getFullYear()

        for(let x = firstDayIndex - 1; x >= 1; x--) {
            days += `<div class="calendar__prev-date">${prevLastDay - x + 1}</div>`
        }

        for (let i = 1; i <= lastDay; i++) {
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days += `<div class="current-date">${i}</div>`
            } else {
                days += `<div>${i}</div>`
            }
        }
        
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="calendar__next-date">${j}</div>`
        }

        monthDays.innerHTML = days
    }


    const monthDaysArray = Array.from(monthDays.children)
    const currentDateIndex = monthDaysArray.findIndex(i => i.matches('.current-date'))
    monthDaysArray.splice(0, currentDateIndex)

    const currentDate = parseInt(i.querySelector('.current-date').textContent)
    let selectedDate 
    let selectedDate1 
    let selectedDate2

    const calendarClearBtn = calendar.querySelector('.calendar__clear-btn')

    const array = []

    monthDays.addEventListener('mouseout', function() {
        if (array.length === 1) {
            monthDaysArray.forEach(i => {
                i.classList.remove('date__bg', 'date__bg-left-half', 'date__bg-right-half')
            })
        }
    })


    monthDaysArray.forEach(function(i) {
        i.style.cursor = 'pointer'

        i.addEventListener('mouseover', function() {
            if (array.length === 0 || array.length === 1) {
                i.classList.add('selected-date')
                selectedDate = parseInt(i.textContent)
                addClass(monthDaysArray)
                removeClass(monthDaysArray)
            } else if (array.length === 2) {
                addClass(monthDaysArray)
                removeClass(monthDaysArray)
            }
        })

        i.addEventListener('mouseout', function() {
            i.classList.remove('selected-date')
        })

        i.addEventListener('click', function() {
            if (array.length === 0) {
                i.classList.add('selected-date-1')
                selectedDate1 = parseInt(i.textContent)
                array.push('date-1 is selected')
            } else if (array.length === 1) {
                i.classList.add('selected-date-2')
                selectedDate2 = parseInt(i.textContent)
                array.push('date-2 is selected')
            } else if (array.length === 2) {
                monthDaysArray.forEach(i => {
                    i.classList.remove('selected-date-1', 'selected-date-2', 'date__bg', 'date__bg-right-half', 'date__bg-left-half')
                })
                array.splice(0, 2)
                selectedDate1 = undefined
                selectedDate2 = undefined
            }
        })

        function addClass(arr) {
            if (selectedDate1 < selectedDate) {
                for (let i = selectedDate1 - currentDate; i < arr.length; i++) {
                    if (arr[i].matches('.selected-date')) {
                        arr[i].classList.add('date__bg-left-half')
                    } else {
                        arr[i].classList.remove('date__bg-left-half')
                        arr[i].classList.add('date__bg')
                    }

                    if (arr[i].matches('.selected-date-1')) {
                        arr[i].classList.add('date__bg-right-half')
                    } else if (arr[i].matches('.selected-date-2')) {
                        arr[i].classList.add('date__bg-left-half')
                    }
                } 

            } else if (selectedDate1 > selectedDate) {
                for (let i = selectedDate1 - currentDate; i >= 0; i--) {
                    if (arr[i].matches('.selected-date')) {
                        arr[i].classList.add('date__bg-right-half')
                    } else {
                        arr[i].classList.remove('date__bg-right-half')
                        arr[i].classList.add('date__bg')
                    }

                    if (arr[i].matches('.selected-date-1')) {
                        arr[i].classList.add('date__bg-left-half')
                    } else if (arr[i].matches('.selected-date-2')) {
                        arr[i].classList.add('date__bg-right-half')
                    }
                }
            }
        }


        function removeClass(arr) {
            if (selectedDate1 < selectedDate) {
                for (let i = arr.length - 1; i >= selectedDate1 - currentDate; i--) {
                    if (arr[i].matches('.selected-date') || arr[i].matches('.selected-date-2')) {
                        break
                    } else {
                        arr[i].classList.remove('date__bg')
                    }
                }

                for (let i = 0; i < selectedDate1 - currentDate; i++) {
                    if (arr[i].matches('.selected-date-1')) {
                        break
                    } else {
                        arr[i].classList.remove('date__bg-right-half')
                    }
                }

            } else if (selectedDate1 > selectedDate) {
                for (let i = 0; i < selectedDate1 - currentDate; i++) {
                    if (arr[i].matches('.selected-date') || arr[i].matches('.selected-date-2')) {
                        break
                    } else {
                        arr[i].classList.remove('date__bg')
                    }
                }

                for (let i = arr.length - 1; i >= selectedDate1 - currentDate; i--) {
                    if (arr[i].matches('.selected-date-1')) {
                        break
                    } else {
                        arr[i].classList.remove('date__bg-left-half')
                    }
                }

            } else if (selectedDate1 == selectedDate || selectedDate1 == selectedDate2) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i].classList.remove('date__bg-left-half', 'date__bg-right-half' , 'date__bg')
                }
            } 
        }
    })

    calendarClearBtn.addEventListener('click', function() {
        clearCalendar()
    })

    function clearCalendar() {
        monthDaysArray.forEach(i => {
            i.classList.remove('date__bg', 'date__bg-left-half', 'date__bg-right-half', 'selected-date-1', 'selected-date-2')
            selectedDate1 = undefined
            selectedDate2 = undefined
            array.splice(0)
        })
    }
    




























    const textFieldSmall = i.getElementsByClassName ('text-field small')
    const txtFieldSmall = Array.from(textFieldSmall)
    const dates = i.querySelector('.card__search-room__dates')
    const backdrop = i.querySelector('.card__search-room__backdrop')
    const arrivalDate = txtFieldSmall[0].children[0]
    const departureDate = txtFieldSmall[1].children[0]
    const calendarApplyBtn = calendar.querySelector('.calendar__apply-btn')

    txtFieldSmall.forEach(i => {
        i.children[0].setAttribute('readonly', '')
        i.addEventListener('click', () => {
            dates.classList.toggle('calendar__open')
        })
    })

    calendarApplyBtn.addEventListener('click', () => {

        if (selectedDate1 && selectedDate2) {
            const mnth = date.getMonth() + 1
            let month = mnth.toString()
            if (month.length === 1) {
                month = 0 + month
            }

            if (selectedDate1 < selectedDate2) {
                arrivalDate.value = `${selectedDate1}.${month}.${date.getFullYear()}`
                departureDate.value = `${selectedDate2}.${month}.${date.getFullYear()}`
            } else {
                arrivalDate.value = `${selectedDate2}.${month}.${date.getFullYear()}`
                departureDate.value = `${selectedDate1}.${month}.${date.getFullYear()}`
            }

            clearCalendar()
            dates.classList.remove('calendar__open')
        }

        
        
    })


    backdrop.addEventListener('click', () => {
        dates.classList.remove('calendar__open')
    })

})







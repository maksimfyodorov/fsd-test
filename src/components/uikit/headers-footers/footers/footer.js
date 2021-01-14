const landingFooter = document.querySelector('.landing__footer')
const template1 = `
                        <div class="footer small"><img src="./img/uikit/headers-footers/logo-title.svg" alt="Logo">
                            <p>Copyright &copy; 2018 Toxin отель. Все права защищены.</p>
                            <div class="footer__social-media"><a href="#"><img src="./img/uikit/headers-footers/twitter.svg" alt="Twitter-icon"></a><a href="#"><img src="./img/uikit/headers-footers/fb.svg" alt="Facebook-icon"></a><a href="#"><img src="./img/uikit/headers-footers/instagram.svg" alt="Instagram-icon"></a>
                            </div>
                        </div>
            
                    `
const template2 = `
    <div class="footer">
    <div class="footer__main-wrap">
        <div class="container">
        <div class="footer__main">
            <div class="footer__logo">
            <div class="footer__img"><img src="./img/uikit/headers-footers/logo-title.svg" alt="Logo"></div>
            <div class="footer__text">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</div>
            </div>
                <div class="footer-column">
                <div class="footer-column__title"><span class="label-text">навигация</span>
                </div>
                <div class="footer-column__links"><a href="#">О нас</a><a href="#">Новости</a><a href="#">Служба поддержки</a><a href="#">Услуги</a>
                </div>
                </div>
                <div class="footer-column">
                <div class="footer-column__title"><span class="label-text">О нас</span>
                </div>
                <div class="footer-column__links"><a href="#">О сервисе</a><a href="#">Наша команда</a><a href="#">Вакансии</a><a href="#">Инвесторы</a>
                </div>
                </div>
                <div class="footer-column">
                <div class="footer-column__title"><span class="label-text">Служба поддержки</span>
                </div>
                <div class="footer-column__links"><a href="#">Соглашения</a><a href="#">Сообщества</a><a href="#">Связь с нами</a>
                </div>
                </div>
            <div class="footer__subscribe"><span class="label-text">Подписка</span>
            <p>Получайте специальные предложения и новости сервиса</p>
                <div class="text-field__wrap">  
                    <div class="text-field__title none"><span class="label-text"></span>
                    </div>
                    <div class="text-field subscription medium">
                    <input class="input" type="text" placeholder="Email"><span class="set-input-width"></span><span>...</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="container">
        <div class="footer__bottom">
        <div class="footer__copyright">Copyright &copy; 2018 Toxin отель. Все права защищены.</div>
        <div class="footer__social-media"><a href="#"><img src="./img/uikit/headers-footers/twitter.svg" alt="Twitter-icon"></a><a href="#"><img src="./img/uikit/headers-footers/fb.svg" alt="Facebook-icon"></a><a href="#"><img src="./img/uikit/headers-footers/instagram.svg" alt="Instagram-icon"></a>
        </div>
        </div>
    </div>
    </div>
                    `
footerChange(landingFooter) 

window.addEventListener('resize', () => {
    footerChange(landingFooter)
})

function footerChange(footer) {
    if (footer.offsetWidth <= 768) {
        footer.innerHTML = template1
    } else if (footer.offsetWidth > 768) {
        footer.innerHTML = template2
    }
}







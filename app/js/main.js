$(function(){

    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-line').toggleClass('header__btn-line--active');
    });

    $('.reservation__input--datepicker1').datetimepicker({
        format:'Y.d.m',
        onShow:function( ct ){
            this.setOptions({
                maxDate:$('.reservation__input--datepicker1').val()?$('.reservation__input--datepicker1').val():false
            })
        },
        timepicker:false
    });
    $('.reservation__input--datepicker2').datetimepicker({
        format:'Y.d.m',
        onShow:function( ct ){
            this.setOptions({
                minDate:$('.reservation__input--datepicker1').val()?$('.reservation__input--datepicker1').val():false
            })
        },
        timepicker:false
    });

    $('.place-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 720,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.packages-destinations__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg class="packages-destinations__arrow"><use xlink:href="images/sprite.svg#chevron-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="packages-destinations__arrow"><use xlink:href="images/sprite.svg#chevron-right"></use></svg></button>'
    });

    $('.honeymoon-slider__star').rateYo({
        starWidth: "13px",
        normalFill: "#ccc",
        ratedFill: "#ffc001",
        readOnly: true,
        spacing: "7px"
    });

    $('.honeymoon-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 720,
                settings: {
                    slidesToShow: 1
                }
            }
        ]    
    });

    $('.footer__holder').on('click', function(){
        $(this).children('.footer__icon').toggleClass('footer__icon--active');
        $(this).next().slideToggle();
    });


    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('discount-clock', deadline);

    wow = new WOW(
        {
            boxClass: 'wow',   
            animateClass: 'animate__animated', 
            offset: 0,         
            mobile: true,     
            live: true      
        }
    )
    wow.init();

    $('.menu__link, .logo').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

        // !
        $('.menu').removeClass('menu--active');
        $('.header__btn-line').removeClass('header__btn-line--active');
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 30) {
            $('.header').addClass('header--active');
            $('.header__top').addClass('header__top--hidden');
            $('.header__bottom').addClass('header__bottom--active');
            $('.header__logo').addClass('header__logo--small');

        } else {
            $('.header').removeClass('header--active');
            $('.header__top').removeClass('header__top--hidden');
            $('.header__bottom').removeClass('header__bottom--active');
            $('.header__logo').removeClass('header__logo--small');

        }
    });

    var mixer = mixitup('.reservation__inner');
    mixer.filter('.hotel');
});
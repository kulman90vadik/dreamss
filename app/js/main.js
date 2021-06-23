$(function(){

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
        slidesToScroll: 1
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




    var mixer = mixitup('.reservation__inner');
    mixer.filter('.hotel');
});
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


    var mixer = mixitup('.reservation__inner');
    mixer.filter('.hotel');
});
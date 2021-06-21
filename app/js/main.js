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



    var mixer = mixitup('.reservation__inner');
    mixer.filter('.hotel');
});
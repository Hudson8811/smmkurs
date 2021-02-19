$(document).ready(function () {
    $('.tabs__list a').on('click',function (){
        event.preventDefault();
        $('.tabs__list li').removeClass('active');
        $(this).parent().addClass('active');
        var cat = $(this).data('cat');
        if (cat) {
            $('.tab-items .kurses__kurs').hide();
            $('.tab-items .kurses__kurs[data-cat="'+cat+'"]').show();
        } else {
            $('.tab-items .kurses__kurs').show();
        }
    });


    $('.kurs-page__menu a').on('click',function (){
        event.preventDefault();
        if ($(window).width() > 769){
            var tab = $(this).data('tab');
            $('.kurs-page__menu li').removeClass('active');
            $('.kurs-page__menu li a[data-tab="'+tab+'"]').parent().addClass('active');
            if (tab) {
                $('.kurs-page__tab').removeClass('active');
                $('.kurs-page__tab[data-tab="'+tab+'"]').addClass('active');
            }
        } else {
            $('.kurs-head').addClass('active');
        }
    });

    $('.kurs-head a').on('click',function (){
        event.preventDefault();
        var tab = $(this).data('tab');
        $('.kurs-page__menu li').removeClass('active');
        $('.kurs-page__menu li a[data-tab="'+tab+'"]').parent().addClass('active');
        $('.kurs-head').removeClass('active');
        if (tab) {
            $('.kurs-page__tab').removeClass('active');
            $('.kurs-page__tab[data-tab="'+tab+'"]').addClass('active');
        }
    });

    $('.header__burger').on('click',function (){
        event.preventDefault();
        $(this).toggleClass('active');
    });


    $('.input-block input.js-noempty').on('change paste',function (){
        if ($(this).val()) {
            $(this).addClass('success');
        } else {
            $(this).removeClass('success');
        }
    });

    $('.js-name-edit').on('click',function (){
        if ($('.js-name-input').prop('readonly') ){
            $('.js-name-input').prop('readonly',false);
            $('.js-name-edit span').html('Сохранить');
        } else {
            $('.js-name-input').prop('readonly',true);
            $('.js-name-edit span').html('Изменить имя');
        }
    });

    $('.cabinet-page__element-edit a:not(.js-change-pass)').on('click',function (){
        var input = $(this).parent().siblings('.cabinet-page__element-input').find('input');
        if (input.prop('readonly') ){
            input.prop('readonly',false);
            $(this).html('Сохранить');
        } else {
            input.prop('readonly',true);
            $(this).html('Изменить');
        }
    });

    $('.cabinet-page__element-edit a.js-change-pass').on('click',function (){
        var input = $('input[name="password"]');
        var input2 = $('input[name="password2"]');
        if (input.prop('readonly') ){
            input.prop('readonly',false);
            input2.prop('readonly',false);
            $(this).html('Сохранить');
            $('.cabinet-page__element--confirm').show();
        } else {
            input.prop('readonly',true);
            input2.prop('readonly',true);
            $(this).html('Изменить');
            $('.cabinet-page__element--confirm').hide();
        }
    });

    var $inputs = $('.js-auto-width');

    function resizeForText(text) {
        var $this = $(this);
        if (!text.trim()) {
            text = $this.attr('placeholder').trim();
        }
        var $span = $this.parent().find('span');
        $span.text(text);
        var $inputSize = $span.width();
        $this.css("width", $inputSize);
    }

    $inputs.find('input').keypress(function (e) {
        if (e.which && e.charCode) {
            var c = String.fromCharCode(e.keyCode | e.charCode);
            var $this = $(this);
            resizeForText.call($this, $this.val() + c);
        }
    });

    // Backspace event only fires for keyup
    $inputs.find('input').keyup(function (e) {
        if (e.keyCode === 8 || e.keyCode === 46) {
            resizeForText.call($(this), $(this).val());
        }
    });

    $inputs.find('input').each(function () {
        var $this = $(this);
        resizeForText.call($this, $this.val())
    });



    if ($('.arctic-slider__container').length > 0){
        $('.arctic-slider__container').slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }

});
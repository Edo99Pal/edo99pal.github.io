$(document).ready(function () {
    AOS.init();

    var $menu = $('.sidebar > ul').children();
    var $content = $('.content > div');
    var $items = $('.home .item');
    var $scores = $('.cv .actual');
    var $scores2 = $('.skills .actual');
    var $hambuger = $('.sidebar-button');
    var $form = $('.form > form > div');
    var $formEls = $('.contacts li');
    var $nextStep = $('.step');
    var $input = $('.form input:not([type=submit])');
    var $submit = $('.form input[type=submit]');
    $menu.eq(0).addClass('active');
    $content.hide();
    $content.eq(0).addClass('active');
    $content.eq(0).fadeIn(250);
    $menu.on('mouseleave', function(){
        $(this).animate({
            'font-size': '1em',
            'font-weight': 400
        }, 200);
    });
    function showContent() {
        for (var i = 0; i < $content.length; i++) {
            if ($content.eq(i).hasClass('active')) {
                $content.eq(i).fadeIn(500);
                if (i == 1) {
                    $scores.addClass('animate');
                }
                if (i == 2) {
                    AOS.refresh();
                    if ($(window).width() > 767) {
                        for (var i = 0; i < $scores2.length; i++) {
                            $scores2.eq(i).delay(500 * i).queue(function (next) {
                                $(this).addClass('animate');
                                next();
                            });
                        }
                    } else {
                        $scores2.addClass('animate');
                    }
                }
                if (i == 3) {
                    $('.form').fadeIn(1000);
                }
            }
        }
    }

    function hideContent() {
        for (var i = 0; i < $content.length; i++) {
            if ($content.eq(i).hasClass('active')) {
                $content.eq(i).removeClass('active');
                $content.eq(i).hide();
            }
        }
    }
    $menu.on('click', function () {
        var index = $(this).index();
        for (var i = 0; i < $menu.length; i++) {
            if ($menu.eq(i).hasClass('active')) {
                $menu.eq(i).removeClass('active');
                $(this).addClass('active');
                hideContent();
                $content.eq(index).addClass('active');
                showContent();
                break;
            }
        }
    });
    $hambuger.on('click', function () {
        $('.sidebar').css({
            'display': 'block',
            'z-index': '1',
            'width': '80vw'
        });
        $('.content').css('display', 'none');
    });
    if ($(window).width() < 767) {
        $menu.on('click', function () {
            $('.sidebar').css('display', 'none');
            $('.content').css('display', 'block');
        });
        $('.sidebar-close').on('click', function () {
            $('.sidebar').css('display', 'none');
            $('.content').css('display', 'block');
        });
        $items.removeAttr("data-aos-delay");
    }
    $form.hide();
    $form.eq(0).fadeIn(500);
    $formEls.eq(0).addClass('active');
    var index = 0;
    $('.alert').hide();
    $nextStep.on('click', function () {
        if($input.eq(index).val()) {
            $form.eq(index).fadeOut(500);
            $formEls.eq(index).removeClass('active')
            $formEls.eq(index + 1).addClass('active');
            $form.eq(index + 1).delay(500).fadeIn(500);
            index++;
            $('.alert').hide();
        }
        else {
            $('.alert').fadeIn(500);
        }
    });
    $submit.on('click', function(e) {
        if(!$('textarea').val()){
        e.preventDefault();
        $('.alert').fadeIn(500);    
    }
    });
});

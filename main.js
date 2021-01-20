$(document).ready(function () {
    AOS.init();

    var $menu = $('.sidebar > ul').children();
    var $content = $('.content > div');
    var $items = $('.home .item');
    var $scores = $('.cv .actual');
    var $scores2 = $('.skills .actual');
    var $hambuger = $('.sidebar-button');
    $menu.eq(0).addClass('active');
    $content.hide();
    $content.eq(0).addClass('active');
    $content.eq(0).fadeIn(250);

    function showContent() {
        for (var i = 0; i < $content.length; i++) {
            if ($content.eq(i).hasClass('active')) {
                $content.eq(i).fadeIn(250);
                if (i == 1) {
                    $scores.addClass('animate');
                }
            }
            if (i == 2) {
              AOS.refresh();
                for (var i = 0; i < $scores2.length; i++) {
                    $scores2.eq(i).delay(500 * i).queue(function(next){
                        $(this).addClass('animate');
                        next();
                    });
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
    $hambuger.on('click', function(){
       $('.sidebar').css({
           'display': 'block',
           'z-index': '1',
           'width': '80vw'});
       $('.content').hide();
    });
    if($(window).width() < 767) {
        $menu.on('click', function() {
            $('.sidebar').css('display', 'none');
            $('.content').show();
        });
        $('.sidebar-close').on('click', function(){
            $('.sidebar').css('display', 'none');
            $('.content').show();
        });
        $items.removeAttr("data-aos-delay");
    }
});

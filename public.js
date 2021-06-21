$(function () {
    snav();

    if (browserWidth > 1200) {
        topnav();
        cnav();
    }
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        $(".nav").toggleClass('menuOpen')
        $(".pusher").toggleClass('menuOpen')
        $(".subpusher").toggleClass('menuOpen')
        $(".navMark").stop().fadeToggle(600);
    })

    $(".fixedShare").mouseenter(function () {
        $(".ShareIcon").stop().fadeIn()
    }).mouseleave(function () {
        $(".ShareIcon").stop().fadeOut()
    })

    $(".fixedShare").click(function () {
        $(".ShareIcon").stop().fadeToggle()
    })

    // $(".WeServiceItem").click(function () {
    //     $(this).css({"width":"46%","height":"330px","background":"rgba(253,191,80,1)"}).siblings().css({"width":"27%","height":"auto","background":"#ffffff"});
    // })

    // $(".directoryNav li").eq(0).click(function () {
    //     $(this).addClass("active").siblings(".directoryNav li").removeClass("active");
    //     $(".directoryOne").addClass("active").siblings(".directoryView").removeClass("active")
    // })
    // $(".directoryNav li").eq(1).click(function () {

    //     $(this).addClass("active").siblings(".directoryNav li").removeClass("active");
    //     $(".directoryTwo").addClass("active").siblings(".directoryView").removeClass("active")
    // })
    // $(".directoryNav li").eq(2).click(function () {
    //     $(this).addClass("active").siblings(".directoryNav li").removeClass("active");
    //     $(".directoryThree").addClass("active").siblings(".directoryView").removeClass("active")
    // })
    // $(".directoryNav li").eq(3).click(function () {
    //     $(this).addClass("active").siblings(".directoryNav li").removeClass("active");
    //     $(".directoryFour").addClass("active").siblings(".directoryView").removeClass("active")
    // })

   
    if (browserWidth < 1200) {
        $('.nav li span').click(function () {
            $(this).siblings('.dropdown').css({ 'right': 0 })
        })
        $('.dropdown-back').click(function (params) {
            $(this).parents(".dropdown").css({ 'right': '-100%' })
        })
        $(".dropdown").siblings("span").css("display", "block")
    }
    
    var serviceDelay = 0;
    for (var index = 1; index < $(".serviceItem").length; index++) {
        serviceDelay += 300;
        $(".serviceItem").eq(index).attr("data-aos-delay", serviceDelay)
    }
    
    var abDelay = 0;
    for (var index = 1; index < $(".abItem").length; index++) {
        abDelay += 300;
        $(".abItem").eq(index).attr("data-aos-delay", abDelay)
    }

})

var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var snav = function () {
    $(".nav>ul>li").mouseenter(function () {
        $(this).children(".dropdown").stop().slideDown();
        $(this).siblings().children(".dropdown").css("display", "none");
    })
    $(".nav>ul>li").mouseleave(function () {
        $(".dropdown").stop().slideUp();
    })
}

var topnav = function () {
    var top;
    window.onscroll = function () {
        top = document.body.scrollTop || document.documentElement.scrollTop
        if (top <= 2) {
            $('.header').css("background", "0")
            $('.header').css("padding", "10px 0")
            $('.dropdown').css("margin-top", "10px")
            
            // $('.nav>ul>li>a').css("color", "#ffffff")
            // $('.logo img').attr("src", '/wp-content/themes/dg/images/idxlogo.png')
        } else {
            $('.header').css("background", "rgba(0,0,0,.6)")
            $('.header').css("padding", "5px 0")
            $('.dropdown').css("margin-top", "5px")
            // $('.nav>ul>li>a').css("color", "#323232")
            // $('.logo img').attr("src", "/wp-content/themes/dg/images/logo.png")
        }
    }
}

var cnav = function () {
    $(".nav>ul>li").mouseenter(function () {
        $(this).children(".dropdown").stop().slideDown();
        $(this).siblings().children(".dropdown").css("display", "none");
        $('.header').css("background", "rgba(0,0,0,.6)")
        // $('.nav>ul>li>a').css("color", "#000000")
        // $('.logo img').attr("src", "/wp-content/themes/dg/images/logo.png")

    })
    $(".nav>ul>li").mouseleave(function () {
        $(".dropdown").stop().slideUp();
    })
    $(".nav").mouseleave(function () {
        if (parseInt($(".header").css("height")) === 95) {
            return;
        } else {
            $('.header').css("background", "0")
            // $('.nav>ul>li>a').css("color", "#ffffff")
            // $('.logo img').attr("src", "/wp-content/themes/dg/images/idxlogo.png")
        }
    })
}

function closebg() {
    $('.bigPic').slideUp(500, function () {
        $('.bg').removeClass('translucent');
    });
}
AOS.init({
    duration: 1500,
    easing: "ease-out-back",
    // disable: window.innerWidth <= 1024,
    once: true,
});
/*
General Notes and Coming Improvements:
Why are there errors? Even though the code functions perfectly?
-Dont forget to remove this when the website is complete!-
*/
$(document).ready(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $("nav").removeClass("navTransparent");
            $("nav").addClass("navColor");
            $("#register-button-header").css("color", "#EB677B");
            $("#discord-button-header").css("color", "#86A8BD");
            $("footer").removeClass("footer-white");
            $("footer").addClass("footer-colored");
        }
        else{
            $("nav").removeClass("navColor");
            $("nav").addClass("navTransparent");
            $("#register-button-header").css("color", "#FFF0EA");
            $("#discord-button-header").css("color", "#FFF0EA");
            $("footer").removeClass("footer-colored");
            $("footer").addClass("footer-white");
        }
    })
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});

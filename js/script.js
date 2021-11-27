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
            $("#register-button-header").css("color", "#fc9867");
            $("#discord-button-header").css("color", "#ffd866");
            $("footer").removeClass("footer-white");
            $("footer").addClass("footer-colored");
        }
        else{
            $("nav").removeClass("navColor");
            $("nav").addClass("navTransparent");
            $("#register-button-header").css("color", "#ffffff");
            $("#discord-button-header").css("color", "#ffffff");
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

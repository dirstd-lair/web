$(document).ready(function() {
    $('.menu').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu-panel').removeClass('open')
            $('.menu-panel').toggleClass('close')
            $('.tit').toggleClass('close')
            $(this).toggleClass('close');
            $('.main-header').removeClass('open')
            $('.main-header').toggleClass('close')  
        }
        else {
            $(this).removeClass('close');
            $('.menu-panel').removeClass('close')
            $('.tit').removeClass('close')
            $('.menu-panel').toggleClass('open')
            $(this).toggleClass('open');

            $('.main-header').removeClass('close')
            $('.main-header').toggleClass('open')
        }
        
        $('.tit').toggleClass('open')
    });
});
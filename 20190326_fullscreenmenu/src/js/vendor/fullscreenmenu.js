$('.fsm-toggle').click(function() {
    $(this).toggleClass('fsm-active');
    $('.fsm-overlay').toggleClass('fsm-open');
    $('.fsm-animate').toggleClass('fsm-animationactive');
});
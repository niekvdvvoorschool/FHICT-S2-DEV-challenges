var fsm_toggle = document.getElementById('fsm-toggle');
var fsm_overlay = document.getElementById('fsm-overlay');

function FSMopen() {
    fsm_toggle.classList.toggle('fsm-active');
    fsm_overlay.classList.toggle('fsm-open');
}
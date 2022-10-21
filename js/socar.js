const menu = document.querySelector('.trigger_menu');
const nav = document.querySelector('.menu_sub');
const header_bg = document.querySelector('.header_bg');
const bi = document.querySelector('.header');
menu.onclick = function () {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    header_bg.classList.toggle('active');
    bi.classList.toggle('active');
}
header_bg.onclick = function () {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    header_bg.classList.toggle('active');
    bi.classList.toggle('active');
}

const menu_event_1 = document.querySelector('.menuBox_1');
const menu_event_2 = document.querySelector('.menuBox_2');
const menuEvent = document.querySelectorAll('.main_3 div');
menu_event_1.onclick = function () {
    menuEvent[0].classList.add('active');
    menuEvent[1].classList.remove('active');
    menu_event_1.classList.add('active');
    menu_event_2.classList.remove('active');
}
menu_event_2.onclick = function () {
    menuEvent[0].classList.remove('active');
    menuEvent[1].classList.add('active');
    menu_event_1.classList.remove('active');
    menu_event_2.classList.add('active');
}


const topsidebar = document.querySelector('.header')
$(window).on('mousewheel', function (e) {
    var wheel = e.originalEvent.wheelDelta;
    if (wheel > 0) {
        //올릴때
        topsidebar.style.display = 'flex';
    } else {
        //내릴때
        topsidebar.style.display = 'none';
    }
});


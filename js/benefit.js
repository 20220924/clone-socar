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


const header = document.querySelector('.header');
const menu = document.querySelector('.btn>button');
const nav = document.querySelector('.menu_sub nav');
const header_bg = document.querySelector('.header_bg');
const bi = document.querySelector('.bi');
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


let h = 0;
let offset;

$(window).on('mousewheel',function(){
    let delta = event.wheelDelta;
    h = pageYOffset;
    console.log(`현재위치 : ${h}`);
    console.log(delta);
    if(delta < 0){
        header.classList.remove('active');
    }else{
        header.classList.add('active');
        bi.classList.add('active');
    }
    if(h<=100){
        $('.header').css('background-color','rgba(255, 255, 255,0.001)');
        $('.header').css('border-bottom','0px');
        $('.btn button span').css('background-color','#fff')

        bi.classList.remove('active');

    }else{
        $('.header').css('background-color','rgba(255, 255, 255,0.8)');
        $('.header').css('border-bottom','1px solid #ddd');
        $('.btn button span').css('background-color','rgb(0, 184, 255)')


    }
});



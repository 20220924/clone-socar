function init() {

    const elFigure = document.querySelectorAll('.main_1 div:nth-of-type(2)');
    let sd = { y: 0, y2: 0, state: true }
    
    let offset = [];
    elFigure.forEach((ele) => {
        offset.push(ele.offsetTop - window.innerHeight * 0.5);
    })
    
    
    window.addEventListener('scroll', () => {
    
        sd.y = window.pageYOffset
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
    
        if (sd.state) {
            //내림
    
            elFigure.forEach((ele, idx) => {
                if (window.pageYOffset > offset[idx]) {
                    elFigure[idx].classList.add('active');
                }
            })
        }
    })
    }
    window.addEventListener('load', init);
    

const menu_bg = document.querySelector('.menu_bg');
const menu=document.querySelector('.header button');

$('.header button').on('click',function(){
    menu_bg.classList.toggle('active');
    menu.classList.toggle('active');
})



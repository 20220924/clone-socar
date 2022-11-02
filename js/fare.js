function init() {

    const elFigure = document.querySelectorAll('.main_1 a');
    let sd = { y: 0, y2: 0, state: true }
    
    let offset = [];
    elFigure.forEach((ele) => {
        offset.push(ele.offsetTop - window.innerHeight * 0.8);
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
    






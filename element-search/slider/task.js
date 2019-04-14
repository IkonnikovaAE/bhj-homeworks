let activeImg = 0;

function slider(id) {
    id = Number(id);
    const arrowPreview = document.getElementsByClassName('slider__arrow_prev');
    const arrowNext = document.getElementsByClassName('slider__arrow_next');
    const sliderItem = Array.from(document.getElementsByClassName('slider__item'));
    const sliderDots = Array.from(document.getElementsByClassName('slider__dot'));
    const dot = document.getElementById(id);

    sliderItem[0].className+=' slider__item_active';          
    sliderDots[0].className += ' slider__dot_active';

    if(dot !== null) {
        document.getElementById(activeImg).className = 'slider__dot';
        sliderItem[activeImg].className = 'slider__item';
        dot.className += ' slider__dot_active';
        activeImg = id;
        sliderItem[activeImg].className+=' slider__item_active';        
    }    

    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].onclick = function() {
            sliderItem[activeImg].className = 'slider__item';
            sliderDots[activeImg].className = 'slider__dot';
            activeImg = i;
            sliderItem[activeImg].className +=' slider__item_active';          
            sliderDots[activeImg].className += ' slider__dot_active';
            }
    }

    arrowNext[0].onclick = function() {
        sliderItem[activeImg].className = 'slider__item';
        sliderDots[activeImg].className = 'slider__dot';
        (activeImg === sliderItem.length-1) ? activeImg -= sliderItem.length-1 : activeImg+=1;
        sliderItem[activeImg].className+=' slider__item_active';          
        sliderDots[activeImg].className += ' slider__dot_active';
    }

    arrowPreview[0].onclick = function() {
        sliderItem[activeImg].className = 'slider__item';
        sliderDots[activeImg].className = 'slider__dot';
        (activeImg === 0) ? activeImg += sliderItem.length-1 : activeImg-=1; 
        sliderItem[activeImg].className +=' slider__item_active';
        sliderDots[activeImg].className += ' slider__dot_active';        
    }
}

slider();
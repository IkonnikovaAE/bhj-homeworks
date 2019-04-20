function rotator() {
    const rotatorСase = document.querySelectorAll('.rotator__case');
    let i = 0;
    let speedAttr = Number(rotatorСase[i].dataset.speed);
    let colorAttr =rotatorСase[i].dataset.color;
    rotatorСase[i].style.color = colorAttr;
    
    let handler = function() {
        rotatorСase[i].classList.toggle('rotator__case_active');
        (i === Array.from(rotatorСase).length-1) ? i = 0 : i++;
        speedAttr =Number(rotatorСase[i].dataset.speed);
        colorAttr =rotatorСase[i].dataset.color;
        rotatorСase[i].classList.toggle('rotator__case_active');
        rotatorСase[i].style.color = colorAttr;
        setTimeout(handler,speedAttr);
    }
    setTimeout(handler,speedAttr);
}

rotator();
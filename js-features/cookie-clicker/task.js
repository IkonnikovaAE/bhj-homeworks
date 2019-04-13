const element = document.getElementById("cookie");
const output = document.getElementById("clicker__counter");
let secondCounter = output.textContent;
let time = new Date();


function clicker() {
    let last = new Date()
    let difference = last - time;
    let speed = (1 / difference) * 1000;
    secondCounter++;
    output.innerHTML = secondCounter.toString()  + `<br>Скорость клика: ${Math.round(speed*100)/100}`;
    element.width = 300;
    let id = setTimeout(function(){element.width = 200}, 100);

    return  time = new Date();
};


element.onclick = clicker;
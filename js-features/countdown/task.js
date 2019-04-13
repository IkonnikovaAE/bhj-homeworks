const output = document.getElementById("timer");
let secondTimer = output.textContent;
output.textContent = format(secondTimer);


const addText = function () {
    secondTimer -= 1;
    if (secondTimer <= 0) {
        alert('Вы выйграли');
        clearInterval(inervalID);
    }
    output.textContent = format(secondTimer);
}

function format(seconds) {
  let s = (seconds % 60).toString();
  let m = Math.floor(seconds / 60 % 60).toString();
  let h = Math.floor(seconds / 60 / 60 % 60).toString();
  return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
}

const inervalID = setInterval(addText, 1000);
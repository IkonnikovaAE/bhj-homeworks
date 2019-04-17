class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {	
	StartTimer ("timerId", this);
    let index = 0;
    const that = this;
    document.onkeypress = function(event) {
      const symbol = document.body.querySelectorAll(".symbol");
      let arr = Array.from(symbol);
      if (arr[index].textContent == event.key.toLowerCase()) {
        index += 1;
        StopTimer ("timerId");
        that.success();
        if (index  == (arr.length)){
          index = 0;
        }
      } else {
      	StopTimer ("timerId");
        that.fail()
      }
    }
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

function StartTimer (timerId, that) {
	const allSymbol = document.body.querySelectorAll(".symbol");
    let arrSymbol = Array.from(allSymbol);
    timerId = setTimeout(function() {that.fail()}, arrSymbol.length*1000);
}

function StopTimer (timerId) {
	clearTimeout(timerId)
}

new Game(document.getElementById('game'))


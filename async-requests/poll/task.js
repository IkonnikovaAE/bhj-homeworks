let httpRequesting = new XMLHttpRequest();
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

httpRequesting.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
httpRequesting.send();
httpRequesting.addEventListener('readystatechange',()=>{
    if(httpRequesting.readyState == 4 && httpRequesting.status == 200){
        let response = JSON.parse(httpRequesting.responseText);
        pollTitle.textContent = response.data.title;

        for(let i=0;i<response.data.answers.length;i++){
            pollAnswers.innerHTML +=`
            <button class="poll__answer">
                ${response.data.answers[i]}
            </button>`;
        }

        let answers = Array.from(document.querySelectorAll('.poll__answer'));
        answers.forEach((button)=>{
            button.addEventListener('click',()=>{
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
})
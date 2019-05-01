let hasTooltip = document.querySelectorAll('.has-tooltip');
let titleElem = document.querySelector('.tooltip');

if (titleElem) {
    titleElem.classList.remove('tooltip_active');
}


for (let has of hasTooltip) {
    has.addEventListener('click', function (event) {
        event.preventDefault();
        titleElem.classList.add('tooltip_active');
        titleElem.innerText = event.target.title;

        titleElem.style.left = setPosition(event.target.getBoundingClientRect())[0]  +  'px';
        titleElem.style.top = setPosition(event.target.getBoundingClientRect())[1]  + 'px';
    })
}

function setPosition (coords) {
    
    let left = coords.left + (event.target.offsetWidth - titleElem.offsetWidth) / 2;
    if (left < 0) left = 0;
    
    let top = coords.top - titleElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + event.target.offsetHeight + 5;
        
    }

    return([left, top])
}
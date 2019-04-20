const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');


dropdownList.classList


dropdownValue.addEventListener('click', show);

function show(event) {

    if (dropdownList.className === 'dropdown__list') {
        dropdownList.className = 'dropdown__list dropdown__list_active';
    } else {
        dropdownList.className = 'dropdown__list';
    }

}

for (let link of links) {
    link.addEventListener('click', rename);
}

function rename(event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    dropdownList.className = 'dropdown__list';
}
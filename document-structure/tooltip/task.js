let showTitle;

let hasTooltip = document.querySelectorAll('.has-tooltip');
for (let has of hasTooltip) {
    has.addEventListener('click', function (event) {
       
        if (showTitle) {
            document.body.removeChild(showTitle);
            showTitle = null;
            return
        }
        
        let target = event.target;
        let title = target.getAttribute('data-title');
        if (!title) return;
        let titleElem = document.createElement('div');
        titleElem.className = 'tooltip';
        titleElem.innerHTML = title;
        target.after(titleElem);

        let coords = target.getBoundingClientRect();
        let left = coords.left + (target.offsetWidth - titleElem.offsetWidth) / 2;
        if (left < 0) left = 0;
        
        let top = coords.top - titleElem.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
            
        }
        titleElem.style.left = left + 'px';
        titleElem.style.top = top + 'px';

        showTitle = titleElem;
    })
}
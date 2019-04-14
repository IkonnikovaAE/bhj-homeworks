(() => {
    const firstWindow = document.getElementById("modal_main");
    firstWindow.classList.add("modal_active");
})();

(() => {
    const firstWindow = document.getElementsByClassName("modal__close");
    for (var i = 0; i < firstWindow.length; i++) {
        firstWindow[i].addEventListener("click", function () {
            this.parentElement.parentElement.classList.remove("modal_active");
        });
    }
})();

(() => {
    const firstWindow = document.getElementsByClassName("show-success");
    for (var i = 0; i < firstWindow.length; i++) {
        firstWindow[i].addEventListener("click", function () {
            const secondWindow = document.getElementById("modal_success");
            secondWindow.classList.add("modal_active");
        });
    }
})();
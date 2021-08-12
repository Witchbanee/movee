
let watchAll = document.querySelector(".price__full");
let display = document.querySelector(".display-block");
let kartochka = document.querySelectorAll(".price__item");
let ff = document.querySelectorAll(".price__list");
let priceHide = document.querySelector(".price__full--hide");


for (let test of kartochka) {
    watchAll.addEventListener("click", function (evt) {
        evt.preventDefault();
        test.classList.toggle("price__item--hidden");
        test.classList.toggle("display-block");
        priceHide.classList.toggle("price__hide--display-none");
        watchAll.style.display = "none";
    });

    priceHide.addEventListener("click", function (evt) {
        evt.preventDefault();
        watchAll.style.display = "block";
        priceHide.style.display = "none";
        test.classList.toggle("price__item--hidden");
        test.classList.toggle("display-block");
    });

}
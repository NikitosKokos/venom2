const burger = document.querySelector('.burger');
const label = document.querySelector('.header__label');
const headerMenu = document.querySelector('.header__list');
const wrapper = document.querySelector('body');
burger.addEventListener("click", () =>{
    headerMenu.classList.toggle("header__list_active");
    burger.classList.toggle("burger_active");
    label.classList.toggle("active");
    if(label.textContent === 'меню'){
        label.textContent = 'закрыть'
    }else{
        label.textContent = 'меню'
    }
    wrapper.classList.toggle("hidden");
});

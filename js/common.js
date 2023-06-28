const searchEl =document.querySelector('.search');
const searchInputeEl =searchEl.querySelector('input');


searchEl.addEventListener('click', function () {
//logic
    searchInputeEl.focus();

});
searchInputeEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputeEl.setAttribute('placeholder', '통합검색');
});
searchInputeEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputeEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
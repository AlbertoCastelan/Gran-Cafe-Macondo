
const bars = document.querySelector('.header__bars');
const times = document.querySelector('.header__times');
const navlist = document.querySelector('.header__nav');

const toggleClass = () => {
  navlist.classList.toggle('active');
}

bars.addEventListener('click', toggleClass);
times.addEventListener('click', toggleClass);


'use strict'

const burgerBtn = document.querySelector('.header__burger'),
      headerList = document.querySelector('.header__navigation');

const toggle = (target, classChange) => {
    target.classList.toggle(classChange);
}
const addClass = (target, classChange) => {
    target.classList.add(classChange);
}
const removeClass = (target, classChange) => {
    target.classList.remove(classChange);
}

burgerBtn.addEventListener('click', () => {
    toggle(burgerBtn, 'active-burger');
    toggle(headerList, 'active-list');
    toggle(document.body, 'overflow-hidden');
    toggle(document.querySelector('html'), 'overflow-hidden');
})
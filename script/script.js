'use strict'

const burgerBtn = document.querySelector('.header__burger'),
      headerList = document.querySelector('.header__navigation'),
      links = document.querySelectorAll('.header__navigation > ul > li > a'),
      anchors = document.querySelectorAll('h3.--title');

const toggle = (target, classChange) => {
    target.classList.toggle(classChange);
}
const addClass = (target, classChange) => {
    target.classList.add(classChange);
}
const removeClass = (target, classChange) => {
    target.classList.remove(classChange);
}

const scroll = (target) => {
    target.scrollIntoView(
        {
            block: "center",
            behavior: "smooth"
        }
    )
}

burgerBtn.addEventListener('click', () => {
    toggle(burgerBtn, 'active-burger');
    toggle(headerList, 'active-list');
    toggle(document.querySelector('html'), 'overflow-hidden');
})
    
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
        if(!burgerBtn.classList.contains('.active-burger')) {
            removeClass(burgerBtn, 'active-burger')
            removeClass(headerList, 'active-list')
            removeClass(document.querySelector('html'), 'overflow-hidden');
            scroll(anchors[i])
        }
        scroll(anchors[i])
    })
}


// Request 1: Click to Change Text.
const WelcomeWord = document.getElementById('WelcomeMessage');
WelcomeWord.addEventListener('click', () => {
    WelcomeWord.innerHTML = 'Have a Good Time!';
});

// Request 2: Click to Show/Close Menu.
const menuTrigger = document.querySelector('#menu-trigger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');

menuTrigger.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

menuClose.addEventListener('click', () => {
    menu.style.display = 'none';
});

// Request 3: Click to Show More Content Boxes.
const callToAction = document.querySelector('.CallToAction');
callToAction.addEventListener('click', () => {
    if (document.querySelector('.display-none').style.display === 'none') {
        document.querySelector('.display-none').style.display = 'flex';
    }
    else {
        document.querySelector('.display-none').style.display = 'none';
    }
})
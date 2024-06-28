// Request 1: Click to Change Text.
const WelcomeWord = document.getElementById('WelcomeMessage');
WelcomeWord.addEventListener('click', () => {
    WelcomeWord.innerHTML = 'Have a Good Time!';
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

// Request 2: Click to Show/Close Menu.
const MenuTrigger = document.querySelector('menu-trigger');
MenuTrigger.addEventListener('click', () => {
})

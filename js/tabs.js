let firstTabButton = document.getElementById('firstTabButton');
let secondTabButton = document.getElementById('secondTabButton');
let thirdTabButton = document.getElementById('thirdTabButton');
let firstTabContent = document.getElementById('firstTabContent');
let secondTabContent = document.getElementById('secondTabContent');
let thirdTabContent = document.getElementById('thirdTabContent');

function showFirstTab () {
    firstTabContent.className = 'tabs-block__content-active';
    secondTabContent.className = 'tabs-block__content-hide';
    thirdTabContent.className = 'tabs-block__content-hide';
}
function showSecondTab () {
    firstTabContent.className = 'tabs-block__content-hide';
    secondTabContent.className = 'tabs-block__content-active';
    thirdTabContent.className = 'tabs-block__content-hide';
}
function showThirdTab () {
    firstTabContent.className = 'tabs-block__content-hide';
    secondTabContent.className = 'tabs-block__content-hide';
    thirdTabContent.className = 'tabs-block__content-active';
}

firstTabButton.addEventListener('click', showFirstTab);
secondTabButton.addEventListener('click', showSecondTab);
thirdTabButton.addEventListener('click', showThirdTab);
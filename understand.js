var understand = document.querySelector('.understand')
var section = document.querySelector('.popup')
understand.addEventListener('click', () => {
    section.style.opacity = '0';
    section.style.width = '0px'
    section.style.height = '0px'
})
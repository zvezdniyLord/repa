
window.addEventListener('scroll', function () {
    var menu = document.querySelector('.active')
    var hidden = document.querySelector('.disable')

    // Если прокрутка больше 100px, показываем блок 2, иначе - блок 1
    if (window.scrollY > 100) {
        hidden.style.opacity = '0';
        menu.style.display = 'block';
    } else {
        hidden.style.opacity = '1';
        menu.style.display = 'none';
    }
}
)
document.querySelector('header').addEventListener('click', e => {
    const UImenu = document.querySelector('#menu');
    const menuIcon = document.querySelector('#show-menu i');
    //"far fa-window-close"
    if (e.target.id === 'show-menu' && menuIcon.className === 'fas fa-bars') {
        menuIcon.className = 'far fa-window-close'
        UImenu.className = 'show';
    } else if (e.target.id === 'show-menu' && menuIcon.className === 'far fa-window-close') {
        menuIcon.className = 'fas fa-bars';
        UImenu.className = 'hidden';
    }
})
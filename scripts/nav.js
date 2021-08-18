const navBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav-small');

const NAV_CLASSES = {
    HIDDEN: 'hidden'
}

function toggleNav () {
    nav.classList.toggle(NAV_CLASSES.HIDDEN);
}

navBtn.addEventListener('click', toggleNav);
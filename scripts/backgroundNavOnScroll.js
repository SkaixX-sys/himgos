const navBackground = document.querySelector('.nav__background');

function handleScroll() {
  if (window.pageYOffset >= window.innerHeight) {
    navBackground.classList.add('nav__background__active');
  } else {
    navBackground.classList.remove('nav__background__active');
  }
}

window.addEventListener('scroll', handleScroll);
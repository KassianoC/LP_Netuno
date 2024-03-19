const links = document.querySelectorAll('a');

const addSmoothScroll = (links) => {
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

addSmoothScroll(links);

function toggleNav() {
  var nav = document.getElementById('nav');
  nav.classList.toggle('nav-open');
}

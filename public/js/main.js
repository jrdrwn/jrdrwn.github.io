function handleMobileButton() {
  const elBtn = document.getElementById('mobile-button');
  const closeBtn = elBtn.querySelector('#close-btn');
  const showBtn = elBtn.querySelector('#show-btn');
  const mobileNavbar = document.querySelector('#mobile-navbar');

  elBtn.addEventListener('click', () => {
    closeBtn.classList.toggle('hidden');
    showBtn.classList.toggle('hidden');
    mobileNavbar.classList.toggle('hidden');
  });
}

function changeBgHeader(ev) {
  const header = document.querySelector('header');
  if (scrollY > 80) {
    header.classList.contains('bg-header') &&
      header.classList.remove('bg-header');
    !header.classList.contains('bg-header-on-scroll') &&
      header.classList.add('bg-header-on-scroll');
  } else {
    !header.classList.contains('bg-header') &&
      header.classList.add('bg-header');
    header.classList.contains('bg-header-on-scroll') &&
      header.classList.remove('bg-header-on-scroll');
  }
}
function handleSubmit(ev) {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwVfEQVfZd17wcB38vRMNdJLHl2Sw0JadRZr9akD7T0NkI6QyCHYtwnxwvLU0cVUA9edA/exec';
  ev.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(this) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
  this.reset();
}
function handleOnScroll(ev) {
  changeBgHeader(ev);
}

addEventListener('scroll', handleOnScroll);
(function main() {
  handleMobileButton();
})();

document.forms[0].addEventListener('submit', handleSubmit);

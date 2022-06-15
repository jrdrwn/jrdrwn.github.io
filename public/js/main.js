class Modal {
  constructor(modalId, opts = {}) {
    this.modalId = modalId;
    this.modal = document.getElementById(this.modalId);
    this.modalTitle = document.getElementById(this.modalId + '-title');
    this.modalMsg = document.getElementById(this.modalId + '-message');
    this.classOpenName = opts.open || 'modal-open';
    this.closeBtnId = opts.close || this.modalId + '-close-btn';
  }

  open(title, msg) {
    this.modalTitle.textContent = title;
    this.modalMsg.textContent = msg;
    !this.modal.classList.contains(this.classOpenName) &&
      this.modal.classList.add(this.classOpenName);
  }

  close() {
    this.modalTitle.textContent = '';
    this.modalMsg.textContent = '';
    this.modal.classList.remove(this.classOpenName);
  }

  activeCloseBtn() {
    document.getElementById(this.closeBtnId).addEventListener('click', (ev) => {
      this.close();
    });
  }
}

function changeBgHeader(ev) {
  const header = document.querySelector('header');
  const clsName = 'shadow-md';
  if (scrollY > 80) {
    !header.classList.contains(clsName) && header.classList.add(clsName);
  } else {
    header.classList.contains(clsName) && header.classList.remove(clsName);
  }
}

function scrollspy(ev) {
  const links = document.querySelectorAll('[data-scrollspy]');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  links.forEach((link) => {
    const elem = document.querySelector(link.getAttribute('href'));

    elem.offsetTop <= scrollPos &&
    elem.offsetTop + elem.clientHeight > scrollPos
      ? link.classList.add('active')
      : link.classList.remove('active');
  });
}

function handleScroll(ev) {
  changeBgHeader(ev);
  scrollspy(ev);
}

async function handleSubmit(ev) {
  ev.preventDefault();

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzz7UG-z0CFxYaCj-Ngh255G9uFZQG4t3LSysnS00tL4YEsRmXd0LS3El80gDThSCDmHg/exec';
  const body = new FormData(this);
  const submitBtn = this.querySelector('[type=submit]');
  const modalForm = new Modal('form-modal');

  modalForm.activeCloseBtn();

  try {
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const res = await fetch(scriptURL, { method: 'POST', body });
    if ((await res.status) === 200) {
      this.reset();
      modalForm.open(
        'Successfully',
        `Thank you ${body.get('name')} for sending me a message`
      );
    } else {
      modalForm.open(
        'Ups, problem occurs!',
        'Try sending again or check your data again'
      );
    }
  } catch (e) {
    modalForm.open('Ups, problem occurs!', 'Failed to send');
  }

  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
}

function swapTheme() {
  document
    .getElementById('swap-theme')
    .addEventListener('click', function (ev) {
      this.classList.toggle('swap-active');
      const theme = this.classList.contains('swap-active')
        ? 'night'
        : 'cupcake';
      document.documentElement.dataset.theme = theme;
      localStorage.theme = theme === 'cupcake' ? 'light' : 'dark';
    });
}

function themeCheck() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.dataset.theme = 'night';
    document.getElementById('swap-theme').classList.toggle('swap-active');
  } else {
    document.documentElement.dataset.theme = 'cupcake';
  }
}

function main() {
  addEventListener('scroll', handleScroll);
  swapTheme();
  themeCheck();
  document.forms['form-report'].addEventListener('submit', handleSubmit);
}

main();

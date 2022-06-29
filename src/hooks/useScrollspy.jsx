import { useWindowEvent } from '@mantine/hooks';

export default function (className = 'active') {
  useWindowEvent('scroll', () => {
    const links = document.querySelectorAll('[data-scrollspy]');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    links.forEach((link) => {
      const elem = document.querySelector(link.getAttribute('href'));

      elem.offsetTop <= scrollPos &&
      elem.offsetTop + elem.clientHeight > scrollPos
        ? link.classList.add(className)
        : link.classList.remove(className);
    });
  });
}

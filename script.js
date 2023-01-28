//features y company menu

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((Option) => {
    Option.addEventListener('click', () => {
      selected.innerText = Option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach((Option) => {
        Option.classList.remove('active');
      });
      Option.classList.add('active');
    });
  });
});

//slide bar responsive menu
const slidebar = document.querySelector('.bar');
const bgSlidebar = document.querySelector('.bg-menu');
const btnOpenBar = document.querySelector('.btnMenu');

btnOpenBar.addEventListener('click', () => {
  bgSlidebar.style.display = 'flex';
  slidebar.style.opacity = '1';
  slidebar.style.visibility = 'visible';
  slidebar.style.transform = translateX(0);
});

//close button

const btnClose = document.querySelector('.btnclose');

btnClose.addEventListener('click', () => {
  slidebar.style.opacity = '0';
  slidebar.style.visibility = 'hidden';

  setTimeout(() => {
    bgSlidebar.style.display = 'none';
  }, 4);
});

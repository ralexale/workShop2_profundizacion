const dropdowns = document.querySelector('.dropdown');

dropdowns.forEach(dropdowns => {
  const select = dropdowns.querySelector('.select');
  const caret = dropdowns.querySelector('.caret');
  const menu = dropdowns.querySelectorAll('.menu');
  const options = dropdowns.querySelector('.menu li');
  const selected = dropdowns.querySelector('.selected');


  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(Option => {
    Option.addEventListener('click', () => {
      selected.innerText = Option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(Option => {
        Option.classList.remove('active');
      });
      Option.classList.add('active');
    });
  });
});
const btn = document.getElementById('x-tudo');
const menu = document.getElementsByClassName('ul-menu')[0];

const remover = () => {
  menu.classList.remove('ativo');
}

document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
  if (e.target === btn) {
    menu.classList.toggle('ativo');
  } else {
    remover();
  }
})

window.onload = () => {
  remover();
}
export default function initTabNav () {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const Mostrar = document.querySelectorAll('.animais-descricao')
if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }
  tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
  })
}
else {
  Mostrar.forEach(item => {
    item.classList.remove('[data-tab="content"]');
  })
}
}
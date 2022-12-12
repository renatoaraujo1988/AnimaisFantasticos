// Mostra conteudo principal das imagens
function initTabNac () {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const Mostrar = document.querySelectorAll('.animais-descricao')
if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
  tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
  })
}
else {
  Mostrar.forEach(item => {
    item.classList.remove('js-tabcontent');
  })
}
}
initTabNac();


// Mostra respostas das perguntas
function Faq () {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const Mostrar = document.querySelectorAll('.faq-lista');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
  function activeAccordion () {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion);
  })
  }
  else {
    Mostrar.forEach(item => {
      item.classList.remove('js-accordion');
    });
  }
}
Faq();

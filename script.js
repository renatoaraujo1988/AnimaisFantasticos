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

//Scroll suave

function scrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
// Forma alternativa
  // const topo = section.offsetTop;
  // window.scrollTo({
  //   top: topo,
  //   behavior: "smooth",
  // });
}
linksInternos.forEach(item => {
  item.addEventListener('click', scrollToSection);
})
}
scrollSuave();

// Animacao em scroll
function animacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
const metade = window.innerHeight * 0.6;
function animaScroll() {
sections.forEach(section => {
  const sectionTop = section.getBoundingClientRect().top;
  const visible = sectionTop - metade < 0;
  if (visible) 
    section.classList.add('ativo');
  else
  section.classList.remove('ativo');
})
}
animaScroll();
window.addEventListener('scroll', animaScroll);
}
animacaoScroll();




export default function initFaq () {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
      item.classList.remove('[data-anime="accordion"]');
    });
  }
}
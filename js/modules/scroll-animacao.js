export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
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
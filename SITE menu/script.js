// Quando clicar em "Fale conosco", rola até o rodapé
document.addEventListener("DOMContentLoaded", function () {
  const linkContato = document.querySelector('.botaoContato');
  const botaoContato = document.querySelector('.botao');

  // Rola para o rodapé ao clicar no link do menu
  if (linkContato) {
    linkContato.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("contato").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Redireciona para o WhatsApp ao clicar no botão (você pode mudar o número)
  if (botaoContato) {
    botaoContato.addEventListener("click", function (e) {
      e.preventDefault();
      window.open("https://wa.me/5521994581019", "_blank"); // <- coloque seu número aqui
    });
  }
});
// Adiciona efeito de fluidez ao menu ao rolar a página
window.addEventListener("scroll", function () {
  const menu = document.querySelector("nav");
  if (menu) {
    if (window.scrollY > 50) {
      menu.classList.add("menu-fluido");
    } else {
      menu.classList.remove("menu-fluido");
    }
  }
});

// Efeito de sumir/aparecer elementos ao rolar a página
window.addEventListener("scroll", function () {
  const elementos = document.querySelectorAll(".fade-scroll");
  elementos.forEach(function (el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 100) {
      el.classList.add("aparecer");
    } else {
      el.classList.remove("aparecer");
    }
  });
});
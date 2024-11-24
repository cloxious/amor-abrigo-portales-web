// Obtén el botón de hamburguesa y el menú de navegación
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav');

// Escucha el clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

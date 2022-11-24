document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById("menu");
  const menuItems = document.getElementsByClassName("menu__item");
  menuItems && Array.from(menuItems).forEach((element, index) => {
    element.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  });
});
/*function openNav() {
  document.getElementById("sidenav").style.right = "0";
  document.getElementById("backmenu").style.display = "block";
}

function closeNav() {
  document.getElementById("sidenav").style.right = "-280px";
  document.getElementById("backmenu").style.display = "none";
}*/

/*Forma 2*/

const sideNav = document.getElementById("sidenav");
const backgroundNav = document.getElementById("backmenu");
const burgerMenu = document.getElementById("burger");
const closeIcon = document.getElementById("closeBtn");

function showMenu() {
  sideNav.style.right = "0px";
  backgroundNav.style.display = "block";
}

function hideMenu() {
  sideNav.style.right = "-280px";
  backgroundNav.style.display = "none";
}

burgerMenu.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
backgroundNav.addEventListener("click", hideMenu);

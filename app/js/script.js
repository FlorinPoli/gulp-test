
const navToggler = () => {
  var nav = document.getElementById("navToggler");
  if (nav.className === "nav") {
    nav.className += " responsive"
    nav.style.right = "-5px";
    //nav.width = "rem(325)";

  } else {
    nav.className = "nav"
    nav.style.right = "-325px";
    //nav.width = "0";
  }
}


const activeLink = () => {
  const currentLocation = location.href;
  const menuItem = document.getElementById('link-container');
  const links = menuItem.getElementsByClassName("nav__link");

  console.log(menuItem.href);
  for (let i = 0; i < links.length; i++) {

    if (links[i].href === currentLocation) {
      links[i].className = "nav__link nav--active";
    } else {
      links[i].className = "nav__link";
    }
  }
}

window.onload = function() {
  activeLink();
};


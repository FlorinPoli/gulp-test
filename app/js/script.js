
const navToggler = () => {
  var x = document.getElementById("navToggler");
  if (x.className === "nav") {
    x.className += " responsive"
    x.style.width = "320px";
  } else {
    x.className = "nav"
    x.style.width = "0";
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



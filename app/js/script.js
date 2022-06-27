








const togglerNav = () => {
  var nav = document.getElementById("togglerNav");
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
      links[i].className = "nav__link nav-active";
    } else {
      links[i].className = "nav__link";
    }
  }
}

// window.onload = function() {
//   activeLink();
// };

const slider1 = ()=>{

  var slider = tns({
    container: ".my-slider",
    items: 5,
    gutter: 20,
    startIndex: 5,
    slideBy: 1,
    loop: true,
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    center: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        768: {
            items: 4,
            nav: true
        },
        1440: {
            items: 5
        }
    }
    // mode: 'gallery',
    // speed: 2000,
    // animateIn: "scale",
    // controls: false,
    // nav: false,
    // edgePadding: 20,
    // loop: false,
  });
  slider.getInfo().slideItems[slider.getInfo().index - 1].classList.add('donut-slider_item--active');
  slider.getInfo().slideItems[slider.getInfo().index].classList.add('donut-slider_item--active');
  slider.getInfo().slideItems[slider.getInfo().index + 1].classList.add('donut-slider_item--active');
  slider.events.on('indexChanged', () => {
    const info = slider.getInfo();
    const indexPrev = info.indexCached;
    const indexCurr = info.index;
    console.log(indexPrev, indexCurr);
  
  
    info.slideItems[indexPrev + 3].classList.remove('donut-slider_item--active');
    info.slideItems[indexCurr - 2].classList.remove('donut-slider_item--active');
    info.slideItems[indexCurr + 2].classList.remove('donut-slider_item--active');
  
    info.slideItems[indexCurr - 1].classList.add('donut-slider_item--active');
    info.slideItems[indexCurr].classList.add('donut-slider_item--active');
    info.slideItems[indexCurr + 1].classList.add('donut-slider_item--active');
  });
}

const slider2=()=>{
  var slider2 = tns({
    container: ".my-slider-1",
    startIndex: 3,
    items: 2,
    loop: true,
    gutter: 0,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    center: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            center: false
        },
        1000: {
            nav: true,
            items: 2,
            center: true,
            center: false
        },
        1440: {
            nav: true,
            items: 3,
            center: true
        }
    }
    // mode: 'gallery',
    // speed: 2000,
    // animateIn: "scale",
    // controls: false,
    // nav: false,
    // edgePadding: 20,
    // loop: false,
});

slider2.getInfo().slideItems[slider2.getInfo().index].classList.add('donut-slider_item--active');
const itmCount = slider2.getInfo().items;
console.log(itmCount);
if (itmCount === 2) {
    slider2.getInfo().slideItems[slider2.getInfo().index + 1].classList.add('donut-slider_item--active');
}

slider2.events.on('indexChanged', () => {
    const info = slider2.getInfo();
    const itemsCount = info.items;
    console.log(itemsCount);

    const indexPrev = info.indexCached;
    const indexCurr = info.index;
    console.log(indexPrev, indexCurr);
    if (itemsCount == 2) {
        info.slideItems[indexCurr + 1].classList.add('donut-slider_item--active');
        info.slideItems[indexPrev].classList.add('donut-slider_item--active');

    } else {
        info.slideItems[indexPrev].classList.remove('donut-slider_item--active');
        info.slideItems[indexCurr].classList.add('donut-slider_item--active');
    }



});

}




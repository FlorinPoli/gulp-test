const togglerNav=()=>{var e=document.getElementById("togglerNav");"nav"===e.className?(e.className+=" responsive",e.style.right="-5px"):(e.className="nav",e.style.right="-325px")},activeLink=()=>{const e=location.href,t=document.getElementById("link-container"),s=t.getElementsByClassName("nav__link");console.log(t.href);for(let t=0;t<s.length;t++)s[t].href===e?s[t].className="nav__link nav-active":s[t].className="nav__link"},slider1=()=>{var e=tns({container:".my-slider",items:5,gutter:20,startIndex:5,slideBy:1,loop:!0,navPosition:"bottom",mouseDrag:!0,autoplay:!0,autoplayButtonOutput:!1,controls:!1,center:!0,responsive:{0:{items:2,nav:!1},768:{items:4,nav:!0},1440:{items:5}}});e.getInfo().slideItems[e.getInfo().index-1].classList.add("donut-slider_item--active"),e.getInfo().slideItems[e.getInfo().index].classList.add("donut-slider_item--active"),e.getInfo().slideItems[e.getInfo().index+1].classList.add("donut-slider_item--active"),e.events.on("indexChanged",(()=>{const t=e.getInfo(),s=t.indexCached,i=t.index;console.log(s,i),t.slideItems[s+3].classList.remove("donut-slider_item--active"),t.slideItems[i-2].classList.remove("donut-slider_item--active"),t.slideItems[i+2].classList.remove("donut-slider_item--active"),t.slideItems[i-1].classList.add("donut-slider_item--active"),t.slideItems[i].classList.add("donut-slider_item--active"),t.slideItems[i+1].classList.add("donut-slider_item--active")}))},slider2=()=>{var e=tns({container:".my-slider-1",startIndex:3,items:2,loop:!0,gutter:0,slideBy:1,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,autoplay:!0,autoplayButtonOutput:!1,controls:!1,center:!0,responsive:{0:{items:1,nav:!1,center:!1},1e3:{nav:!0,items:2,center:!0,center:!1},1440:{nav:!0,items:3,center:!0}}});e.getInfo().slideItems[e.getInfo().index].classList.add("donut-slider_item--active");const t=e.getInfo().items;console.log(t),2===t&&e.getInfo().slideItems[e.getInfo().index+1].classList.add("donut-slider_item--active"),e.events.on("indexChanged",(()=>{const t=e.getInfo(),s=t.items;console.log(s);const i=t.indexCached,n=t.index;console.log(i,n),2==s?(t.slideItems[n+1].classList.add("donut-slider_item--active"),t.slideItems[i].classList.add("donut-slider_item--active")):(t.slideItems[i].classList.remove("donut-slider_item--active"),t.slideItems[n].classList.add("donut-slider_item--active"))}))};
//# sourceMappingURL=script.js.map
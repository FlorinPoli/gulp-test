const navToggler=()=>{var e=document.getElementById("navToggler");"nav"===e.className?(e.className+=" responsive",e.style.right="-5px"):(e.className="nav",e.style.right="-325px")},activeLink=()=>{const e=location.href,n=document.getElementById("link-container"),a=n.getElementsByClassName("nav__link");console.log(n.href);for(let n=0;n<a.length;n++)a[n].href===e?a[n].className="nav__link nav-active":a[n].className="nav__link"};window.onload=function(){activeLink()};
//# sourceMappingURL=script.js.map
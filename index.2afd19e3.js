var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),(()=>{const e="mobile-menu--hidden",t=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),c=document.querySelector("[data-mobile-menu]"),n=document.querySelector("[data-menu-nav]");t.addEventListener("click",a),o.addEventListener("click",a);function a(){const o=!c.classList.toggle(e);t.setAttribute("aria-expanded",o),toggleScroll(o)}Array.from(n.children).forEach((e=>{e.addEventListener("click",a)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(o=>{o.matches&&!c.classList.contains(e)&&(c.classList.add(e),t.setAttribute("aria-expanded",!1),toggleScroll(false))}))})(),window.onscroll=()=>function(){const e=document.querySelector(".header"),t=e.offsetHeight;window.pageYOffset>t?e.classList.remove("header--transparency"):e.classList.add("header--transparency")}();
//# sourceMappingURL=index.2afd19e3.js.map
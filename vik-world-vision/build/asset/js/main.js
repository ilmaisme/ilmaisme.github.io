/* s: Get HEIGHT Device */
function setAppHeight() {
  document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px');
}

window.addEventListener('resize', setAppHeight);
setAppHeight();
/* e: Get HEIGHT Device */
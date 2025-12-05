/* s: Get HEIGHT Device */
function setAppHeight() {
  const appHeight = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${appHeight}px`);
}

setAppHeight();

window.addEventListener("resize", setAppHeight);
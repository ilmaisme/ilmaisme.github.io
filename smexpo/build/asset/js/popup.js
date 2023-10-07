//SET app height for popup height
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()

//Trigger popup
function triggerPopup(el) {
    let target = document.querySelector(el)
    target.classList.add('active');
}

//Close all popup
function closePopup() {
    let pop = document.querySelectorAll(".popup")
    pop.forEach(popup => {
        popup.classList.remove('active');
    });
}
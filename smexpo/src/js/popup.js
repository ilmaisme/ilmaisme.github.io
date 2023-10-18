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
function closePopup(el) {
    let pop = document.querySelectorAll(".popup")
    if (!!el) {
        let dpop = document.querySelector(el)
        dpop.classList.remove('active');
    } else {
        pop.forEach(popup => {
            popup.classList.remove('active');
        });
    }
}
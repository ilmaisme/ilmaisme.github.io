$(window).on('load', function () {
})

$(document).ready(function () {
    
})

/* s: Get HEIGHT Device & Container Width */
const appLayout = () => {
  const doc = document.documentElement

  // viewport height
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)

  // container width
  const container = document.querySelector('.container')
  if (container) {
    const width = container.offsetWidth
    doc.style.setProperty('--container-width', `${width}px`)
  }
}

window.addEventListener('resize', appLayout)
window.addEventListener('load', appLayout)
appLayout()
/* e: Get HEIGHT Device & Container Width */
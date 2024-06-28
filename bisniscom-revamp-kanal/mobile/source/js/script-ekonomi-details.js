//font details slider range custom
var content = document.querySelector('.detailsContent'),
    sizermin = document.querySelector('.-minus'),
    sizerplus = document.querySelector('.-plus'),
    sizer = document.getElementById('sliderFont')

sizer.addEventListener("input", (event) => {
    var valsz = event.target.value
    content.style.fontSize = valsz + 'em'
});
sizermin.addEventListener("click", (event) => {
    var valmin = sizer.getAttribute('min')
    sizer.value = valmin;
    // console.log(valmin);
    content.style.fontSize = valmin + 'em'
});
sizerplus.addEventListener("click", (event) => {
    var valplus = sizer.getAttribute('max')
    sizer.value = valplus;
    // console.log(valplus);
    content.style.fontSize = valplus + 'em'
});
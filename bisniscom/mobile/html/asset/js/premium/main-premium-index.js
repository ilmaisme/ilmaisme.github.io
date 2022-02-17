//scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

//show content faq
var accItem = document.getElementsByClassName('premiumDet__faqWrapper');
var accHD = document.getElementsByClassName('-js-show');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.parentNode.className;
    
    if (itemClass == 'premiumDet__faqWrapper close') {
        // console.log('open');
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'premiumDet__faqWrapper close';
            accHD[i].innerHTML="show";
            // console.log('close all');
        }
        this.parentNode.parentNode.className = 'premiumDet__faqWrapper open active';
        this.innerHTML="hide";
    } else {
        this.parentNode.parentNode.className = 'premiumDet__faqWrapper close';
        this.innerHTML="show";
        // console.log('close this only');
    }
}
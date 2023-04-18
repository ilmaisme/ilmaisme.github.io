$(document).ready(function () {
    //font details slider range custom
    $('#sliderFont').on('input', function () {
        var v = $(this).val();
        $('.detailsContent').css('font-size', v + 'em')
    });
    $('.detailsFontCta.-minus').on("click", function () {
        var minus = $('#sliderFont').attr('min')
        $('#sliderFont').val(minus)
        $('.detailsContent').css('font-size', minus + 'em')
    });
    $('.detailsFontCta.-plus').on("click", function () {
        var plus = $('#sliderFont').attr('max')
        $('#sliderFont').val(plus)
        $('.detailsContent').css('font-size', plus + 'em')
    });
})

//share link article
let share = document.getElementById('share');
share.addEventListener('click', function (e) {
    // copy text
    //console.log(e.target)
    if (e.target.matches('[data-form=copyLinkUrl]')) {
        e.preventDefault()
        copyLink('copyLinkUrl', e)
    }
});

function copyLink(id, e) {
    let cTxt = document.getElementById(id);

    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
    e.target.classList.add('-tooltip');
    setTimeout(function () {
        e.target.classList.remove('-tooltip');
    }, 1500);
}

//modal
function closeModal() {
    let mdl = document.getElementById('modal');
    let active = 'modalOpen'
    if (!!mdl) {
        document.body.classList.remove(active);
        let fc = mdl.firstElementChild;
        while (fc.firstChild) {
            fc.removeChild(fc.firstChild);
        }
    }
}

function clearModalsContent(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function openModal(el, image, caption) {
    let active = 'modalOpen'
    let tar = document.querySelector('[data-modal-target=' + el + ']')
    let mdl = document.getElementById('modal');
    if (!!mdl) {
        if (!!tar) {
            // clear first
            let fc = mdl.firstElementChild;
            clearModalsContent(fc);

            // add body class and clone element
            document.body.classList.add(active);
            let ox = tar.cloneNode(true);
            fc.appendChild(ox);

            if (!!image) {
                fc.getElementsByClassName('image')[0].setAttribute('src', image)
            }
            if (!!caption) {
                fc.getElementsByClassName('caption')[0].textContent += caption;
            }
        } else {
            console.log('unknown modal target');
            return;
        }

        // dismiss modals
        mdl.addEventListener('click', function (e) {
            // console.log(e)
            if (e.target.matches('[data-modal-button=dismiss]')) {
                closeModal();
            }
        });
    } else {
        console.log('template modals not found');
        return;
    }

}
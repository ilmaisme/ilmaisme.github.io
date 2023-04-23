function copyLink(id, el) {
    let cTxt = document.getElementById(id);

    cTxt.select();
    cTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cTxt.value);
    el.classList.add('-tooltip');
    setTimeout(function () {
        el.classList.remove('-tooltip');
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
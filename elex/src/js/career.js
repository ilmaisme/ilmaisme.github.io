$(document).ready(function () {
    //sort careers type
    var posts = $('.careersCard');
    //posts.fadeOut();

    $(".careersSortCta").click(function () {
        var customType = $(this).data('filter'); // type

        posts
            .fadeOut()
            .filter(function () {
                return $(this).data('cat') === customType;
            })
            .fadeIn(200);
    });

    // display all sort
    $("#sortAll").click(function () {
        posts.fadeIn(200);
    }).addClass("active").click();

    $(".careersSortCta").click(function (e) {
        //toggle active sort
        $(this).toggleClass("active").siblings().removeClass("active");
        e.preventDefault()
    });

    //trigger details career
    $(".-careersTrig").click(function () {
        var role = $(this).find('.careersCardRole').text(),
            loc = $(this).find('.careersCardLoc').text(),
            type = $(this).find('.careersCardType').text(),
            deadline = $(this).find('.careersDeadline').text(),
            link = $(this).find('.careersLink').text(),
            linktxt = $(this).find('.careersLink').data("link"),
            content = $(this).find('.careersContent').html()

        $('.careersCard').removeClass('active')
        $(this).addClass('active')
        $('.careersDetRole').html(role)
        $('.careersDetLocTxt').html(loc)
        $('.careersDetLocType').html(type)
        $('.careersDeadlineDate').html(deadline)
        $('.careersDetContent').html(content)
        if (!!link) {
            $('.careersCtaWrap').html('<a href="' + link + '" target="_blank" rel="noopener noreferrer" class="careersCta buttonPrimary buttonPrimary--icon">Apply<span class="careersCtaTxt">' + linktxt + '</span></a>')
        } else {
            $('.careersCtaWrap').html('<button class="careersCta button buttonPrimary" onclick="triggerActiveButton(\'.-pCareer\')">Apply</button>')
        }

        //trigger details on mobile
        var details = $('.careersDetWrap')
        details.addClass('active')
        //give exact height on details and its parent
        crHeight = details[0].scrollHeight;
        details.css("height", crHeight);
        if (viewport().width < 768) {
            $('.careersPostingWrap').css({
                "min-height": crHeight,
                "opacity": "0",
                "pointer-events": "none"
            });
        }
        //scrolltop
        $('html,body,.careersDetWrap').animate({
            scrollTop: 0
        }, 500);
    });

    //form add link input
    var currentLink = 1

    function populate(currentLink, el) {
        var item = document.createElement('div')
        item.classList.add('formRel')
        var link = '<input type="text" class="formInput formLink" name="links' + currentLink + '" id="links' + currentLink + '"\
        placeholder="Tempel link disini">\
        <button onclick="removeLink(this)" class="button formClear active" type="button"\
        aria-label="clear value"><span class="ico icoClose"></span></button>\
        </div>\
        ';
        $(item).insertBefore(el);
        $(item).html(link);
    }
    $(".-addInputLink").on('click', function () {
        currentLink++
        populate(currentLink, this)
    });
});

//remove initial active career on mobile
updateActiveCareer()

function updateActiveCareer() {
    if (viewport().width >= 768) {
        // console.log("desktop")
        $('.careersCard:first-of-type').addClass('active');
    } else {
        // console.log("mobile")    
        removeActiveCareer()
    }
}

function removeActiveCareer() {
    $('.careersCard').removeClass('active');
    $('.careersDetWrap').removeClass('active');
    $('.careersPostingWrap').removeAttr('style')
}

//form apply
function onFileChange(el) {
    let parent = el.parentNode,
        title = parent.querySelector('.formFileTitle'),
        msg = parent.parentNode.querySelector('#msgFile'),
        btn = parent.querySelector('.buttonPrimary')
    clear = parent.parentNode.querySelector('.formClear')
    Object.values(el.files).forEach(function (file) {
        //console.log(`Type: ${file.type}`);
        if (file.type == 'application/pdf') {
            title.setAttribute('placeholder', el.value)
            title.classList.add('valid')
            btn.classList.add('disabled')
            parent.classList.add('disabled')
            clear.classList.add('active')
            msg.innerHTML = ''
        } else {
            title.setAttribute('placeholder', 'Tidak ada file yang dipilih');
            title.classList.remove('valid')
            msg.innerHTML = '*File must be PDF'
            btn.classList.remove('disabled')
            parent.classList.remove('disabled')
            clear.classList.remove('active')
            el.value = null;
        }
    })
}

function removeFile(el) {
    let parent = el.parentNode,
        title = parent.querySelector('input[type = text]')
    parent.querySelector('input[type = file]').value = null;
    title.setAttribute('placeholder', 'Tidak ada file yang dipilih');
    title.classList.remove('valid')
    parent.querySelector('.buttonPrimary').classList.remove('disabled')
    parent.classList.remove('disabled')
    el.classList.remove('active')
}

function removeLink(el) {
    let parent = el.parentNode
    parent.remove()
}

function addInputLink(el) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "You Just added a text field ");
    document.body.appendChild(x);
}
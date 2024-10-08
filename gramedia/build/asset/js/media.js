$(document).ready(function () {
    function createElement(el, className, text) {
        //console.log('class', className)
        var element = document.createElement(el);
        var text = document.createTextNode(text);
        element.setAttribute("class", className);
        element.appendChild(text);
        return element
    }

    var openPhotoSwipe = function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
                src: 'https://ilmaisme.github.io/gramedia/build/asset/images/dummy/read-img.jpg',
                w: 980,
                h: 550,
                title: 'Gerai Gramedia Pertama di Karawang Resmi Dibuka',
                dates: '25 Januari 2024',
                lead: 'PT Gramedia Asri Media meresmikan gerai terbaru di Kota Karawang pada Sabtu (15/10/2016). Gramedia yang berlokasi di Kavling Komersil Blok V Jalan Galuh Mas Raya Teluk Jambe, Karawang, ini mengusung transformasi terbaru. Konsep dan suasana yang nyaman, playful adventurous, serta memorable mengisi atmosfer toko ketika pengunjung hadir.'
            },
            {
                src: 'https://picsum.photos/id/192/980/550',
                w: 980,
                h: 550,
                title: 'Gerai Gramedia Pertama di Karawang Resmi Dibuka',
                dates: '25 Januari 2024',
                lead: 'Gramedia sebagai perusahaan yang bergerak di bidang retail ini berusaha untuk tetap relevan dengan perubahan gaya hidup masyarakat. Untuk menjawab tantangan itu, Gramedia terus berbenah diri demi kepuasan pelanggan dan turut serta dalam upaya mencerdaskan masyarakat Indonesia.'
            },
            {
                src: 'https://picsum.photos/id/163/980/550',
                w: 980,
                h: 550,
                title: 'Gerai Gramedia Pertama di Karawang Resmi Dibuka',
                dates: '25 Januari 2024',
                lead: 'Acara opening seperti dilaporkan kompas.com, dikemas dengan konsep santai dan hangat itu berhasil menarik perhatian warga Karawang. Penampilan seperti musik angklung, tari-tarian, dan pentas yang dipersembahkan oleh siswa-siswi SD di Karawang memberikan warna menarik selama acara.'
            },
            {
                src: 'https://picsum.photos/id/180/980/550',
                w: 980,
                h: 550,
                title: 'Gerai Gramedia Pertama di Karawang Resmi Dibuka',
                dates: '25 Januari 2024',
                lead: 'Simbolisasi penyerahan buku kepada perwakilan sekolah penerima "Gramedia Berbagi Buku" diserahkan langsung oleh General Manager Gramedia Jakarta 3, Lilis Suryaningsih.'
            },
            {
                src: 'https://picsum.photos/id/119/980/550',
                w: 980,
                h: 550,
                title: 'Gerai Gramedia Pertama di Karawang Resmi Dibuka',
                dates: '25 Januari 2024',
                lead: 'Selain itu, CEO PT Gramedia Asri Media, Priyo Utomo secara langsung hadir untuk meresmikan Gramedia pertama di Karawang tersebut.'
            }
        ];

        // define options (if needed)
        options = {

            closeOnScroll: false,
            fullscreenEl: false,
            shareEl: false,
            minZoom: 3,
            fullscreenEl: false,
            zoomEl: false,
            indexIndicator: false,
            initialZoomLevel: 1,
            // secondaryZoomLevel: 1.5,
            // maxZoomLevel: 1,
            history: false,
            addCaptionHTMLFn: function (item, captionEl /*, isFake */ ) {
                if (!item.title) {
                    captionEl.children[0].innerHTML = '';
                    return false;
                }
                let _1vh = $(window).height();
                captionEl.children[0].innerHTML = item.title;
                //captionEl.children[0].style.minWidth = (item.w) - 180 + 'px';
                //captionEl.style.bottom = _1vh + (item.h) + 'px';
                if (item.dates) {
                    var captionDiv = createElement('div', 'pswp__dates', item.dates)
                    var captioncontent = captionEl.children[0].appendChild(captionDiv)
                }
                if (item.lead) {
                    var captionDiv = createElement('div', 'pswp__lead', item.lead)
                    var captioncontent = captionEl.children[0].appendChild(captionDiv)
                }
                return true;
            }

        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    $('.-photoswipeTrig').click(function () {
        openPhotoSwipe()
    });
});
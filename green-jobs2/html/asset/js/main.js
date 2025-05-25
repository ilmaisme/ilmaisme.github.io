//GET HEIGHT Device
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()

function refreshPage() {
    window.location.href = window.location.href
}

$(window).on('load', removePreloader);
//preloader
function removePreloader() {
    setTimeout(function () {
        $("#preloader").fadeOut(200, function () {
            $(this).remove();
            setTimeout(function () {
                sr.reveal('.coverCaption__title', {
                    origin: 'right',
                    delay: 400,
                    reset: true,
                    beforeReveal: function (el) {
                        el.style.visibility = 'visible';
                    }
                });
                sr.reveal('.coverCaption__txt', {
                    origin: 'right',
                    delay: 600,
                    reset: true,
                    beforeReveal: function (el) {
                        el.style.visibility = 'visible';
                    }
                });
            }, 50);
        })
    }, 1500);
}

function animateCounter(element, target, duration) {
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;  // true if target has decimal part

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentRaw = progress * target;

        let currentText;
        if (isDecimal) {
            // Show one decimal place if target is decimal
            // Also remove trailing .0 if decimal is zero
            if (Math.abs(currentRaw % 1) < 0.01) {
                currentText = Math.round(currentRaw).toString();
            } else {
                currentText = currentRaw.toFixed(1);
            }
        } else {
            // Show integers only if target is integer
            currentText = Math.round(currentRaw).toString();
        }

        element.textContent = currentText + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

$(document).ready(function () {

    //scrollreveal
    window.sr = ScrollReveal({
        vFactor: 0.20,
        mobile: true
    });
    sr.reveal('.articleTitle', {
        origin: 'left',
        delay: 100,
    });
    sr.reveal('.articleList__item', {
        origin: 'right',
        delay: 400,
        reset: true,
    });
    sr.reveal('.articleImg', {
        origin: 'bottom',
        delay: 100,
        reset: true,
    });
    sr.reveal('.articleImg--img', {
        origin: 'bottom',
        delay: 100,
        reset: true,
    });
    sr.reveal('.articleImg--percent', {
        origin: 'bottom',
        delay: 400,
        reset: true,
    });
    sr.reveal('.articleImg--thumb', {
        origin: 'bottom',
        delay: 300,
        reset: true,
    });
    sr.reveal('.credit__member', {
        origin: 'right',
        delay: 200,
        reset: true,
        distance: '5vw'
    });
    sr.reveal('.credit__team', {
        origin: 'left',
        delay: 200,
        reset: true,
        distance: '5vw'
    });
    sr.reveal('.credit__logo', {
        opacity: 0,
        origin: 'bottom',
        delay: 200,
        duration: 1500,
        reset: true
    });

    // Observer for percentage counters
    const percentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    counter.textContent = '0.0%';
                    const target = parseFloat(counter.dataset.target);
                    if (!isNaN(target)) animateCounter(counter, target, 1000);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.articleImg--percent').forEach(el => percentObserver.observe(el));


    // Observer for graph bar and number animation
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const graph = entry.target;
                const chartMax = parseFloat(graph.dataset.max) || 100;

                const items = graph.querySelectorAll('.articleGraph__item');

                items.forEach(item => {
                    const value = parseFloat(item.dataset.value);
                    if (isNaN(value)) return;

                    const bar = item.querySelector(".bar");
                    const span = item.querySelector(".bar__value");

                    // Calculate percentage
                    const percent = (value / chartMax) * 100;

                    // Reset bar and number
                    bar.style.transition = 'none';
                    bar.style.width = '0%';
                    span.textContent = '0';

                    // Force reflow to restart animation
                    void bar.offsetWidth;

                    // Animate bar
                    bar.style.transition = 'width 1s ease';
                    bar.style.width = percent + '%';

                    // Animate number
                    const duration = 1000;
                    const startTime = performance.now();

                    function animateNumber(now) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const current = Math.floor(progress * value);
                        span.textContent = current;
                        if (progress < 1) requestAnimationFrame(animateNumber);
                        else span.textContent = value;
                    }

                    requestAnimationFrame(animateNumber);
                });
            }
        });
    }, { threshold: 0.5 });

    // Attach observer to all .articleGraph
    document.querySelectorAll('.articleGraph').forEach(graph => {
        graphObserver.observe(graph);
    });

});

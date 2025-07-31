document.addEventListener("DOMContentLoaded", function () {
    const hd = document.querySelector(".header");
    const menuWrap = document.querySelector(".menuWrap");
    const nav = document.querySelector(".nav");
    const navDesk = document.getElementById("navDesk");
    const navMobWrap = document.querySelector("#navMob .menuWrap");
    const menuToggle = document.getElementById("menuToggle");

    if (!hd || !menuWrap || !nav || !navDesk || !navMobWrap) return;

    // Sticky menu
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const headerHeight = hd.offsetHeight;

        if (scrollY > headerHeight) {
            hd.classList.add("fixed");
        } else {
            hd.classList.remove("fixed");
        }
    });

    // Reset mobile menu toggle on unload
    window.addEventListener("unload", function () {
        if (menuToggle && typeof menuToggle.reset === "function") {
            menuToggle.reset();
        }
    });

    // Responsive menu updater
    function updateMenu() {
        const isDesktop = window.innerWidth >= 1140;

        menuWrap.classList.toggle("mobile", !isDesktop);
        hd.classList.toggle("mobile", !isDesktop);

        if (isDesktop) {
            navDesk.appendChild(nav);
        } else {
            navMobWrap.appendChild(nav);
        }
    }

    // Initial menu setup
    updateMenu();

    // Handle viewport resize
    window.addEventListener("resize", updateMenu);
});


//trigger active button
function triggerActive(selector, btn = null, options = {}) {
    const target = document.querySelector(selector);
    if (!target) return;

    // Optional config
    const deactivateSiblings = options.deactivateSiblings ?? true;

    if (!deactivateSiblings) {
        target.classList.toggle('active');
        if (btn) btn.classList.toggle('active');
        return;
    }

    // Get target's class name (like widgetItem or widgetCurrContent)
    const baseClass = [...target.classList].find(cls => cls.startsWith('widget') || cls.startsWith('popup') || cls.startsWith('tab'));

    if (!baseClass) {
        // If no structural class, fallback to just toggling
        target.classList.toggle('active');
        if (btn) btn.classList.toggle('active');
        return;
    }

    // Find container: parent that holds multiple items of same type
    const container = target.closest(`.${baseClass}`).parentElement;

    // Deactivate all siblings of the same base class
    const siblings = container.querySelectorAll(`.${baseClass}`);
    siblings.forEach(el => el.classList.remove('active'));

    // Activate target
    target.classList.add('active');

    // Handle optional button active state
    if (btn) {
        const btnGroup = btn.parentElement.querySelectorAll('.button');
        btnGroup.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
}


//calc width window
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}
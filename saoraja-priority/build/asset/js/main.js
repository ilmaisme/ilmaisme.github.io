document.addEventListener("DOMContentLoaded", function () {
    const hd = document.querySelector(".header");
    const menuWrap = document.querySelector(".menuWrap");
    const nav = document.querySelector(".nav");
    const navDesk = document.getElementById("navDesk");
    const navMobWrap = document.querySelector("#navMob .menuWrap");
    const menuToggle = document.getElementById("menuToggle");

    if (!hd || !menuWrap || !nav || !navDesk || !navMobWrap) return;

    const isDesktop = () => window.innerWidth >= 1140;

    // Sticky header
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const headerHeight = hd.offsetHeight;
        hd.classList.toggle("fixed", scrollY > headerHeight);
    });

    // Reset menu on unload
    window.addEventListener("unload", function () {
        if (menuToggle && typeof menuToggle.reset === "function") {
            menuToggle.reset();
        }
    });

    // Move nav based on screen size
    function updateMenu() {
        const isDesk = isDesktop();
        menuWrap.classList.toggle("mobile", !isDesk);
        hd.classList.toggle("mobile", !isDesk);

        if (isDesk) {
            navDesk.appendChild(nav);
        } else {
            navMobWrap.appendChild(nav);
        }
    }

    function initMobileMenu() {
        document.querySelectorAll(".navItem, .navSubItem").forEach(item => {
            const btn = item.querySelector(":scope > .navLink, :scope > .navSubLink");
            const subMenu = item.querySelector(":scope > .navSub, :scope > .navSubChild");

            if (!btn) return;

            // Remove old listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            let firstClick = true;

            newBtn.addEventListener("click", function (e) {
                if (isDesktop()) return; // Only mobile behavior

                const hasSub = !!subMenu;
                const isOpen = item.classList.contains("open");

                if (hasSub) {
                    e.preventDefault();

                    // Accordion only at same level
                    const siblings = Array.from(item.parentElement.children)
                        .filter(sib => sib !== item && sib.classList.contains(item.classList[0]));

                    siblings.forEach(sib => sib.classList.remove("open"));

                    if (!isOpen) {
                        item.classList.add("open");
                        firstClick = false;
                    } else {
                        // If already open, close it and all its children
                        item.classList.remove("open");
                        item.querySelectorAll(".open").forEach(child => child.classList.remove("open"));
                        firstClick = true;
                    }
                }
            });
        });
    }

    updateMenu();
    initMobileMenu();

    window.addEventListener("resize", () => {
        updateMenu();
        initMobileMenu();
    });
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
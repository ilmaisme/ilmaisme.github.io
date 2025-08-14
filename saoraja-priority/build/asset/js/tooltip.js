document.querySelectorAll('.tooltip').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();

        const tooltipTemplate = document.querySelector('.tooltipTemplate');
        const tooltipTxt = tooltipTemplate.querySelector('.tooltipTxt');

        tooltipTxt.textContent = btn.getAttribute('content');
        tooltipTemplate.style.display = 'block';

        const btnRect = btn.getBoundingClientRect();
        const tipWidth = tooltipTemplate.offsetWidth;
        const tipHeight = tooltipTemplate.offsetHeight;

        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 0;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        let left = btnRect.left + scrollX + (btnRect.width - tipWidth) / 2;
        let top = btnRect.top + scrollY - tipHeight - 8; // above by default
        let right = 'auto';

        // Check header overlap → move below
        if (top < scrollY + headerHeight) {
            top = btnRect.bottom + scrollY + 8; // place below
        }

        // If tooltip overflows right → align right edge
        if (left + tipWidth > scrollX + window.innerWidth) {
            left = 'auto';
            right = window.innerWidth - btnRect.right - scrollX;
        }

        // If tooltip overflows left → snap to button's left
        if (typeof left === 'number' && left < scrollX) {
            left = btnRect.left + scrollX;
        }

        tooltipTemplate.style.left = typeof left === 'number' ? `${left}px` : left;
        tooltipTemplate.style.top = `${top}px`;
        tooltipTemplate.style.right = typeof right === 'number' ? `${right}px` : right;
    });
});

// Hide on outside click
document.addEventListener('click', () => {
    document.querySelector('.tooltipTemplate').style.display = 'none';
});

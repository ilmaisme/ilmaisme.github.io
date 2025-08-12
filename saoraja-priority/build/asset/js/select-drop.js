document.querySelectorAll('.selectDrop select').forEach(select => {
    const required = select.classList.contains('required');
    const map = document.querySelector('.partnerMap');

    select.classList.add('hidden');
    const wrap = document.createElement('div');
    wrap.className = 'select';
    select.parentNode.insertBefore(wrap, select);
    wrap.appendChild(select);

    const styled = document.createElement('div');
    styled.className = 'styledSelect';
    styled.textContent = select.selectedOptions[0]?.textContent || '';
    select.after(styled);

    const list = document.createElement('ul');
    list.className = 'options hidden';
    styled.after(list);

    [...select.options].forEach(opt => {
        const li = document.createElement('li');
        li.textContent = opt.textContent;
        li.setAttribute('rel', opt.value);
        list.appendChild(li);
        li.onclick = e => {
            e.stopPropagation();
            styled.textContent = li.textContent;
            select.value = li.getAttribute('rel');
            list.classList.add('hidden');
            styled.classList.remove('active', 'open');
            select.querySelectorAll('option:disabled').forEach(o => o.removeAttribute('selected'));
            if (map && map.offsetParent !== null) {
                map.querySelectorAll('.partnerMapArea').forEach(a => a.classList.remove('active'));
                map.querySelector(`[value='${select.value}']`)?.classList.add('active');
                window.displayProvince?.(select.value);
            }
            if (required && select.value) wrap.nextElementSibling?.classList.contains('required') && (wrap.nextElementSibling.style.display = 'none');
        };
    });

    styled.onclick = e => {
        e.stopPropagation();
        document.querySelectorAll('.styledSelect.active').forEach(s => s.classList.remove('active'));
        styled.classList.toggle('active');
        list.classList.toggle('hidden');
        styled.classList.toggle('open', !list.classList.contains('hidden'));
        if (required && !wrap.nextElementSibling?.classList.contains('required')) {
            const label = document.createElement('div');
            label.className = 'required';
            label.textContent = '*This field is required.';
            wrap.after(label);
        }
    };

    document.addEventListener('click', () => {
        styled.classList.remove('active', 'open');
        list.classList.add('hidden');
    });
});

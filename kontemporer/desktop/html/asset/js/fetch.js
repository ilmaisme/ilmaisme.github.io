// Fetch more articles
var currentPage = 1,
    perPage = 5,
    btn = $('#btnload');

function populate(imgPrefix, title, link, lead, index) {
    var grid = document.querySelector('#load');

    var item = document.createElement('li');
    item.classList.add('articleItem', 'mt20', 'display-flex');

    var panel = `
        <a href="${link}" class="articleImg__wrap" aria-label="${title}">
            <img src="${imgPrefix}${index}.jpg" class="articleImg" alt="" width="178" height="155" loading="lazy" onerror="this.onerror=null;this.src='asset/images/default-thumbnail.jpg';">
        </a>
        <div class="articleBox">
            <h3 class="articleTitle">
                <a href="${link}" class="articleLink">${title}</a>
            </h3>
            <div class="articleLead">${lead}</div>
            <div class="articleDetail display-flex aitems-center mt10">
                <div class="articleTime">Minggu, 18 Mei 2025</div>
            </div>
        </div>
    `;

    item.innerHTML = panel;
    grid.appendChild(item);
}

function getResults() {
    $.getJSON("asset/json/results.json", function (data) {
        var posts = data.posts;
        var count = posts.length;

        var start = (currentPage - 1) * perPage;
        var end = Math.min(start + perPage, count);

        // No more pages
        if (start >= count) {
            btn.remove();
            // console.log("all pages fetched");
            return;
        }

        for (let i = start; i < end; i++) {
            let post = posts[i];
            populate(post.img, post.title, post.link, post.lead, i);
        }

        // Hide button if all data has been loaded
        if (end >= count) {
            btn.remove();
        }
    });
}

// Initial load
getResults();

$(function () {
    btn.on('click', function () {
        currentPage++;
        getResults();
    });
});
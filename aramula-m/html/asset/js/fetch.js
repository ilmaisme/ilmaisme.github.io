// fetch more article
var currentPage = 1,
    btn = $('#btnload');

function populate(img, title, link, subtitle, user) {
    var grid = document.querySelector('#load');
    var item = document.createElement('li');
    var panel = '<div class="articleItem articlePop mt20 display-flex">';
    panel += '<a href="' + link + '" class="articleImg__wrap" aria-label="' + title + '">';
    panel += '<img src="' + img + '.webp" class="articleImg" alt="" width="87" height="87" loading="lazy">';
    panel += '</a>';
    panel += '<div class="articleBox">';
    panel += '<div class="articleSubtitle">' + subtitle + '</div>';
    panel += '<h3 class="articleTitle mt5"><a href="' + link + '">' + title + '</a></h3>';
    panel += '<div class="articleDetail user display-flex aitems-center mt5">';
    panel += '<a href="#" class="userName display-flex aitems-center">';
    panel += 'Salma Farida';
    panel += '</a>';
    panel += '<div class="articleTime">9 menit yang lalu</div>';
    panel += '</div>';
    panel += '</div>';
    panel += '</div>';
    panel += '</li>';
    $(item).appendTo(grid);
    $(item).html(panel);
}

function getResults(filter) {
    // console.log(currentPage);
    $.getJSON("asset/json/results.json", function (data) {
        var perPage = 4;
        var count = data.posts.length;

        if (currentPage * perPage >= count) {
            //indeks berita
            var buttonIndeks = '<a href="indeks.html" class="button buttonMore text-center mt30">Indeks Berita</a>';
            $(buttonIndeks).appendTo('#wrapload');
            btn.remove();
            // console.log("all pages fetched");
            // return false;
        }
        $(data.posts).each(function (i, post) {
            if (i >= (currentPage - 1) * perPage && i < currentPage * perPage) {
                populate(post.img, post.title, post.link, post.subtitle, post.user);
                i = i + perPage;
            }
        });
        perPage += perPage;
    });
}
getResults();

$(function () {
    btn.click(function (e) {
        currentPage++;
        getResults();
    });
});
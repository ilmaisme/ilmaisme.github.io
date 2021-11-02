// add more section article
var currentPage = 1,
    btn = $('#buttonSection');

function populate() {
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

$(function () {
    btn.click(function (e) {
        currentPage++;
        getResults();
    });
});
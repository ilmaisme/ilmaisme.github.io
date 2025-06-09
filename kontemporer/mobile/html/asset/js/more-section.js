// fetch more article
var currentPage = 1,
    btn = $('#buttonSection');

function populate(currentPage, title) {
    var grid = document.querySelector('#load');
    var item = document.createElement('div');

    var panel = '<div class="profileSection__wrap row">\
    <div class="profileHeading display-flex jcontent-between">\
        Subheading ' + currentPage + '\
        <button type="button" class="button profileSection__del">Hapus</button>\
    </div>';
    panel += '<div class="formSection">\
    <div class = "formWrap mt20">\
        <label for = "title' + currentPage + '" class = "formLabel" > Judul </label>\
        <input class = "formInput formInput__error mt10" id = "title' + currentPage + '" type = "text">\
        <div class = "formMisc display-flex aitems-center jcontent-between mt10">\
        <div class = "formWarn" > <span class = "icon icon-warn" > </span>Judul harus diisi</div>\
        <div class = "formCount"> 50 / 50 </div> </div> \
    </div>\
    <div class = "formWrap mt20">\
        <div class = "formLabel" > Gambar Artikel </div>\
        <div class = "formUpload mt10">\
        <label for = "upload' + currentPage + '" class = "formUpload__btn button buttonPink"> \
        <span> <img src = "asset/images/icon-folder.png" class = "formUpload__icon" alt = "" width = "15" height = "15"> </span> \
        Browse</label><input type = "file" name = "upload' + currentPage + '" accept = "image/*" id = "upload' + currentPage + '" / >\
        <span class = "fileName" > Pilih file.. </span>\
        </div>\
        <div class = "formMisc mt10" > * (Maksimal 5 MB.Rekomendasi ukuran: 1900 px x 998 px.Format file yang diperbolehkan: jpg, png & gif.) </div>\
    </div> \
    <div class = "formWrap formArea__wrap mt20">\
        <label for = "captionimg' + currentPage + '" class = "formLabel" > Caption Gambar </label>\
        <textarea class = "formArea mt10" id = "captionimg' + currentPage + '" cols = "30" rows = "6" > </textarea>\
        <div class = "formMisc mt10" > * Caption gambar wajib diisi dengan deskripsi gambar dan sumber gambar.Contoh: Berinvestasi sejak dini akan bermanfaat bagi masa depan(Sumber gambar: ABCD) </div>\
    </div>\
    <div class = "formWrap formArea__wrap mt20" >\
        <div class = "formLabel mb10"> Deskripsi <span class = "red" > * </span></div>\
        <div id = "moreeditor' + currentPage + '" class="moreeditor' + currentPage + '"><p> This is the editor content. </p> </div>\
    </div> \
    </div > ';

    panel += '</div>';
    panel += '</div>';
    $(item).appendTo(grid);
    $(item).html(panel);
}

$(function () {
    btn.click(function (e) {
        currentPage++;
        //console.log(currentPage);
        populate(currentPage);

        //upload image
        $('input[type=file]').change(function (e) {
            $in = $(this);
            $in.next().html($in.val());
        });

        //desc editor
        $('.moreeditor' + currentPage).each(function () {
            CKEDITOR.replace($(this).prop('id'));
        });

        var btndel = $('.profileSection__del')
        btndel.each(function (e) {
            $(this).on("click", function () {
                $(this).parent().parent().remove();
            })
        })
    });
});
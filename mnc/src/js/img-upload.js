$(document).ready(function () {
    ImgUpload();
})

function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];

    $('.uploadInput').each(function () {
        $(this).on('change', function (e) {
            imgWrap = $(this).closest('.upload').find('.uploadImg__wrap');
            var maxLength = $(this).attr('data-max_length');
            var multiple = $(this).attr('multiple');

            var files = e.target.files;
            var filesArr = Array.prototype.slice.call(files);
            var iterator = 0;
            filesArr.forEach(function (f, index) {

                if (!f.type.match('image.*')) {
                    return;
                }

                if (!multiple) {
                    // console.log('single')
                    singleUpload()
                } else {
                    // console.log('multiple')
                    multipleUpload()
                }

                function multipleUpload() {
                    if (imgArray.length > maxLength) {
                        $('.uploadWarn').html('*Upload limit max ' + (parseInt(maxLength) + 1) + ' items');
                        return false
                    } else {
                        $('.uploadWarn').html('')
                        var len = 0;
                        for (var i = 0; i < imgArray.length; i++) {
                            if (imgArray[i] !== undefined) {
                                len++;
                            }
                        }
                        if (len > maxLength) {
                            return false;
                        } else {
                            imgArray.push(f);

                            var reader = new FileReader();
                            reader.onload = function (e) {
                                var html = "<div class='uploadImg__box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".-removeupic").length + "' data-file='" + f.name + "' class='uploadImg__bg'><button aria-label='remove image' class='uploadImg__close -removeupic'></button></div></div>";
                                imgWrap.append(html);
                                iterator++;
                            }
                            reader.readAsDataURL(f);
                        }
                    }
                }

                function singleUpload() {
                    imgArray.push(f);

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var html = "<div class='uploadImg__box'><div style='background-image: url(" + e.target.result + ")' data-file='" + f.name + "' class='uploadImg__bg'></div></div>";
                        imgWrap.html(html);
                    }
                    reader.readAsDataURL(f);
                }
            });

        });
    });

    $('body').on('click', ".-removeupic", function (e) {
        var file = $(this).parent().data("file");
        for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i].name === file) {
                imgArray.splice(i, 1);
                break;
            }
        }
        $(this).parent().parent().remove();
    });
}

function removeProfilePic() {
    $('.uploadImg__box').remove();
}
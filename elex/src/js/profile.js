$(document).ready(function () {
    //image upload preview
    function initImageUpload(box) {
        let uploadField = box.querySelector('.image-upload');

        uploadField.addEventListener('change', getFile);

        function getFile(e) {
            let file = e.currentTarget.files[0];
            checkType(file);
        }

        function previewImage(file) {
            let thumb = box.querySelector('.image-preview'),
                reader = new FileReader();

            reader.onload = function () {
                thumb.style.backgroundImage = 'url(' + reader.result + ')';
            }
            reader.readAsDataURL(file);
            thumb.className += ' js--no-default';
        }

        function checkType(file) {
            let imageType = /image.*/;
            if (!file.type.match(imageType)) {
                throw 'File bukan gambar';
            } else if (!file) {
                throw 'Tidak ada gambar yang dipilih';
            } else {
                previewImage(file);
            }
        }

    }

    // initialize box-scope
    var boxes = document.querySelectorAll('.upload-box');

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        initImageUpload(box);
    }

    //show hide password
    $("#btnpass").click(function () {
        let input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).addClass("show")
        } else {
            $(this).removeClass("show")
            input.attr("type", "password");
        }
    });

    //edit profile onclick enable form
    $("#btnedit").click(function () {
        $(this).html("Save")
        $(".formInput").removeClass("disabled")
        $("#btnpass").removeClass("disabled")
        $("#btncancel").removeClass("hide")
    })
    $("#btncancel").click(function () {
        $(this).addClass("hide")
        $(".formInput").addClass("disabled")
        $("#btnpass").addClass("disabled")
        $("#btnedit").html("Edit Profile")
    })
})
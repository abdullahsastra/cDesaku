$(function () {
        $('.table a').quickEdit({
            blur: false,
            checkold: true,
            space: false,
            maxLength: 50,
            showbtn: false,
            submit: function (dom, newValue) {
                dom.text(newValue);
            }
        });

        $('#click_edit').on('click', function () {
            var edit = $(this).quickEdit('create', {
                prefix: '.qe_?',
                blur: true,
                autosubmit: false,
                checkold: true,
                space: false,
                submit: function (dom, newValue) {
                    dom.text(newValue);
                },
                tmpl: '<span class="qe_scope input-group"><span><textarea rows="5" class="qe_input form-control" ></textarea></span>'
                + '<span class="input-group-btn" style="vertical-align: top;"><button class="btn btn-primary qe_submit" >Okey</button>'
                + '<button class="btn btn-danger qe_cancel">Cancle</button></span></span>'
            });
            $(this).after(edit);
            $('textarea', edit)[0].select();
        });
    })
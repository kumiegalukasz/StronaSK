function openModal() {
            $('#myModal').modal();
            setTimeout(function () {
                $('#myModal').modal('hide');
            }, 2000);
        }

        $('form#contactForm').validate({
            submitHandler: function (form) {
                event.preventDefault();
                $.ajax({
                    'url': 'mail.php',
                    'type': 'post',
                    'dataType': 'json',
                    'data': {
                        'name': $('input#name').val(),
                        'email': $('input#email').val(),
                        'message': $('textarea#message').val()
                    },
                    'success': function (response) {
                        $('input#name').val('');
                        $('input#email').val('');
                        $('textarea#message').val('');

                        openModal();
                    }
                });
            },
            errorClass: "text-error",
            rules: {
                name: "required",
                email: "required",
                message: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Name field is required",
                message: "Message field is required",
                email: {
                    required: "Email field is required",
                    email: "Email Address in invalid format"
                }
            }
        });
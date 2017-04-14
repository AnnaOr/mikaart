$(function() {
    $('#btn-submit').click(sendForm);
});

function sendForm(e) {
    var form = document.querySelector('form');
    if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/aorfinyak@gmail.com",
            method: "POST",
            data: {

                clientName: $('#name').val(),

                clientEmail: $('#email').val(),
                clientMessage: $('#message').val(),
            },
            dataType: "json"
        }).done(function() {
            $('#messageDone').html('Дякую за повідомлення!');
        });
    }
}

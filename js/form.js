$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/aorfinyak@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            message: $('#message').val()
        },
        dataType: "json"
    });
    .done(function() {
        $('form').html('<h1>Дякую!</h1>');
    });
}

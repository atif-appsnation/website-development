$(document).ready(function() {
    // AJAX form submit
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'form_submit.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#responseMessage').html(response);
                $('#contactForm')[0].reset();
            },
            error: function() {
                $('#responseMessage').html('<div class="alert alert-danger">Something went wrong. Please try again.</div>');
            }
        });
    });
});
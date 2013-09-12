$(document).ready(function() {
    // bind 'myForm' and provide a simple callback function
    $('#new_avatar_uploader').ajaxForm(function() {
        alert("Thank you for your comment!");
    });
});

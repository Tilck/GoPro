$(document).ready(function() {
    $("#form").submit(function(){
        $.ajax({
            type: "POST",
            url: "contact_me.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Thank you!");
        });
        return false;
    });
});



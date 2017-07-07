$(document).ready(function(){

    $( window ).load(function() {


        $.ajax({
            method: "post",
            url: "Boredom_Busters/src/js/db_results.php",
            data: data,
            success: function(data){

                $("#chadd").html(data);

            }

        });
    });

});
$(document).ready(function(){

    $("#signin").click(function(){

        var search = $('#search').val();

        var data = "q=" + search;

        $.ajax({
            method: "post",
            url: "Boredom_Busters\src\js\db_results.php",
            data: data,
            success: function(data){

                $("#chadd").html(data);

            }

        });
    });

});
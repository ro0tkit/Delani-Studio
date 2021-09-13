//Business Logic








//User Interface Logic

$(document).ready(function(){

    $(".development").hide(function(){
        $("#dev-image").click(function(){
            $(".development").toggle();
    
        });
    });

    
    $(".products").hide(function(){
        $("#product-image").click(function(){
            $(".products").toggle();
        })
    });

    
    $(".design").hide(function(){
        $("#design-image").click(function(){
            $(".design").toggle();
        })
    });

    /*------Form----------*/
    $("#form").submit(function(e){
        e.preventDefault();
        var userName = $("input#name").val();
        var email = $("input#email").val();
        var text = $("#message").val();
        alert("Than you "+userName+" for reaching out to us.");
    });
   
});


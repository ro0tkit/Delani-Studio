//Business Logic



  







//User Interface Logic

$(document).ready(function(){
    

    
        $("#dev-image").click(function(){
            $("#dev-image").hide();
            $(".development").show();
    
        });
        $(".development").click(function(){
            $(".development").hide();
            $("#dev-image").show();
    
        });

    
    $("#product-image").click(function(){
        $("#product-image").hide();
        $(".products").show();

    });

    $(".products").click(function(){
        $(".products").hide();
        $("#product-image").show();

    });
   
        $("#design-image").click(function(){
            $("#design-image").hide()
            $(".design").show();
        
    });

    $(".design").click(function(){
        $(".design").hide()
        $("#design-image").show();
    });

    /*------Form----------*/
    $("#form").submit(function(e){
        e.preventDefault();
        var userName = $("input#name").val();
        var email = $("input#email").val();
        var text = $("#message").val();

        if(!userName||!email){
            alert("Please Enter Valid Name and Email!");
        }else{
            alert("Than you "+userName+" for reaching out to us.");
        }
        
    });
   
    
    $("#black").hover(function(){
        $("#black").addClass("overlay");
      })




});


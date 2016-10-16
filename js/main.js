// ------------------------------------------------------------
// These functions work with the UI elements to hide and show
// projects 
// ------------------------------------------------------------

$(".item-detail").click(function(event){
    event.preventDefault();
    var id = $(this).attr("href");
    
    $(id).addClass("show");
                        });
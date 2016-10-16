

var projectSource = $("#project-template").html();
var projectTemplate = Handlebars.compile(projectSource);

for (var i in data) {
    var project = projectTemplate(data[i]);
    console.log(i);
    $(".portfolio").append(project);
} 

// ------------------------------------------------------------
// These functions work with the UI elements to hide and show
// projects 
// ------------------------------------------------------------

$(".project-link").click(function(event){
    event.preventDefault();
    console.log("Clicked");
    var id = $(this).attr("href");
    
    $(id).addClass("show");
                        });
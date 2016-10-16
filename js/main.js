

var projectSource = $("#project-template").html();
var projectTemplate = Handlebars.compile(projectSource);

var projectDetailSource = $("#project-detail-template").html();
var projectDetailTemplate = Handlebars.compile(projectDetailSource)

for (var i in data) {
    var project = projectTemplate(data[i]);
    $(".portfolio").append(project);
    $("body").append(projectDetailTemplate(data[i]));
} 

// ------------------------------------------------------------
// These functions work with the UI elements to hide and show
// projects 
// ------------------------------------------------------------

$(".project-link").click(function(event){
    event.preventDefault();
    console.log("Clicked");
    var id = $(this).attr("href");
    console.log(id);
    $(id).addClass("show");
                        });
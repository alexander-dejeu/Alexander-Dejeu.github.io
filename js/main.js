

var projectSource = $("#project-template").html();
var projectTemplate = Handlebars.compile(projectSource);

var projectDetailSource = $("#project-detail-template").html();
var projectDetailTemplate = Handlebars.compile(projectDetailSource)

for (var i in data) {
    var project = projectTemplate(data[i]);
    $(".all-projects-container").append(project);
    $("body").append(projectDetailTemplate(data[i]));
} 

// ------------------------------------------------------------
// These functions work with the UI elements to hide and show
// projects 
// ------------------------------------------------------------

//Handle clicks on any of the project-link elements
$(".project-link").click(function(event){
    event.preventDefault();
    console.log("Clicked");
    var id = $(this).attr("href");
    console.log(id);
    $(id).addClass("show");
                        });
$(".close-detail-button").click(function(event){
    //Search up the DOM tree for an element with clas .item-detail
    //Then remove the show class.
    
    $(this).parents(".item-detail").removeClass("show");                           
                               });
//var $tlt = $('.project_title').textillate({ 
//    autoStart: false,
//    in: { effect: 'tada' }
//    
//});
//Handle Hovers on the timeline
$(document).ready(function() {
  $('.content').hover(
    function() {
        product = data[$(this).data('content')];
//        $tlt.textillate('start');   
        $('.project_title').text(product.title);
        $('.project_desc').text(product.description);
        $('.project-left').css('background-color', product.bg_color);
    }
  );
});
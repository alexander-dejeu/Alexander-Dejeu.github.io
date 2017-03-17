

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
$(document).ready(function() {
    for (var i in data) {
        var portfolioItem = data[i]
        $('.title:eq( '+i+' )').text(portfolioItem.title);
    }
    var firstItem = $('.content:eq( '+0+' )');
    firstItem.addClass('content-hover');
    firstItem.find('.left-block').addClass('leftblock-hover'); firstItem.find('.line').addClass('line-hover');
    firstItem.find('.title').addClass('title-hover');
    
    var leftSide = $('.project-left:eq( '+0+' )');
    leftSide.find('.project_title').text(data[0].title);
    leftSide.find('.project_desc').text(data[0].description);
    leftSide.css('background-color', data[0].bg_color);
    if (data[0].bg_color == "#F2DF07" || data[0].bg_color == '#FEE000'){     
        leftSide.css('color', '#000000');
    }
    else{
        leftSide.css('color', '#ffffff');
    };
});

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

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//var $tlt = $('.project_title').textillate({ 
//    autoStart: false,
//    in: { effect: 'tada' }
//    
//});
$(document).ready(function() {
  $('.call_to_action').hover(
    function() {
        product = data[$(this).data('call_to_action')];
        $('.project_title').css('color', product.bg_color);
    }
      );
});

//Handle Hovers on the timeline
$(document).ready(function() {
  $('.content').mouseenter(
    function() {
        // TODO: Ask why this is not working
        
        if ($(this).hasClass('content-hover')){
            return;
        }
        
        $('.content-hover').removeClass('content-hover');
        $('.leftblock-hover').removeClass('leftblock-hover');
        $('.line-hover').removeClass('line-hover');
        $('.title-hover').removeClass('title-hover');
        // for the element just hovered over, remove the 'przed' class and add 'po'
        $(this).addClass('content-hover');
        $(this).find('.left-block').addClass('leftblock-hover');
        $(this).find('.line').addClass('line-hover');
        $(this).find('.title').addClass('title-hover');
        
        product = data[$(this).data('content')];
//        $tlt.textillate('start');   
        $('.project_title').text(product.title);
        $('.project_title').animateCss('slideInLeft');
        $('.project_desc').animateCss('slideInUp');
//        $('.project_title').addClass('animated bounceOutLeft');
        $('.project_desc').text(product.description);
        $('.project-left').css('background-color', product.bg_color);
        if (product.bg_color == "#F2DF07" || product.bg_color == '#FEE000'){
            $('.project-left').css('color', '#000000');
        }
        else{
            $('.project-left').css('color', '#ffffff');
        };
        
        $('.title:eq( '+$(this).data('content')+' )').text(product.title);
//          $('p').hover(function(){
//            $(this).css("color", product.bg_color);
//        }, function(){
//            $(this).css("color", "black");
//        });
    }
  );
});
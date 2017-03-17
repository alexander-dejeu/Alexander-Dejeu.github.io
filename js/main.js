

var projectSource = $("#project-template").html();
var projectTemplate = Handlebars.compile(projectSource);

var projectDetailSource = $("#project-detail-template").html();
var projectDetailTemplate = Handlebars.compile(projectDetailSource)

for (var i in data) {
    var project = projectTemplate(data[i]);
    $(".all-projects-container").append(project);
    $("body").append(projectDetailTemplate(data[i]));
} 

// -----------------------------------------------------------
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
        leftSide.find('.product-link').css('color', '#000000');
        leftSide.find('.call_to_action').css('border-color', '#000000');
    }
    else{
        leftSide.css('color', '#ffffff');
        leftSide.find('.product-link').css('color', '#ffffff');
        leftSide.find('.call_to_action').css('border-color', '#ffffff');
    };
    
        if (data[0].website_link == ""){
            //Hide the website link button
            leftSide.find('#site').addClass('hidden')
        }
        else{
            leftSide.find('#site').removeClass('hidden');
            leftSide.find('#site_link').attr('href',data[0].website_link);
            if (data[0].websiteIsArticle){
                leftSide.find('#site-link-p').text("A R T I C L E")
            }
            else{
                leftSide.find('#site-link-p').text("S I T E")
            }
        }
        if (data[0].live_product_link == ""){
            //Hide the live product button
            leftSide.find('#product').addClass('hidden')
        }
        else{
            leftSide.find('#product').removeClass('hidden');
            leftSide.find('#product_link').attr('href',data[0].live_product_link);
        }
    
    
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


$(document).ready(function() {
  $('.call_to_action').mouseenter(
    function() {
        var selectedContent = $('.content-hover:eq( '+0+' )');
        var index = selectedContent.data('content');
        if (data[index].bg_color == "#F2DF07" || data[index].bg_color == '#FEE000'){     
            $(this).css('background-color', '#000');
        }
        else{
            $(this).css('background-color', '#fff');
        }
        
        $(this).css('cursor', 'pointer');
        $(this).find('a').css('color', data[index].bg_color);
    }
  );
});

$(document).ready(function() {
  $('.call_to_action').mouseleave(
    function() {
        var selectedContent = $('.content-hover:eq( '+0+' )');
        var index = selectedContent.data('content');
        $(this).css('background-color', 'inherit');
        $(this).css('cursor', 'inherit');
        if (data[index].bg_color == "#F2DF07" || data[index].bg_color == '#FEE000'){     
            $(this).find('a').css('color', '#000');
        }
        else{
            $(this).find('a').css('color', '#fff');
        }
         
        
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
        // *********** ADD + REMOVE ***********
        $('.content-hover').removeClass('content-hover');
        $('.leftblock-hover').removeClass('leftblock-hover');
        $('.line-hover').removeClass('line-hover');
        $('.title-hover').removeClass('title-hover');

        $(this).addClass('content-hover');
        $(this).find('.left-block').addClass('leftblock-hover');
        $(this).find('.line').addClass('line-hover');
        $(this).find('.title').addClass('title-hover');
        
        // *********** UPDATE DATA ***********
        product = data[$(this).data('content')]; 
        $('.project_title').text(product.title);
        $('.project_title').animateCss('slideInLeft');
        $('.project_desc').animateCss('slideInUp');
        $('.buttons').animateCss('fadeIn');
        $('.project_desc').text(product.description);
        $('.project-left').css('background-color', product.bg_color);
        
        
        if (product.website_link == ""){
            //Hide the website link button
            $('.project-left').find('#site').addClass('hidden')
        }
        else{
            $('.project-left').find('#site').removeClass('hidden');
            $('.project-left').find('#site_link').attr('href',product.website_link);
            if (product.websiteIsArticle){
                $('.project-left').find('#site-link-p').text("A R T I C L E")
            }
            else{
                $('.project-left').find('#site-link-p').text("S I T E")
            }
        }
        if (product.live_product_link == ""){
            //Hide the live product button
            $('.project-left').find('#product').addClass('hidden')
        }
        else{
            $('.project-left').find('#product').removeClass('hidden');
            $('.project-left').find('#product_link').attr('href',product.live_product_link);
        }
        
        
        // *********** DO SILLY LOGIC FOR COLOR ***********
        if (product.bg_color == "#F2DF07" || product.bg_color == '#FEE000'){
            $('.project-left').css('color', '#000000');
            $('.project-left').find('.product-link').css('color', '#000000');
            $('.project-left').find('.call_to_action').css('border-color', '#000000');
        }
        else{
            $('.project-left').css('color', '#ffffff');$('.project-left').find('.product-link').css('color', '#ffffff');
            $('.project-left').find('.call_to_action').css('border-color', '#ffffff');
        };
    }
  );
});
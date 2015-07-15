$(document).ready(function(){
  $("#contents  h1, #contents  h2").each(function(){
    $("#navleft ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-'));
    $("#navleft ul li:first-child a").parent().addClass("active");
  });
  
  $("#navleft ul li a").live("click",function(event) {
    $("body").animate({scrollTop:$($(this).attr("href")).offset().top-190},400);
    $("#navleft ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();    
  });
  
$("#contents div ul li a").live("click",function(event) {
    $("body").animate({scrollTop:$($(this).attr("href")).offset().top-190},400);
	event.preventDefault();    
 }); 
  
  var sectionHeight = function() {
    var total    = $(window).height(),
        $section = $('section').css('height','auto');
    
    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
    }
  }
  
  sectionHeight();
  $(window).resize(sectionHeight);

});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }

};

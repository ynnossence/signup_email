$(document).ready(function(){
/*
  var $panel = $('#sidebar-accordion .widget-content').hide();
  var $allPanels = $('#sidebar-accordion .widget');
  $('#sidebar-accordion .active').find('.widget-content').show();
  $('#sidebar-accordion .widget-title').click(function() {
      $this = $(this);
      $target =  $this.parent();
      if(!$target.hasClass('active')){
         $allPanels.removeClass('active').find('.widget-content').slideUp();
         $target.addClass('active').find('.widget-content').slideDown();
      } 
    return false;
  });
*/
var full = $('#content').height();
var contenthyt = full - 148; 
var mainwid = $('.main-wrap').height();
  
$('#content #sidebar,#content #main').css({
  'height' : contenthyt + 'px'
});

 var resizeTimer;
  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fixHeight, 1);
  });
  
   function fixHeight() {
    var full = $('#content').height();
    var contenthyt = full - 148; 
    var mainwid = $('.main-wrap').height();

    $('#content #sidebar,#content #main').css({
      'height' : contenthyt + 'px'
    });

  };

  $('#sidebar-accordion .active .widget-content').show();
  $('#sidebar-accordion .default .widget-title').toggle(function(){
  	$(this).next().slideDown(); 
  	$(this).parent().addClass('active');
  },function(){
  	$(this).next().slideUp();  
  	$(this).parent().removeClass('active');
  });
  
  $('#sidebar-accordion .checked .widget-content').hide();
  

});

$(function(){
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

  var mainwid = $('#content').height();


  $('#content #sidebar').css({
    'height' : mainwid + 'px'
  });

 var resizeTimer;
  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fixHeight, 1);
  });
  
  // Height Func
  function fixHeight() {
    
    $('#content #sidebar').css({
      'height' : mainwid + 'px'
    });
  };

  $('#sidebar-accordion .active .widget-content').show();
  $('#sidebar-accordion .widget-title').toggle(function(){
  	$(this).next().slideDown(); 
  	$(this).parent().addClass('active');
  },function(){
  	$(this).next().slideUp();  
  	$(this).parent().removeClass('active');
  });
  
  

});

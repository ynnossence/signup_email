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
var contenthyt2 = full - 116;  
var mainwid = $('.main-wrap').height();
  
if($('#content').hasClass('nofooter')){
      $('#content #sidebar,#content #main').css({
        'height' : contenthyt2 + 'px'
      });
     } else{

      $('#content #sidebar,#content #main').css({
        'height' : contenthyt + 'px'
      });

    }

 var resizeTimer;
  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fixHeight, 1);
  });
  
   function fixHeight() {
    var full = $('#content').height();
    var contenthyt = full - 148; 
    var contenthyt2 = full - 116;  
    var mainwid = $('.main-wrap').height();

    if($('#content').hasClass('nofooter')){
      $('#content #sidebar,#content #main').css({
        'height' : contenthyt2 + 'px'
      });
     } else{

      $('#content #sidebar,#content #main').css({
        'height' : contenthyt + 'px'
      });

    }
    

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
  
  $('#header .user-info').hover(function(){ 
    $(this).css({ 
      'padding-bottom': 15 + 'px',
      'margin-bottom' : (-15)+ 'px',  
    });
    $(this).parent().find('.logout-box').show();
  },function(){ 
    $(this).css({ 
      'padding-bottom': 0,
      'margin-bottom' : 0,  
    });
    $(this).parent().find('.logout-box').hide();
  });


  $('.logout-box').hover(function(){ 
    $(this).show();
  },function(){ 
    $(this).hide();
  });


});

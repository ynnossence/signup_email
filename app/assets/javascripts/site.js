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
  $('#sidebar-accordion .default .widget-title i').toggle(function(){
  	$(this).parent().next().slideDown(); 
  	$(this).parent().parent().addClass('active');
  },function(){
  	$(this).parent().next().slideUp();  
  	$(this).parent().parent().removeClass('active');
  });

  


  var step = 7;
  for(var i = 1; i <= 7; i++){

    if($('#sidebar-accordion').hasClass('step0' +i)){

      $('.widget-step0'+i).prevAll('.widget')
        .addClass("checked")
        .removeClass('default');
      $('.widget-step0'+i).addClass("active");

    }

  }

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

  var rads = $('.tab-rad tr');
  rads.click(function(){
    rads.removeClass('selected'); 
    $(this).addClass('selected');
  });

  $(".tabcheck tr").toggle(function () {
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });
  
});

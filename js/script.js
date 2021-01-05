$(function() {
  var $win = $(window),
      $cloneNav = $('nav').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 300 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});

$(function(){
  var topBtn = $('#pagetop');

  topBtn.hide();

  $(window).on('scroll',function(){
    if($(this).scrollTop() > 200){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  topBtn.on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },1000);
    return false
  }); 
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
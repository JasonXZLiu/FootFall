$(document).ready(function() {
    
    // add class on hover
    $('.headshot').hover(function() {
      $(this).addClass('animated');
    });
    
    // remove class on animation end
    $('.headshot').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('animated');
    });
    
});
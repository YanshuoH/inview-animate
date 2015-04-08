// Wrap inView bind to a function
var inViewRunner = function(elementId, toggleClass) {
  $('#' + elementId).bind('inview', function(event, isInView) {
    var $this = $(this);

    if (isInView) {
      $this.addClass(toggleClass);
    } else {
      $this.removeClass(toggleClass);
    }
  });
}

// Complete usage
$('#section2 h1').bind('inview', function(event, isInView) {
  var caption = $('#handle2');
  if (isInView) {
    $(caption).fadeIn(2000);
  } else {
    $(caption).fadeOut(2000);
  }
});


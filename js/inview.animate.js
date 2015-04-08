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


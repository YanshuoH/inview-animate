# inview-animate
Simple [Demo](http://yanshuoh.github.io/inview-animate/) for [JQuery.inview](https://github.com/protonet/jquery.inview)
## Requirements
```html
    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="js/jquery.inview.min.js"></script>
    <!-- Wrapper function  -->
    <script src="js/inview.animate.js"></script>
```
## Usage
I've created a wrapper function for JQuery inview, in order to 
* locate element by its ID
* toggle class when inview and outview
```javascript
    <script type="text/javascript">
      // Simple usage
      inViewRunner('section1Title', 'goAnim');
      inViewRunner('section2Title', 'goAnim');
      inViewRunner('section3Title', 'goAnim');
    </script>
```

## Complete/Complexe usage
See [README](https://github.com/protonet/jquery.inview/blob/master/README.textile) of JQuery.inview

Example:
```javascript
    // Complete usage
    $('#section2 h1').bind('inview', function(event, isInView) {
      var caption = $('#handle2');
      if (isInView) {
        $(caption).fadeIn(2000);
      } else {
        $(caption).fadeOut(2000);
      }
    });
```

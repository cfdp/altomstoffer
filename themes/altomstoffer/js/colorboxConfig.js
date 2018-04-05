(function ($, Drupal, window, document, undefined) {

  drupalSettings.colorbox.opacity = 0.50;
  drupalSettings.colorbox.maxHeight = '75%';
  drupalSettings.colorbox.maxWidth = '90%';

  //Configure colorbox call back to resize with custom dimensions 
  $.colorbox.settings.onLoad = function () {
    colorboxResize();
  }

  //Customize colorbox dimensions
  var colorboxResize = function (resize) {

    var width = "90%";
    var height = "500";

    if ($(window).width() > 720) { width = "720" }
    if ($(window).height() > 800) { height = "720" }

    $.colorbox.settings.height = height;
    $.colorbox.settings.width = width;

    //if window is resized while lightbox open
    if (resize) {
      $.colorbox.resize({
        'height': height,
        'width': width
      });
    }
  }

  //In case of window being resized
  $(window).resize(function () {
    colorboxResize(true);
  });

})(jQuery, Drupal, this, this.document);
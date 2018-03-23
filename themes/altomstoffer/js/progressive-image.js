(function ($, Drupal) {

  Drupal.behaviors.progressiveImage = {
    attach: function (context, settings) {
 
      if ($('.image-style-hero-1600x1080').length) {
        var img = new Image();
        var src = $('.image-style-hero-1600x1080').attr('src');
        img.src = src;
        img.onload = function () {
          $('.hero-progressive-image').addClass('is-loaded');
        }
      }

      if ($('.image-style-hero-1600x675').length) {
        var img = new Image();
        var src = $('.image-style-hero-1600x675').attr('src');
        img.src = src;
        img.onload = function () {
          $('.hero-progressive-image').addClass('is-loaded');
        }
      }
    }
  }

})(jQuery, Drupal);
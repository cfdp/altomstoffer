(function ($, Drupal) {

  Drupal.behaviors.typedJs = {
    attach: function (context, settings) {

      $('#typed-strings', context).once('typedString').each(function() {
  
        var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          loop: true,
          typeSpeed: 140,
          backSpeed: 70,
          backDelay: 1400,
        });

      });
    }
  }

})(jQuery, Drupal);

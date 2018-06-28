(function ($, Drupal) {

  Drupal.behaviors.signUpHandler = {
    attach: function (context, settings) {
      $('.toc--float', context).once('scrollspy').each(function () {
        console.log('test');
        $(this).scrollspy({
          animate: true,
          offset: 0,
        });
      });
    }
  };

  Drupal.behaviors.tocToggle = {
    attach: function (context, settings) {
      $('.toc-toggle', context).once('tocToggle').each(function () {
        $(this).click(function(e) {
          e.preventDefault();
          $(this).toggleClass('active');
          $('.toc--float').toggleClass('active');
        });
      });

      $('.toc__title a', context).once('tocTitle').each(function () {
        $(this).click(function (e) {
          e.preventDefault();
          $('.toc-toggle').removeClass('active');
          $('.toc--float').removeClass('active');
        });
      });

    }
  };

})(jQuery, Drupal);

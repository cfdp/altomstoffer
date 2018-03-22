(function ($, Drupal) {

  Drupal.behaviors.signUpHandler = {
    attach: function (context, settings) {
      $(".toc--float").scrollspy({
        animate: true,
        offset: 0,
      });
    }
  };

})(jQuery, Drupal);

(function ($, Drupal) {

  Drupal.behaviors.signUpHandler = {
    attach: function (context, settings) {
      $(".toc--float").scrollspy({
        animate: true,
        offset: 0,
      });
    }
  };

  Drupal.behaviors.tocToggle = {
    attach: function (context, settings) {
      $(".toc-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.toc--float').toggleClass('active');
      });

      $(".toc__title a").click(function (e) {
        e.preventDefault();
        $('.toc-toggle').removeClass('active');
        $('.toc--float').removeClass('active');
      });
    }
  };

})(jQuery, Drupal);

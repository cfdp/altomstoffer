(function ($, Drupal) {

  Drupal.behaviors.sidebarMenu = {
    attach: function (context, settings) {

      $('a.sidebar-open').click(function() {
        $('.overlay-sidebar').addClass('active');
        $('.layout-sidebar').addClass('active');
      });

      $('a.sidebar-close, .overlay-sidebar').click(function () {
        $('.overlay-sidebar').removeClass('active');
        $('.layout-sidebar').removeClass('active');
      });

    }
  }

})(jQuery, Drupal);
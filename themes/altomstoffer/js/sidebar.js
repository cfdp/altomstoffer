(function ($, Drupal) {

  Drupal.behaviors.sidebarMenu = {
    attach: function (context, settings) {

      $('a.sidebar-open', context).once('sidebarOpen').each(function () {
        $(this).click(function() {
          $('.overlay-sidebar').addClass('active');
          $('.layout-sidebar').addClass('active');
        });
      });

      $('a.sidebar-close, .overlay-sidebar').once('sidebarClose').each(function () {
        $(this).click(function () {
          $('.overlay-sidebar').removeClass('active');
          $('.layout-sidebar').removeClass('active');
        });
      });
    }
  }

})(jQuery, Drupal);
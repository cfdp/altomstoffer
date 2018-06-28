(function ($, Drupal) {

  Drupal.behaviors.tooltipsConfig = {
    attach: function (context, settings) {
      $('.tooltip', context).once('tooltipster').each(function () {
        $(this).tooltipster({
          trigger: 'click',
        });
      });
    }
  }

})(jQuery, Drupal);

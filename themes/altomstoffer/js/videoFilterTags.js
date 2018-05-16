(function ($, Drupal) {

  Drupal.behaviors.videoFilterTags = {
    attach: function (context, settings) {

        $('.field--name-field-tags .field__item').click(function(e) {
          e.preventDefault();

          // Uncheck all options.
          $('#views-exposed-form-video-archive-block-1 input[type="checkbox"]').each(function() {
            $(this).prop('checked', false);
          });

          // Check and submit new option.
          var tid = $(this).data('target-id');
          $('input[name="field_tags_target_id[' + tid + ']"]').click();
          $('#edit-submit-video-archive').click();
        });
      
    }
  }

})(jQuery, Drupal);
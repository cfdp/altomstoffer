(function ($, Drupal) {

  Drupal.behaviors.videoMasonry = {
    attach: function (context, settings) {

      // var COL_COUNT = 3; // set this to however many columns you want
      // var col_heights = [],
      //   container = document.getElementById('block-contain');
      // for (var i = 0; i <= COL_COUNT; i++) {
      //   col_heights.push(0);
      // }
      // for (var i = 0; i < container.children.length; i++) {
      //   var order = (i + 1) % COL_COUNT || COL_COUNT;
      //   container.children[i].style.order = order;
      //   col_heights[order] += parseFloat(container.children[i].style.height);
      // }
      // var highest = Math.max.apply(Math, col_heights);
      // container.style.height = highest + 'px';

      // $('.video--archive .view-content').masonry({
      //   // options
      //   itemSelector: '.video__item',
      //   columnWidth: '.video__item',
      //   gutter: 30,
      // });
      
    }
  }

})(jQuery, Drupal);
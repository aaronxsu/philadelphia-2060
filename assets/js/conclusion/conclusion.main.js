var changeSliderTopMargin = function() {
    var h1 = $('.twentytwenty-wrapper.twentytwenty-horizontal').height();
    var h2 = $('.twentytwenty-wrapper.twentytwenty-horizontal').parent().height();
    $('.twentytwenty-wrapper.twentytwenty-horizontal').css('margin-top', (h2-h1)/2);
}

$(document).ready(function() {
  $('#climate-fullpage').fullpage({
      'lazyLoading': true,
      'css3': false
  });

  $('body').bootstrapMaterialDesign();

  $('.side-by-side').twentytwenty({
      no_overlay: true,
      click_to_move: true,
      default_offset_pct: 0.95
  });

  changeSliderTopMargin();

  $(window).resize(function() {
      changeSliderTopMargin();
  });
});

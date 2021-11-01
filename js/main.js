$(function() {
  $('.l-header_btn, .c-button_close').click(function() {
    $('.l-sidebar, .c-button_close').toggleClass('is_open');
  });
});
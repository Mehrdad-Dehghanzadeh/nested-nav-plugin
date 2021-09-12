export default (settings) => {
  if (!settings.hover) {
    toggleSubmenu();
  }
};

function toggleSubmenu() {
  $('.nested-nav__item').click(function (event) {
    event.stopPropagation();
    $(event.currentTarget).toggleClass('nested-nav__item--active');
    $(event.currentTarget)
      .find('.nested-nav__item')
      .each(function () {
        $(this).removeClass('nested-nav__item--active');
      });
  });
}

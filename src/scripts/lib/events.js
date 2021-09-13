export default (settings) => {
  if (!settings.hover) {
    toggleSubmenu();
  }
};

function toggleSubmenu() {
  $('.nested-nav__item').click(function (event) {
    event.stopPropagation();
    const target = $(event.currentTarget);
    if (target.has('.nested-nav-submenu').length) {
      target.toggleClass('nested-nav__item--active');
      target.find('.nested-nav__item').each(function () {
        $(this).removeClass('nested-nav__item--active');
      });
    }
  });
}

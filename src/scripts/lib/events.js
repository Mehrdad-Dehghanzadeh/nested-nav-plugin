export default (that) => {
  const settings = that.settings;
  if (!settings.hover) {
    toggleSubmenu(that._menu);
  }
};

function toggleSubmenu(menu) {
  $(menu)
    .find('.nested-nav__item')
    .click(function (event) {
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

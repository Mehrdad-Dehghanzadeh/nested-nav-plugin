import { setNav } from './lib/nav';
import { setNavItemAjax, setNavItem } from './lib/navItem';

(function ($) {
  let pluginName = 'nestedNav';

  let defaults = {
    navItems: [],
    ajax: null,
    direction: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    maxWidth: 'auto',
  };

  const NestedNav = function (element, options) {
    this.element = element;
    this.settings = $.extend(defaults, options);
    this.init();
  };

  $.extend(NestedNav.prototype, {
    init: function () {
      this.isAjax = !!this.settings.ajax;
      setNav(this.element, this.settings);
      if (this.isAjax) {
        setNavItemAjax(this);
      } else {
        // setNavItem(this.element, this.settings.navItems);
      }
    },

    nav: function () {
      return this.element.children('.nested-nav');
    },

    menu: function () {
      return this.nav().children('.nested-nav-menu');
    },
  });

  $.fn[pluginName] = function (options) {
    return $(this).each(function () {
      let attrName = 'plugin_' + 'nested-nav';
      let instance = $.data(this, attrName);
      let optionsData = $(this).data(attrName);

      if (!instance) {
        if (options === undefined && optionsData) {
          $.data(this, attrName, new NestedNav($(this), optionsData));
        } else if (options === undefined || typeof options === 'object') {
          $.data(this, attrName, new NestedNav($(this), options));
        } else {
          $.error("method '" + options + "' not attached.");
        }
      } else {
        if (instance[options]) {
          instance[options].apply(instance);
        } else if (typeof options === 'object') {
          instance.settings = $.extend({}, instance.settings, options);
        } else if (!options) {
        } else {
          $.error("The method '" + options + "' not exist.");
        }
      }
    });
  };
  $[pluginName] = NestedNav;
})($);

// execute plugin for instance
$('[data-plugin_nested-nav]').each(function () {
  $(this).nestedNav();
});

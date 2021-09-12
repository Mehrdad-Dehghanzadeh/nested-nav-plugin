import { fetchItems } from './ajax';
import attachEvents from './events';

export function setNavItemAjax(that) {
  fetchItems(that, createTree);
  attachEvents(that.settings);
}

// export function setNavItem(element, navItems) {}

function createTree(items, node) {
  for (const item of items) {
    const template = templateNavItem(item);
    node.append(template);

    if ('children' in item && item.children.length) {
      const subNav = $('<ul class="nested-nav-submenu"></ul>');
      template.append(subNav);
      createTree(item.children, subNav);
    }
  }
}

function templateNavItem(item) {
  const hasLink = !!item.link;
  let template = $(
    '<li class="nested-nav__item" id="' +
      (item.id ? item.id : '') +
      '">' +
      '</li>'
  );
  if (hasLink) {
    template.append(
      '<a href="' +
        (item.link.href ? item.link.href : '') +
        '" class="nested-nav__link">' +
        '<i class="' +
        (item.link.icon ? item.link.icon : '') +
        '"></i>' +
        (item.link.title ? item.link.title : '') +
        '</a>'
    );
  } else {
    template.append(
      '<span class="nested-nav__item-title">' +
        '<i class="' +
        (item.icon ? item.icon : '') +
        '"></i>' +
        (item.title ? item.title : '') +
        '</span>'
    );
  }

  return template;
}

import { fetchItems } from './ajax';

export function setNavItemAjax(that) {
  fetchItems(that, createTree);
}

export function setNavItem(element) {}

function createTree(items, node) {
  for (const item of items) {
    node.append(templateNavItem(item))

    if ('children' in item && item.children.length) {
      createTree(item.children, item)
    }
  }
}

function templateNavItem(item) {
  const hasLink = !!item.link;
  let template = $(
    '<li class="nested-nav__item" id="' + item.id + '">' + '</li>'
  );
  if (hasLink) {
    template.append(
      '<a href="' +
        item.link.href +
        '" class="nested-nav__link">' +
        '<i class="' +
        item.link.icon +
        '"></i>' +
        item.link.title +
        '</a>'
    );
  } else {
    template.text(item.title);
  }

  return template;
}

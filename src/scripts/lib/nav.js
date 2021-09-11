export const nav = $(
  '<nav class="nested-nav">' +
    '<ul class="nested-nav__menu">' +
    '</ul>' +
    '</nav>'
);

export function setNav(element) {
  element.append(nav);
}

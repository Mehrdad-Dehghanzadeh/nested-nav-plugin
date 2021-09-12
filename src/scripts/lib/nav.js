export const nav = $(
  '<nav class="nested-nav">' +
    '<ul class="nested-nav-menu">' +
    '</ul>' +
    '</nav>'
);

const menu = nav.children('.nested-nav-menu');

export function setNav(element, settings) {
  navDirection(settings.direction);
  navJustifyContent(settings.justifyContent);
  textCenter(settings.textAlign);
  nav.css('max-width', settings.maxWidth);
  element.append(nav);
}

function navDirection(direction) {
  switch (direction) {
    case 'column':
      menu.addClass('nested-nav-menu--column');
      break;

    case 'column-reverse':
      menu.addClass('nested-nav-menu--column-reverse');
      break;

    case 'row-reverse':
      menu.addClass('nested-nav-menu--row-reverse');
      break;
  }
}

function navJustifyContent(justifyContent) {
  switch (justifyContent) {
    case 'space-around':
      menu.addClass('nested-nav-menu--space-around');
      break;

    case 'space-evenly':
      menu.addClass('nested-nav-menu--space-evenly');
      break;

    case 'row-reverse':
      menu.addClass('nested-nav-menu--row-reverse');
      break;

    case 'center':
      menu.addClass('nested-nav-menu--center');
      break;

    case 'end':
      menu.addClass('nested-nav-menu--end');
  }
}

function textCenter(textAlign) {
  switch (textAlign) {
    case 'left':
      menu.addClass('nested-nav-menu--text-left');
      break;

    case 'right':
      menu.addClass('nested-nav-menu--text-right');
  }
}

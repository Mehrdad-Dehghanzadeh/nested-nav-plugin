export function setNav(that) {
  that._nav = $(
    '<nav class="nested-nav">' +
      '<ul class="nested-nav-menu">' +
      '</ul>' +
      '</nav>'
  );
  that._menu = that._nav.children('.nested-nav-menu');
  const settings = that.settings;
  const element = that.element;
  navDirection(settings.direction, that._menu);
  navJustifyContent(settings.justifyContent, that._menu);
  textCenter(settings.textAlign, that._menu);
  that._nav.css('max-width', settings.maxWidth, that._menu);
  element.append(that._nav);
}

function navDirection(direction, menu) {
  if (direction === 'column' || 'column-reverse' || 'row-reverse') {
    menu.addClass(`nested-nav-menu--${direction}`);
  } else {
    throw new Error(
      'Your Direction Is Not Valid That Shoud Be flex-direction Value'
    );
  }
}

function navJustifyContent(justifyContent, menu) {
  if (
    justifyContent === 'space-around' ||
    'space-evenly' ||
    'row-reverse' ||
    'center' ||
    'end'
  ) {
    menu.addClass(`nested-nav-menu--${justifyContent}`);
  } else {
    throw new Error(
      'Your Justify Content Is Not Valid That Shoud Be justify-content Value'
    );
  }
}

function textCenter(textAlign, menu) {
  if (textAlign === 'left' || 'right') {
    menu.addClass(`nested-nav-menu--text-${textAlign}`);
  } else {
    throw new Error(
      'Your Text Align Is Not Valid That Shoud Be text-align Value'
    );
  }
}

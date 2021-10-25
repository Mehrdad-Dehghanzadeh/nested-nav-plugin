import attachEvents from './events';
import { createTree } from './navItem';
import { checkItems } from './utils';

export function fetchItems(that, callback) {
  $.ajax(that.settings.ajax, {
    method: 'get',
    dataType: 'json',
  })
    .done(function (res) {
      const items = callback(res);
      const message = 'success callback function must return Array type';
      if (checkItems(items, message)) {
        createTree(items, that._menu);
      }
    })
    .done(function () {
      attachEvents(that);
    })
    .fail(function (error) {
      throw error;
    });
}

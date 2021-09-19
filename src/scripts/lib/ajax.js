import attachEvents from './events';
import { createTree } from './navItem';

export function fetchItems(that, callback) {
  $.ajax(that.settings.ajax, {
    method: 'get',
    dataType: 'json',
  })
    .done(function (res) {
      const items = callback(res);
      if (Array.isArray(items)) {
        createTree(items, that.menu());
      } else {
        throw new Error('success callback function must return Array type');
      }
    })
    .done(function () {
      attachEvents(that.settings);
    })
    .fail(function (error) {
      throw error;
    });
}

export function fetchItems(that, callback) {
  $.ajax(that.settings.ajax, {
    method: 'get',
    dataType: 'json',
  })
    .done(function (res) {
      const items = Array.isArray(res) ? res : res.data;
      callback(items, $('.nested-nav'));
    })
    .fail(function (error) {
      throw error;
    });
}

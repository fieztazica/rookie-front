/* eslint-disable @typescript-eslint/no-unused-vars */

$(document).ready(function () {
  $('.deleteEntityButton').click(function () {
    if (confirm('Are you sure that you want to delete this?')) {
      const url = $(this).data('url');
      console.log(url);
    }
  });
});

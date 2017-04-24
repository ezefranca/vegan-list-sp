$(function() {
  console.log('123 testando... :o');
  
  $.get('/restaurants', function(restaurants) {
    restaurants.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#restaurants');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/restaurants?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#restaurants');
      $('input').val('');
      $('input').focus();
    });
  });

});
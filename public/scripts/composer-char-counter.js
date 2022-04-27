$(document).ready(function() {
  limit = 140;
  $('.tweetform').on('input', function() {
    console.log("typed");
    if($(this).val() === ''){
      limit = 140;
    }
    $('.counter').text(limit--).css({
    	'color': limit < 0 ? 'red' : 'black'
    });
  })
});

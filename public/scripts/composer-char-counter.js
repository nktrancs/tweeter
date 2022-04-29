
//counts how many characters in textfield
$(document).ready(function() {
  limit = 140;
  $('.tweetform').on('input', function() {
    console.log("typed");
    if($(this).val() === ''){
      limit = 140;
    }
    const charCount = limit - $('.tweetform').val().length;
    $('.counter').text(charCount).css({
    	'color': charCount < 0 ? 'red' : 'black'
    });
  })
});



$(document).ready(function(){
	$('.tweetbutton').keyup(function(){
		if($('.tweetform').val().length > 140){
			$('tweetbutton').removeAttr('disabled');
		} else {
			$('tweetbutton"]').attr('disabled','disabled');
		}
	}).trigger('keyup');
});
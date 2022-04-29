
//counts how many characters in textfield
$(document).ready(function() {
  limit = 140;
  $('.tweetform').on('input', function() {
    if($(this).val() === ''){
      limit = 140;
    }
    const charCount = limit - $('.tweetform').val().length;
    $('.counter').text(charCount).css({
    	'color': charCount < 0 ? 'red' : 'black'
    });
  })
});


// //disable button if char <=0 || > 140
// $(document).ready(function(){
// 	$('.tweetbutton').keyup(function(){
//     console.log($('.tweetform').val())
//     if($('.tweetform').val().length < 140){
//       $('.tweetbutton').removeAttr('disabled');
//       console.log("test", $('.tweetform').val())
// 		} else {
//       $('.tweetbutton').attr('disabled');
// 		}
// 	}).trigger('keyup');
// });



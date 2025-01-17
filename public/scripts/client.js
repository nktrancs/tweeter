/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //loads new tweets
  const loadTweets = (function() {
    $.get('/tweets')
    .then((data) => {
      renderTweets(data)
    });
  });

  $('.error').hide();
  loadTweets();

  //safe function to prevent user attacks via JS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //calls when submitting new tweets
  $('.tweetbutton').on('click', function (event) {
    event.preventDefault();
    if ($('.tweetform').val().length < 140) {
      const $tweet = $('.tweetform').serialize()
      $.post('/tweets', $tweet) 
      .then (() => {
          loadTweets();
          $('.tweetform').val(""); 
          $('.counter').val("140");
          $('.error').hide();
      })
    }

    if ($('.tweetform').val().length === 0) {
      $('.error').show();
      $('.error').text("Tweet can't be blank!");
      $('.error').slideUp(4000)
    }
    
    if ($('.tweetform').val().length > 140) {
      $('.error').show();
      $('.error').text("Tweet is too long!");
      $('.error').slideUp(4000)
    }
  });

  //creates tweet element
  const createTweetElement = function(tweet) {
    let $tweet = $(
    `<article class="tweetscontainer">

      <div class="tweetbox">
  
        <header class="tweetheader">
          <div class="avatar">
            <div><img src="${tweet.user.avatars}"></div>
            <p class="tweetername">${tweet.user.name}</p>
          </div>
          <div class="tweethandler">${tweet.user.handle}</div>
        </header>
    
        <div class="tweetbody">
          <p>${escape(tweet.content.text)}</p>
        </div>
        
        <footer>
          <div class="date">${timeago.format(tweet.created_at)}</div>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
  
      </div>
    </article>`);
  
    return $tweet;
  };

  //renders all tweets by looping
  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet in tweets) {
      // console.log("testcode:", tweets[tweet])  
      // calls createTweetElement for each tweet
      const tweeted = createTweetElement(tweets[tweet])
      // console.log("test:", tweeted)
      // takes return value and appends it to the tweets container
      $(".tweets-container").prepend(tweeted)
    };
  };

});







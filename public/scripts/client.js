$(document).ready(function () {

  $( "#target" ).submit(function( event ) {
   // alert( "Handler for .submit() called." );
    event.preventDefault();
    let tweet1 = $('.tweet-text').val().length;
    
    $('.err').text('');

    if(tweet1 === 0) {
      alert("the tweet is empty")
      

    }
    else if (tweet1 >140) {
      alert('Your tweet length is more than 140 :(');
    }

    //console.log( $( this ).serialize() ,"this is the");
    
    //checking if data is valid
    //console.log(event);
    //textSaved = $('#area');
    //if (textSaved.length === 0) {
     // alert("You can't submit an empty tweet");
     // return;
     // event.preventDefault();
   // }

      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        success: function(){
          console.log(data);
        },
        dataType: 'json'
      });
     // $( ".result" ).html( data );
     function loadTweets() {
      $.ajax({
        type: "GET",
        url: "/tweets",
        data: $(this).serialize(),
        success: function(){
          renderTweets(loadTweets)
          console.log(data);
        },
        dataType: 'json'
      });
     }
   
    });
  
   
  
  

    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        }
      ]

const createTweetElement = function(tweet) {
  let name = tweet.user.name;
  let avatar = tweet.user.avatars;
  let username = tweet.user.handle
  let time = timeago.format(new Date(tweet.created_at))
  let tweetText = tweet.content.text;
  let $tweet = $(`<article class="tweet">
        <div>
        <div id="avatar"><img src=${avatar}></div>
        <div id="name">${name}</div>
        </div>
        <div id="tweetText">${tweetText}</div>
        <hr id="lineSpace">
        <footer>${time}
        <a> 
        <span id="icons"
        ><i class="fas fa-flag"></i>&nbsp;&nbsp; <i class="fas fa-retweet"></i>&nbsp;&nbsp;<i class="fas fa-heart"></i></span>
        <hr id="lineSpace2">
        </a>&nbsp;&nbsp;</footer>
      </article>`);

      console.log(tweet)
    return $tweet;
  }

//createTweetElement(data)

const renderTweets = function(tweets) {
    for (let tweet of tweets) {
        console.log(tweet,"here")
        $("#tweets-container").append(createTweetElement(tweet));

    }
   
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}



renderTweets(data);
loadTweets()
})

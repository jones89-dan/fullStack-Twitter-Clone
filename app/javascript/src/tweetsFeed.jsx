import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import { postTweet, indexTweets } from './requests'


const TweetsFeed = () => {

  const [tweets, setTweets] = useState([]);
  var currentUser;

  const allTweets = function (response) {
    setTweets(response.tweets.map(tweet => tweet));
  };

  const newTweet = (event) => {
    event.preventDefault();
    var message = $('.a-tweet').val();
    var img = document.getElementById('image-select').files[0];

    postTweet(message, img, function (response) {
      if (response.success == false) {
        console.log("Ooops, something went wrong");
      }
      else {
        getTweetsAndPost();
        console.log("tweet posted successfully!");
      }
    });
  }

  function getTweetsAndPost() {
    indexTweets(function(tweets){
      $('.feed').text('');
      $.each(tweets, function(index){
          var html = '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a>'

          if (tweets[index]['image'] !== undefined) {
            html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
          }

          html += '<p>'+tweets[index]['message']+'</p> \
            </div>'
          $('.feed').prepend(html);
      });
    });
  }

  useEffect(() => {
    getTweetsAndPost();
  }, []);

  return (
    <Layout>
      <form onSubmit={newTweet}>
        <div className="col-xs-6 feed-box">
          <div className="col-xs-12 post-tweet-box">
            <textarea type="text" className="form-control post-input a-tweet" rows="3" placeholder="What's happening?"></textarea>
            <div className="pull-right">
              <label id="upload-image-btn" htmlFor="image-select">Upload image</label>
              <img id="image-preview" src="" alt="image preview" style={{display: 'none'}} />
              <input type="file" id="image-select" name="image" accept="image/*" />
              <span className="post-char-counter">140</span>
              <button type="submit" className="btn btn-primary" id="post-tweet-btn">Tweet</button>
            </div>
          </div>
        </div>
      </form>
        <div className="feed">
        </div>
      </Layout>
    )
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <TweetsFeed />,
      document.body.appendChild(document.createElement('div')),
    )
})

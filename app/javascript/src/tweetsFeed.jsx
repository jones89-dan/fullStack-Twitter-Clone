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



  useEffect(() => {
    indexTweets(allTweets);
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
          {tweets.map(tweet => {
            return (
              <div className="tweet col-xs-12" key={tweet.id}>
                <a className="tweet-username" href="#">{tweet.username}</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>{tweet.message}</p>
                <a className="delete-tweet" href="#">Delete</a>
              </div>
            )
          })}
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

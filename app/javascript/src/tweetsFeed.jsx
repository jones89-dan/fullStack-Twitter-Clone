import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import './feed.scss';
import { postTweet, indexTweets, deleteTweet, getCurrentUser } from './requests'

const TweetsFeed = () => {

  const [tweets, setTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const allTweets = function (response) {
    setTweets(response.tweets.map(tweet => tweet));
  };

  const newTweet = (event) => {
    event.preventDefault();
    var message = $('.a-tweet').val();
    var imageUpload = document.getElementById('imageUpload');
    var img = imageUpload.files[0];
    postTweet(message, img, function (response) {
      if (response.success == false) {
        console.log("Ooops, something went wrong");
      }
      else {
        $('.a-tweet').val('');
        setImagePreview("");
        indexTweets(allTweets);
        console.log("tweet posted successfully!");
      }
    });
  }

  const handleImage = function (event) {
    var source = URL.createObjectURL(event.target.files[0]);
    setImagePreview(source);
  };

  const removeTweet = (event) => {
    var id = event.target.dataset.id;
    deleteTweet(id, function () {
      indexTweets(allTweets);
    });
  }

  useEffect(() => {
    getCurrentUser(function (response) {
      setCurrentUser(response.username);
    });
    indexTweets(allTweets);
  }, []);

  return (
    <Layout>
      <form onSubmit={newTweet}>
        <div className="col-xs-6 feed-box text-white">
          <div className="col-xs-12 post-tweet-box">
            <textarea type="text" className="form-control post-input a-tweet" rows="3" placeholder="What's happening?"></textarea>
            <div className="pull-right">
              <label id="upload-image-btn" htmlFor="imageUpload">Upload image</label>
              <img id="image-preview" src="" style={{display: 'none'}} alt="image preview" />
              <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleImage}></input>
              <span className="post-char-counter">140</span>
              <button type="submit" className="btn btn-primary" id="post-tweet-btn">Tweet</button>
            </div>
          </div>
        </div>
      </form>
        <div className="feed mb-3">
          {tweets.map(tweet => {
            return (
              <div className="tweet col-xs-12" key={tweet.id}>

                <a className="tweet-username" data-id={tweet.username} href={"/" + tweet.username}>@{tweet.username}</a>
                <p>{tweet.message}</p>
                <img className="pb-1 tweet-image" src={tweet.image}></img>
                <br></br>
                <a className="delete-tweet " data-id={tweet.id} onClick={removeTweet}>Delete</a>
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

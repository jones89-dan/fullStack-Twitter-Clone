import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import './feed.scss';
import { userIndexTweets, deleteTweet, getCurrentUser, postTweet } from './requests'

const UserFeed = () => {

  const username = window.location.pathname.replace('/', '');
  const [usersTweets, setUsersTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const allTweets = function (response) {
    setUsersTweets(response.tweets.map(tweet => tweet));
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
        userIndexTweets(username, allTweets);
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
      userIndexTweets(username, allTweets);
    });
  }

  useEffect(() => {
    getCurrentUser(function (response) {
      setCurrentUser(response.username);
    });
    userIndexTweets(username, allTweets);
  }, []);

  return (
    <Layout>
    <div className="main container">
      <div className="row">
        <div className="col-s-12 profile-trends">
          <div className="profileCard col-s-12">
            <div className="profileCard-content">
              <div className="user-field col-xs-12">
                <a className="username" href={"/" + username}>{username}</a><br></br>
                <a className="screenName" href="#">@User</a>
              </div>
                <div className="user-stats">
                  <div className="col-xs-3">
                    <a href="">
                      <span>Tweets<br></br></span>
                      <span className="user-stats-tweets">10</span>
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <a href="">
                      <span>Following<br></br></span>
                      <span className="user-stats-following">0</span>
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <a href="">
                      <span>Followers<br></br></span>
                      <span className="user-stats-followers">0</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 feed-box">
          <div className="col-xs-12 post-tweet-box">
            <form onSubmit={newTweet}>
              <div className="col-xs-6 text-white">
                  <textarea type="text" className="form-control post-input a-tweet" rows="3" placeholder="What's happening?"></textarea>
                  <div className="pull-right">
                    <label id="upload-image-btn" htmlFor="imageUpload">Upload image</label>
                    <img id="image-preview" src="" style={{display: 'none'}} alt="image preview" />
                    <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleImage}></input>
                    <span className="post-char-counter">140</span>
                    <button type="submit" className="btn btn-primary" id="post-tweet-btn">Tweet</button>
                  </div>
              </div>
            </form>
          </div>
              <div className="feed mb-3">
                {usersTweets.map(tweet => {
                  return (
                    <div className="tweet col-xs-12" key={tweet.id}>

                      <a className="tweet-username" data-id={tweet.username} href={"/" + tweet.username}>@{tweet.username}</a>
                      <p>{tweet.message}</p>
                      <img className="tweet-image img-thumbnail" src={tweet.image}></img>
                      <a className="delete-tweet " data-id={tweet.id} onClick={removeTweet}>Delete</a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <UserFeed />,
      document.body.appendChild(document.createElement('div')),
    )
})

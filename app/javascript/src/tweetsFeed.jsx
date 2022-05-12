import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import { postTweet } from '../packs/requests'


const TweetsFeed = () => {

  const newTweet = (event) => {
    event.preventDefault();
    var message = $('.a-tweet').val();
    console.log("tweet sumbmited: " + message);
  }

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
          <div className="tweet col-xs-12">
            <a className="tweet-username" href="#">User</a>
            <a className="tweet-screenName" href="#">@User</a>
            <p>This is an amazing tweet</p>
            <a className="delete-tweet" href="#">Delete</a>
          </div>
          <div className="tweet col-xs-12">
            <a className="tweet-username" href="#">User</a>
            <a className="tweet-screenName" href="#">@User</a>
            <p>This is an amazing tweet</p>
          </div>
          <div className="tweet col-xs-12">
            <a className="tweet-username" href="#">User</a>
            <a className="tweet-screenName" href="#">@User</a>
            <p>This is an amazing tweet</p>
          </div>
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

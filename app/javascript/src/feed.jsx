import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const MainFeed = () => {

  return (
    <div class="col-xs-6 feed-box">
      <div class="col-xs-12 post-tweet-box">
        <textarea type="text" class="form-control post-input" rows="3" placeholder="What's happening?"></textarea>
        <div class="pull-right">
          <label id="upload-image-btn" for="image-select">Upload image</label>
          <img id="image-preview" src="" alt="image preview" style="display: none;" />
          <input type="file" id="image-select" name="image" accept="image/*" />
          <span class="post-char-counter">140</span>
          <button class="btn btn-primary" disabled id="post-tweet-btn">Tweet</button>
        </div>
      </div>
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
  )
}



export default MainFeed;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import './feed.scss';
import { userIndexTweets, deleteTweet, getCurrentUser } from './requests'

const UserFeed = () => {

  const username = window.location.pathname.replace('/', '');
  const [usersTweets, setUsersTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const allTweets = function (response) {
    setUsersTweets(response.tweets.map(tweet => tweet));
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
    <div className="text-white">
      <h1>Welcome {username}</h1>
    </div>
        <div className="feed">
          {usersTweets.map(tweet => {
            return (
              <div className="tweet col-xs-12" key={tweet.id}>

                <a className="tweet-screenName" href={"/" + tweet.username}>@{tweet.username}</a>
                <p>{tweet.message}</p>
                <a className="delete-tweet" data-id={tweet.id} onClick={removeTweet}>Delete</a>
              </div>
            )
          })}
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

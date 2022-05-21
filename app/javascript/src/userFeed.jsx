import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Layout from './layout';
import { postTweet, indexTweets, deleteTweet, getCurrentUser } from './requests'

const UserFeed = () => {

  const username = window.location.pathname.replace('/', '');

  return (
    <Layout>
      <p>Welcome {username}</p>
    </Layout>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <UserFeed />,
      document.body.appendChild(document.createElement('div')),
    )
})

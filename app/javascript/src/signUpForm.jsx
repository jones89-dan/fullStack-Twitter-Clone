import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createUser, signInUser, authenticate } from './requests'
import './home.scss';
import Layout from './layout';
import image from '../images/spacex.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const SignUpForm  = () => {

  function authenRedirect() {
    authenticate(function(response) {
      if(response.authenticated) {
        window.location.replace("/tweetsFeed");
      }
    });
  };

// Create a new user
  const handleFormSubmission = (event) => {
    event.preventDefault();

    var userName = $('.username').val();
    var userEmail = $('.email').val();
    var userPassword = $('.password').val();

    createUser(userName, userEmail, userPassword, function (response) {
      signInUser(userName, userPassword, function(){
        authenRedirect();
      });
      if (response.success == false) {
        console.log(response.error);
      }
      else {
        console.log('User ' + userName + ' signed up')
        signInUser(userName, userPassword, function(){
          authenRedirect();
        });
      }
    });
  }

// Log in existing user
  const logIn = (event) => {
    event.preventDefault();

    var userName = $('.usernameInput').val();
    var userPassword = $('.passwordInput').val();

    console.log("form works");

    signInUser(userName, userPassword, function (response) {
      if (response.success == false) {
        console.log(response.error)
      }
      else{
        console.log('User ' + userName + ' logged in');
        // Authenticate User
        authenticate(function(response) {
          if (response.authenticated == true) {
            window.location.assign('/tweetsFeed');
          }
        });
      }
    });
  }

    return (
      <div className="row">
        <div id="homeLeft" className="border-warning col-6 d-none d-lg-flex px-0" >
          <img className="home-image border-warning img-fluid pr-4 ps-0" src={image} alt="space x launch"></img>
        </div>
        <div className="login-signup col-6">
            <div className="float-right sign-up text-white">
              <form className="p-2 rounded" onSubmit={handleFormSubmission}>
                <div className="new-to-t">
                <FontAwesomeIcon icon={faTwitter} size="3x"/>
                  <h1>See what’s happening</h1>
                  <p className="text-white pt-3"><strong>New to Twitter?</strong><span> Sign Up</span></p>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control username" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="email"className="form-control email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control password" placeholder="Password"/>
                </div>
                <button type="submit" id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
              </form>
            </div>

              <div className="sign-in text-white">
                <form className="p-2 rounded" onSubmit={logIn}>
                  <div className="signin-to-t">
                    <p className="text-white pt-3"><strong>Welcome back to Twitter</strong><span> Log In</span></p>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control usernameInput" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control passwordInput" placeholder="Password"/>
                  </div>
                  <button type="submit" id="log-in-btn" className="btn btn-default btn-warning pull-right">Log In</button>
                </form>
              </div>
          </div>
        </div>

    )
}

export default SignUpForm;

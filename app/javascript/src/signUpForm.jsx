import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createUser, signInUser } from '../packs/requests'
// Attempting to handle the form submission using React props
const SignUpForm  = () => {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    var userName = $('.username').val();
    var userEmail = $('.email').val();
    var userPassword = $('.password').val();

    createUser(userName, userEmail, userPassword, function (response) {
      if (response.success == false) {
        console.log(response.error);
      }
      else {
        console.log('User ' + userName + ' signed up')
      }
    });
  }

  const logIn = (event) => {
    event.preventDefault();

    var userName = $('.usernameInput').val();
    var userPassword = $('.passwordInput').val();

    console.log("form works");

    signInUser(userName, userPassword, function (response) {
      if (response.success == false) {
        console.log(response.error);
      }
      else {
        console.log('User ' + userName + ' logged in')
      }
    });
  }

    return (
    <div>
        <div className="sign-up col-xs-4 col-xs-offset-1">
          <form onSubmit={handleFormSubmission}>
            <div className="new-to-t">
              <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
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

        <div className="sign-in col-xs-4 pt-4 col-xs-offset-1">
          <form onSubmit={logIn}>
            <div className="signin-to-t">
              <p><strong>Welcome back to Twitter</strong><span> Log In</span></p>
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

    )
}

export default SignUpForm;

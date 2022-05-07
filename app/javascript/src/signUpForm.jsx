import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createUser } from '../packs/requests'
// Attempting to handle the form submission using React props
const SignUpForm  = () => {

  const handleFormSubmission = (event) => {
    //var userName = this.state.userName;
    //var userEmail = this.state.userEmail;
    //var userPassword = this.state.userPassword;
    event.preventDefault();

    var userName = $('.username').val();
    var userEmail = $('.email').val();
    var userPassword = $('.password').val();

    console.log("form works");

    createUser(userName, userEmail, userPassword, function (response) {
      if (response.success == false) {
        console.log(response.error);
      }
      else {
        console.log('User ' + userName + ' signed up')
      }
    });
  }

    return (
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
    )
}

export default SignUpForm;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createUser } from '../packs/requests'
// Attempting to handle the form submission using React props
const SignUpForm  = () => {

  const handlFormSubmission = (event) => {
    //var userName = this.state.userName;
    //var userEmail = this.state.userEmail;
    //var userPassword = this.state.userPassword;

    var userName = $('.sign-up .username').val();
    var userEmail = $('.sign-up .email').val();
    var userPassword = $('.sign-up .password').val();

    createUser(userName, userEmail, userPassword, function (response) {
      if (response.success == false) {
        setSignUpMessage(response.error);
      }
      else {
        setSignUpMessage("Success! Please log in");
        $('.username').val('');
        $('.email').val('');
        $('.password').val('');
      }
    });
  }

    return (
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form>
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
          <button onSubmit={handlFormSubmission} id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
        </form>
      </div>
    );
}

export default SignUpForm;

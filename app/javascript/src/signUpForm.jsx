import React from 'react';

const SignUpForm = () => {
  return (
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form>
          <div className="new-to-t">
            <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
          </div>
            <input type="text" className="form-control username" placeholder="Username"/>
            <input type="email" className="form-control email" placeholder="Email"/>
            <input type="password" className="form-control password" placeholder="Password"/>
          <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
        </form>
      </div>
  );
}

export default SignUpForm;

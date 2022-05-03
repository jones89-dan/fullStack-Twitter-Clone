import React from 'react';

const SignUpForm = () => {
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
          <input type="email" className="form-control email" placeholder="Email"/>
        </div>
        <div class="form-group">
          <input type="password" className="form-control password" placeholder="Password"/>
        </div>
        <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
      </form>
    </div>
  );
}

export default SignUpForm;

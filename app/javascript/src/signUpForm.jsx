import React from 'react';

// Attempting to handle the form submission using React props
export default class SignUpForm extends React.Component {
  contstructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
    };
  }

  handeInput(event) {
    this.setState({
        userName: event.target.value,
        userEmail: event.target.value,
        userPasswor: event.target.value,
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
          <input type="email" className="form-control email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control password" placeholder="Password"/>
        </div>
        <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
      </form>
    </div>
  );

// Create user Ajax request

function createUser(username, email, password) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'users';
  newRequest['data'] = {
    'user': {
      'username': username,
      'email': email,
      'password': password
    }
  };
  newRequest['success'] = function(response){
    console.log(response);
  };

  $.ajax(newRequest);
};

// Sign up Form submission
  $(document).on('click', '#sign-up-btn', function(e){
    e.preventDefault();
    var userName = $('.sign-up .username');
    var userEmail = $('.sign-up .email.').val();
    var userPassword = ('.sign-up .password.').val();

    createUser(usernameInput, emailInput, passwordInput);

  });

}

export default SignUpForm;

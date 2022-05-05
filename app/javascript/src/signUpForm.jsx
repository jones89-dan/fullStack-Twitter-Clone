import React from 'react';

// Attempting to handle the form submission using React props
export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
    };
  }

  handleInput(event) {
    this.setState({
      userName: this.event.target.value,
      userPassword: this.event.target.value,
      userEmail: this.event.target.value,
    });
  }

  createUser(username, email, password) {
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
    console.log(response);
    $.ajax(newRequest);
  };

  handlFormSubmission() {
    var userName = this.state.userName;
    var userEmail = this.state.userEmail;
    var userPassword = this.state.userPassword;
    createUser(userName, userEmail, userPassword);
  }

  render () {
    return (
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form>
          <div className="new-to-t">
            <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
          </div>
          <div className="form-group">
            <input type="text" value={this.state.userName} onChange={this.handleInput} className="form-control username" placeholder="Username"/>
          </div>
          <div className="form-group">
            <input type="email" value={this.state.userEmail} onChange={this.handleInput} className="form-control email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" value={this.state.userPassword} onChange={this.handleInput} className="form-control password" placeholder="Password"/>
          </div>
          <button onClick={this.handlFormSubmission.bind(this)} id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
        </form>
      </div>
    );
  }
}

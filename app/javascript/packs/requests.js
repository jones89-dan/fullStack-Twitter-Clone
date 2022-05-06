import $ from 'jquery';

function Request() {
  this.type = '';
  this.url = '';
  this.data = {};
  this.dataType = 'json';
  this.success = function(response){
  }
  this.error = function(response){
  }
};

function createUser(username, email, password, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'api/users';
  newRequest['data'] = {
    'user': {
      'username': username,
      'email': email,
      'password': password
    }
  };
  newRequest['success'] = function(response){
    console.log(response);
    return callback();
  };

  $.ajax(newRequest);
};

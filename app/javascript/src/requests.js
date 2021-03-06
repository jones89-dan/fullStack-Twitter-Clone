import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  },
  error: function (request, errorMessage) {
    console.log(request, errorMessage);
  }
});

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

// Create new user
export var createUser = function (username, email, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/users',
    data: {
      user: {
        username: username,
        email: email,
        password: password
      }
    },
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

// Log in user
export var signInUser = function (username, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/sessions',
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

// Authenticate User
export var authenticate = function (callback) {
  var request = {
    type: 'GET',
    url: 'api/authenticated',
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

// Log out user (delete session)
export var logOutUser = function (callback) {
  var request = {
    type: 'DELETE',
    url: 'api/sessions',
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

// Post a Tweet
export var postTweet = function (msg, image, callback) {
  var formData = new FormData();
  if (msg) {
    formData.append('tweet[message]', msg);
  }
  if (image) {
    formData.append('tweet[image]', image);
  }
  var request = {
    type: 'POST',
    url: 'api/tweets',
    cache: false,
    contentType: false,
    processData: false,
    xhrFields: { 'withCredentials': true },
    data: formData,
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

// Index Tweets
export var indexTweets = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tweets',
    success: successCB,
    error: errorCB
  };
  $.ajax(request);
};

// Delete Tweet
export var deleteTweet = function (id, callback) {
  var request = {
    type: 'DELETE',
    url: 'api/tweets/' + id,
    success: function (response) {
      if (response.success == true) {
        callback();
      }
    }
  };
  $.ajax(request);
};

// Gets the current user
export var getCurrentUser = function (callback) {
  authenticate(function (response) {
    if (response.authenticated == true) {
      callback(response);
    }
    else if (response.authenticated == false) {
      window.location.replace('/');
    }
  });
};

// Index users tweets
export var userIndexTweets = function (username, callback) {
  var request = {
    type: 'GET',
    url: '/api/users/' + username + '/tweets',
    success: function (response) {
      if (response.error) {
        window.location.replace('/tweetsFeed');
      }
      else {
        callback(response);
      }
    }
  }
  $.ajax(request);
}

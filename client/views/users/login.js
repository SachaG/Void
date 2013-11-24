Template.login.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        flash(error.reason, 'error');
      }else{
        Router.go('/');
        flash('You are now logged in.');
      }
    });
  }
};
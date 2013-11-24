Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})
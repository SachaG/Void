Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  activeRouteClass: function (/* route names */) {
    //turn args into a regular javascript array
    var args = Array.prototype.slice.call(arguments, 0);
    // remove the hash added by at the end by Handlebars
    args.pop();
    var active = _.any(args, function(name) {
      return Router.current().route.name === name;
    });
    
    return active && 'active';
  }
});
Template.alerts.helpers({
  alertMessages: function () {
    return Messages.find();
  }
});

Template.alertMessage.events({
  'click .close': function (event) {
  	console.log("set seen true");
    Messages.remove(this._id);
  }
});
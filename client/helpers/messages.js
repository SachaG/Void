// create new local collections for messages
Messages = new Meteor.Collection(null);

/* the maximum number of routings a message will persist */
alertMessageRouteLifespan = 1;

alertMessage = function (message, messageType) {
	var type = typeof messageType === 'undefined' ? 'success' : messageType;
	Messages.remove({});
	Messages.insert({
		message: message,
		type: type,
    routeCount: 0
	});
}

incrementMessagesRouteCount = function () {
  Messages.update({}, { $inc: {routeCount: 1} });
  Messages.remove({routeCount: {$gt: alertMessageRouteLifespan}});
}
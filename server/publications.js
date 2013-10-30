/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('items', function() {
  return Items.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});
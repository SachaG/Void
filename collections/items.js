/* ---------------------------------------------------- +/

## Items ##

All code related to the Items collection goes here. 

/+ ---------------------------------------------------- */

Items = new Meteor.Collection('items');

// Allow/Deny

Items.allow({
  insert: function(userId, doc){
    return can.createItem(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editItem(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeItem(userId, doc);
  }
});

// Methods

Meteor.methods({
  createItem: function(item){
    Items.insert(item);
  },
  removeItem: function(item){
    Items.remove(item._id);
  }
});

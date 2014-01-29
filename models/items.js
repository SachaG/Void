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
    if(can.createItem(Meteor.user()))
      Items.insert(item);
  },
  removeItem: function(item){
    console.log("attempting ot remove item...");
    if(can.removeItem(Meteor.user(), item)){
      console.log("can.removeItem, removing...");
      Items.remove(item._id);
    }else{
      console.log("not can.removeItem, not removing...");
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});

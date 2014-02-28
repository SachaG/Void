/* ---------------------------------------------------- +/

## Items ##

All code related to the Items collection goes here. 

/+ ---------------------------------------------------- */

Items = new Meteor.Collection('items', {
  schema: new SimpleSchema({
    title: {
      type: String,
      label: "Title",
      max: 200
    },
    body: {
      type: String,
      label: "Description",
      max: 2000
    }
  })
});


if (Meteor.isClient) {
  ItemForm = new AutoForm(Items);
  Meteor.startup(function() {
    ItemForm.hooks({
      after: {
        insert: function(error, result, template) {
          console.log(result);
          Router.go('item', {_id: result});
          alertMessage("Item inserted successfully!", "success");
        }
      }
    });
  });
}

// Allow/Deny

Items.allow({
  insert: function(userId, doc){
    return true;//can.createItem(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return true; //can.editItem(userId, doc);
  },
  remove:  function(userId, doc){
    return true; //can.removeItem(userId, doc);
  }
});

// Methods

Meteor.methods({
  createItem: function(itemAttributes){
    var user = Meteor.user();
    
    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to create new items.");
    }
    
    // check for title and description
    if (!itemAttributes.title || !itemAttributes.body) {
      throw new Meteor.Error(422, "You need a item title and description.");
    }
    
    // pick out the whitelisted keys
    var item = _.extend(_.pick(itemAttributes, 'title', 'body'), 
                        {
                          userId: user._id,
                          author: user.username,
                          submitted: new Date().getTime()
                        });
    
    if (can.createItem()) {
      var itemId = Items.insert(item);
      return itemId;
    }
  },
  removeItem: function(item){
    if (can.removeItem(item)) {
      Items.remove(item._id);
    }
    else {
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});
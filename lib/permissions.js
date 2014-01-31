/* ---------------------------------------------------- +/

## Permissions ##

Permission checks

Usage:

if (can.editItem(myItem)){
  // do something  
}

/+ ---------------------------------------------------- */

can = {
  createItem: function () {
    return !!Meteor.userId();
  },
  editItem: function (item) {
    return Meteor.userId() === item.userId;
  },
  removeItem: function (item) {
    return Meteor.userId() === item.userId;
  }
}
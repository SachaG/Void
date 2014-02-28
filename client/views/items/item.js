/* ---------------------------------------------------- +/

## Item ##

Code related to the item template

/+ ---------------------------------------------------- */

Template.item.created = function () {
  //
};

Template.item.helpers({
  
  myHelper: function () {
    //
  }

});

Template.item.rendered = function () {
  //
};

Template.item.events({

  'click .delete': function(e, instance){
    var item = this;
    e.preventDefault();
    Meteor.call('removeItem', item, function(error, result){
      //if error flash error
      Router.go('/items');
      if (error) {
        alertMessage("Sorry, you don't have permission to delete this item.", "danger");
      }
      else {
        alertMessage("Item deleted.", "success");
      }
    });
  }

});
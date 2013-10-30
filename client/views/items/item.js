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
      alert('Item deleted.');
      Router.go('/items');
    });
  }

});
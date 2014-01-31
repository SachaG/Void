Template.itemCreate.events({
  'submit form': function(event) {
    event.preventDefault();
    var item = {
      title: $(event.target).find("[name=title]").val(),
      body: $(event.target).find("[name=body]").val()
    };
    
    Meteor.call("createItem", item, function (error, id) {
      if (error) {
        alertMessage(error.reason, "danger");
        Router.go("/item/create");
      }
      else {
        Router.go("item", {_id: id});
        alertMessage("Success! Item created.", "success");
      }
    });
    
  }
});
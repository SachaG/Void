/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

Handlebars.registerHelper('myHelper', function(myArgument){
  return "Hello, " + myArgument;
});

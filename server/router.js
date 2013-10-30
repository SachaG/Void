/* ---------------------------------------------------- +/

## Server Router ##

Server-side router.

/+ ---------------------------------------------------- */

Router.map(function() {

  this.route('aServerSideRoute', {
    where: 'server',
    path: '/segment/:parameter',
    action: function() {
      this.response.write('Hello World');
      this.response.end();
    }
  });

});
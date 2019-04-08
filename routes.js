const routes = require('next-routes')(); //returns a function daher nach () damit es invoked wird


routes
.add('/campaigns/new', '/campaigns/new') // da wir campaigns/address nutzen da sonst new als address gesehen wird
.add('/campaigns/:address', '/campaigns/show') //wildcard :address von next-routes(address ist der name)
.add('/campaigns/:address/requests', '/campaigns/requests/index')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
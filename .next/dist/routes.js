'use strict';

var routes = require('next-routes')(); //returns a function daher nach () damit es invoked wird


routes.add('/campaigns/new', '/campaigns/new') // da wir campaigns/address nutzen da sonst new als address gesehen wird
.add('/campaigns/:address', '/campaigns/show') //wildcard :address von next-routes(address ist der name)
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7O0FBR3pDLE9BQ0MsQUFERCxJQUNLLEFBREwsa0JBQ3VCLEFBRHZCLGtCQUN5QyxBQUR6QztDQUVDLEFBRkQsSUFFSyxBQUZMLHVCQUU0QixBQUY1QixtQkFFK0MsQUFGL0M7Q0FHQyxBQUhELElBR0ssQUFITCxnQ0FHcUMsQUFIckMsNkJBSUMsQUFKRCxJQUlLLEFBSkwsb0NBSXlDLEFBSnpDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiYzovVXNlcnMvUGF0cmljay9Eb2N1bWVudHMvU29saWRpdHkvU09MSURJVFkvdWRlbXkva2lja3N0YXJ0djIifQ==
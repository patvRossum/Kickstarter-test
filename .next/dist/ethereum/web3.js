'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider); // Kann nur lokal von browser un nicht server seitig, da window 

var web3 = void 0; // '!==' operator heißt not equal value or equal type
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //undefined Javascript browser //checken auf dem server mit "node" und dann typeof window//
    //We are in the Browser and metamask is running.
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //We are on the server or the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/E2Vi7TW6F0SPsNfmylRJ');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBR0E7O0FBRUEsSUFBSSxZQUFKLEEsR0FBVTtBQUNWLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQUU7QUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFIRCxPQUdLLEFBQ0Q7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNqQixBQURpQixBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJjOi9Vc2Vycy9QYXRyaWNrL0RvY3VtZW50cy9Tb2xpZGl0eS9TT0xJRElUWS91ZGVteS9raWNrc3RhcnR2MiJ9
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), //Nimmt dem ABI (Application Binary Interface)
'0xe8E55c6Ea6B43ecBB57B3e1AfF76Fad00fa9dCce' //Adresse zum deployed Contract
); // greift auf web3 von verzeichnis datei web3.js keine eigene Instanz
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFpQixBLEFBQWpCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXNCOzs7Ozs7QUFFN0IsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsS0FBQSxBQUFLLE1BQU0sMEJBREUsQUFDYixBQUEyQixZQUFZO0FBRDFCLEFBRWIsNkNBRkosQUFBaUIsQUFFZ0MsQUFHakQ7QUFMaUIsR0FIVTtrQkFRM0IsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6ImM6L1VzZXJzL1BhdHJpY2svRG9jdW1lbnRzL1NvbGlkaXR5L1NPTElESVRZL3VkZW15L2tpY2tzdGFydHYyIn0=
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _CurrentBlock = require('../components/testComponents/CurrentBlock');

var _CurrentBlock2 = _interopRequireDefault(_CurrentBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\pages\\index.js?entry'; // ein verzeichnis zurück


//export default () => {
//   return(
//      <h2>This is the campaign page!!</h2>
//    );
//}

var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        /*   async componentDidMount(){
              const campaigns = await factory.methods.getDeployedCampaigns().call();  
               console.log(campaigns);
           }
        */

        //Sementic wird genutzt in renderCampaign
        value: function renderCampaigns() {
            //map durchläuft alle in array

            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    }, 'View Project')),
                    fluid: true //fluid passt den container an die passende größe an

                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            });
        }

        //Beispiel mit   '../components/testComponents/CurrentBlock'; um Serverseitig zu rendern und an component zu geben
        /* renderCurrentBlock(){
           return (
              <CurrentBlock
                blockNumber = {this.props.blockNumber} />
           );
         }
        */

    }, {
        key: 'render',
        value: function render() {
            // React erwartet ein js render zurück, sonst würde ein error kommen

            //return<div>{this.props.campaigns[0]}</div>;
            //Layout kommt von components/Layout.js
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Open Projects'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Project',
                icon: 'add circle',
                primary: true //ist das selbe wie primary={true} primary style den button blau
                , __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))), this.renderCampaigns())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns, blockNumber;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                _context.next = 5;
                                return _web2.default.eth.getBlockNumber();

                            case 5:
                                blockNumber = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns, blockNumber: blockNumber });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex; //Next erwartet das ein react component exportiert wird wenn eins importiert wird
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJMYWJlbCIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwid2ViMyIsIkN1cnJlbnRCbG9jayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiZXRoIiwiZ2V0QmxvY2tOdW1iZXIiLCJibG9ja051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUTs7QUFDSCxBLEFBQXBCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFrQjs7Ozs7O21IQUppQjs7O0FBTTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0ksQUFFTTs7Ozs7Ozs7OzthQWNMOztBQU1HOzs7Ozs7OzBDQUNpQixBQUFFO0FBRWY7O2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQzlDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQ0EsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKRCxBQUdILEFBQ0ksQUFHSjsyQkFQRyxBQU9JLEtBUFgsQUFBTyxBQU9TLEFBR25COztBQVZVLEFBQ0g7QUFGUixBQUFjLEFBa0JkLGFBbEJjOztpREFrQlAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTtBQUdiOztBQUNEOzs7Ozs7Ozs7OztpQ0FTRyxBQUFFO0FBRU07O0FBQ0E7QUFDQTttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLCtCQUNRLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURSLEFBQ1EsQUFDQSxrQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNjLEFBQ1Y7eUJBRkosQUFFWSxBQUNSO3NCQUhKLEFBR1MsQUFDTDt5QkFKSixLQUFBLEFBSVc7QUFIUDs4QkFESjtnQ0FKaEIsQUFFUSxBQUNJLEFBQ0ksQUFRUDtBQVJPO3VCQVI1QixBQUNJLEFBRUksQUFDSSxBQVlTLEFBQUssQUFLakM7Ozs7Ozs7Ozs7Ozt1Q0E1RTJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7aUNBQXpEO0E7O3VDQUNvQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O2lDQUE3QjtBO2lFQUVDLEVBQUUsV0FBRixXQUFhLGFBQWIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5hLEEsQUFrRjVCOztrQkFBQSxBQUFlLEEsZUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJjOi9Vc2Vycy9QYXRyaWNrL0RvY3VtZW50cy9Tb2xpZGl0eS9TT0xJRElUWS91ZGVteS9raWNrc3RhcnR2MiJ9
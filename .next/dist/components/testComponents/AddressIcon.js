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

var _ethereumBlockiesBase = require('ethereum-blockies-base64');

var _ethereumBlockiesBase2 = _interopRequireDefault(_ethereumBlockiesBase);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\components\\testComponents\\AddressIcon.js';


var RequestAddressIcon = function (_Component) {
    (0, _inherits3.default)(RequestAddressIcon, _Component);

    function RequestAddressIcon() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestAddressIcon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestAddressIcon.__proto__ || (0, _getPrototypeOf2.default)(RequestAddressIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            addressIcon: 'null',
            addressName: 'loading...'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestAddressIcon, [{
        key: 'getUserAddress',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;

                                this.setState({ addressIcon: accounts[0], addressName: accounts[0] });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserAddress() {
                return _ref2.apply(this, arguments);
            }

            return getUserAddress;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.getUserAddress();

                            case 2:
                                console.log("componentDidMount222 Test ");

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: (0, _ethereumBlockiesBase2.default)(this.state.addressIcon), avatar: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.state.addressName));
        }
    }]);

    return RequestAddressIcon;
}(_react.Component);

exports.default = RequestAddressIcon;

//<img src={makeBlockie(this.state.address)}
//height="42" width="42"/>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHRlc3RDb21wb25lbnRzXFxBZGRyZXNzSWNvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1ha2VCbG9ja2llIiwid2ViMyIsIkltYWdlIiwiUmVxdWVzdEFkZHJlc3NJY29uIiwic3RhdGUiLCJhZGRyZXNzSWNvbiIsImFkZHJlc3NOYW1lIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwiZ2V0VXNlckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7O3dPLEFBRUY7eUJBQU8sQUFDVSxBQUNiO3lCQUZHLEFBRVUsQTtBQUZWLEFBQ0g7Ozs7Ozs7Ozs7Ozs7dUNBTXVCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7aUNBQTFCO0Esb0RBQ047O3FDQUFBLEFBQUssU0FBUyxFQUFDLGFBQWMsU0FBZixBQUFlLEFBQVMsSUFBSyxhQUFjLFNBQXpELEFBQWMsQUFBMkMsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FPNUQsS0FBQSxBQUFLLEE7O2lDQUNYO3dDQUFBLEFBQVEsSUFBUixBQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBTVAsQUFDTDttQ0FFSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUMsd0NBQU0sS0FBSyxvQ0FBWSxLQUFBLEFBQUssTUFBN0IsQUFBWSxBQUF1QixjQUFjLFFBQWpEOzhCQUFBO2dDQURBLEFBQ0EsQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLG9CQUFPLEFBQUssTUFKaEIsQUFFSSxBQUVBLEFBQWtCLEFBS3pCOzs7OztBQWxDNEIsQSxBQXNDakM7O2tCQUFBLEFBQWU7O0FBRWY7QUFDQSIsImZpbGUiOiJBZGRyZXNzSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJjOi9Vc2Vycy9QYXRyaWNrL0RvY3VtZW50cy9Tb2xpZGl0eS9TT0xJRElUWS91ZGVteS9raWNrc3RhcnR2MiJ9
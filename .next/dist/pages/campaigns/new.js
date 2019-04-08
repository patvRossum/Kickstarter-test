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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\pages\\campaigns\\new.js?entry'; //https://react.semantic-ui.com/collections/form/ und https://react.semantic-ui.com/elements/input/ und https://react.semantic-ui.com/collections/message/#variations-negative
// Router redirected leute zu neuen pages / Link hilft für navigation (wird gerade nicht genutzt)


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = { //Für den Input
            minimumContribution: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, signature;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                event.preventDefault(); //Default value wird nicht ausgeführt, da es immer neu gerendert wird

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods
                                //.createCampaign(web3.utils.toWei(this.state.value, 'ether'))
                                .createCampaign(_web2.default.utils.toWei(_this.state.minimumContribution, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 10;
                                return _web2.default.eth.sign("Hello world", accounts[0]);

                            case 10:
                                signature = _context.sent;

                                console.log("This is the signature" + signature);

                                _routes.Router.pushRoute('/'); //User wird weitergeleitet
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](0);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:

                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[0, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Minimum Contribution', _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ETH',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;

//<Form> - A Form.field is a form element containing a label and an input.
//Input für minimumContribution
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInNpZ24iLCJzaWduYXR1cmUiLCJjb25zb2xlIiwibG9nIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBLEFBQVEsQUFBUSxBQUFNLEFBQU87O0FBQzdCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBLEFBQVQsQUFBdUI7Ozs7NEhBSHlDO0FBR3pCOzs7SSxBQUdqQzs7Ozs7Ozs7Ozs7Ozs7OzBOQUNGLEEsVUFBVSxBQUNOO2lDQURJLEFBQ2lCLEFBQ3JCOzBCQUZJLEFBRVUsQUFDZDtxQkFISSxBLEFBR0s7QUFITCxpQixBQU1SO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FBQTtnREFFSDs7c0NBRkcsQUFFSCxBQUFNLGtCQUFrQixBQUV4Qjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FKM0IsQUFJSCxBQUFjLEFBQThCOztnREFKekM7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt5REFPVyxBQUNWO0FBREU7QUFBQSxpQ0FBQSxBQUVELGVBQWUsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixxQkFGMUMsQUFFYyxBQUFpRCxVQUYvRCxBQUdEOzBDQUNTLFNBWFgsQUFPRyxBQUdJLEFBQ0ksQUFBUztBQURiLEFBQ0Y7O2lDQVhMO2dEQUFBO3VDQWV5QixjQUFBLEFBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxlQUFlLFNBZnRELEFBZXlCLEFBQTZCLEFBQVM7O2lDQUF4RDtBQWZQLHFEQWdCQzs7d0NBQUEsQUFBUSxJQUFJLDBCQUFaLEFBQXNDLEFBRTFDOzsrQ0FBQSxBQUFPLFVBbEJKLEFBa0JILEFBQWlCLE1BbEJkLEFBa0JvQjtnREFsQnBCO0FBQUE7O2lDQUFBO2dEQUFBO2dFQW9CSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQXBCM0IsQUFvQkgsQUFBYyxBQUFvQjs7aUNBR3RDOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQXZCUixBQXVCUCxBQUFjLEFBQVU7O2lDQXZCakI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0EwQkY7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0Esd0NBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBRSxxQkFBc0IsTUFBQSxBQUFNLE9BRHRDLEFBQ04sQUFBYyxBQUFxQztBQUwzRDs7OEJBQUE7Z0NBSFIsQUFDSSxBQUNJLEFBQ0EsQUFVSjtBQVZJO0FBQ0ksa0NBU1IsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FiSixBQWFJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7OEJBQUE7Z0NBQUE7QUFBQTtlQWxCWixBQUNJLEFBRUksQUFlSSxBQU1mOzs7OztBQTFEcUIsQSxBQTZEMUI7O2tCQUFBLEFBQWU7O0FBRWY7QUFDQSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiYzovVXNlcnMvUGF0cmljay9Eb2N1bWVudHMvU29saWRpdHkvU09MSURJVFkvdWRlbXkva2lja3N0YXJ0djIifQ==
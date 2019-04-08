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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\components\\testComponents\\CurrentBlock.js';


var RequestCurrentBlock = function (_Component) {
    (0, _inherits3.default)(RequestCurrentBlock, _Component);

    function RequestCurrentBlock() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestCurrentBlock);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestCurrentBlock.__proto__ || (0, _getPrototypeOf2.default)(RequestCurrentBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            blockNumber: 'Loading...',
            blockIntervalCounter: null

        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestCurrentBlock, [{
        key: 'setCurrentBlock',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var currentBlock;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getBlockNumber();

                            case 2:
                                currentBlock = _context.sent;

                                this.setState({ blockNumber: currentBlock });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function setCurrentBlock() {
                return _ref2.apply(this, arguments);
            }

            return setCurrentBlock;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.setCurrentBlock();

                            case 2:
                                _context2.next = 4;
                                return setInterval(function () {
                                    return _this2.setCurrentBlock();
                                }, 10000);

                            case 4:
                                this.interval = _context2.sent;

                            case 5:
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
        key: 'componentWillUnmount',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                clearInterval(this.interval);
                            //console.log("componentWillUnmount Test " + this.interval)

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function componentWillUnmount() {
                return _ref4.apply(this, arguments);
            }

            return componentWillUnmount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function componentDidUpdate() {
                return _ref5.apply(this, arguments);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Last Block :', _react2.default.createElement(_semanticUiReact.Popup, {
                trigger: _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, ' ', this.state.blockNumber),
                content: 'Ethereum',
                size: 'big',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }));
        }
    }]);

    return RequestCurrentBlock;
}(_react.Component);

exports.default = RequestCurrentBlock;
//trigger={<span>{blockNumber}</span>}
//HTML Tags <span>
//The <span> tag is used to group inline-elements in a document.

//The <span> tag provides no visual change by itself. {this.renderBlockNumber()}

//The <span> tag provides a way to add a hook to a part of a text or a part of a document.


// const { blockNumber } = this.props; in render funktion damit serverseitig angezeigt werden kann und an dieses Component weitergegeben wird
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHRlc3RDb21wb25lbnRzXFxDdXJyZW50QmxvY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3B1cCIsIkxhYmVsIiwid2ViMyIsImZhY3RvcnkiLCJSZXF1ZXN0Q3VycmVudEJsb2NrIiwic3RhdGUiLCJibG9ja051bWJlciIsImJsb2NrSW50ZXJ2YWxDb3VudGVyIiwiZXRoIiwiZ2V0QmxvY2tOdW1iZXIiLCJjdXJyZW50QmxvY2siLCJzZXRTdGF0ZSIsInNldEN1cnJlbnRCbG9jayIsInNldEludGVydmFsIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFJZDs7Ozs7Ozs7Ozs7Ozs7ME8sQUFHRjt5QkFBUSxBQUNTLEFBQ2I7a0NBRkksQUFFa0IsQTs7QUFGbEIsQUFDSjs7Ozs7Ozs7Ozs7Ozt1Q0FRMkIsY0FBQSxBQUFLLElBQUwsQSxBQUFTOztpQ0FBOUI7QSx3REFDTjs7cUNBQUEsQUFBSyxTQUFTLEVBQUMsYUFBZixBQUFjLEFBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FLdkIsSyxBQUFBLEFBQUs7Ozs7bURBR1AsWUFBQTsyQ0FDQSxPQURBLEFBQ0EsQUFBSztBQUZhLGlDQUFBLEVBQUEsQUFHbEIsQTs7aUNBSEo7cUMsQUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBVUw7OENBQWMsS0FBZCxBQUFtQixBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FXSSxBQUNKO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBRVEsZ0NBQUEsQUFBQzt5Q0FDWSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsaUJBQUEsRUFBUSxVQUFBLEFBQUssTUFEMUIsQUFDYSxBQUFtQixBQUM1Qjt5QkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHUzs7OEJBSFQ7Z0NBSFosQUFDSSxBQUVRLEFBT2Y7QUFQZTtBQUNJOzs7OztBLEFBL0NVLEFBeURsQzs7a0JBQUEsQUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EiLCJmaWxlIjoiQ3VycmVudEJsb2NrLmpzIiwic291cmNlUm9vdCI6ImM6L1VzZXJzL1BhdHJpY2svRG9jdW1lbnRzL1NvbGlkaXR5L1NPTElESVRZL3VkZW15L2tpY2tzdGFydHYyIn0=
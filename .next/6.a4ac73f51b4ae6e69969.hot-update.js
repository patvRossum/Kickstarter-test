webpackHotUpdate(6,{

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1176);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(435);

var _factory = __webpack_require__(681);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(474);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(737);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hNGFjNzNmNTFiNGFlNmU2OTk2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz81Mjg4ODM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgLy9odHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLyB1bmQgaHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaW5wdXQvIHVuZCBodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZXNzYWdlLyN2YXJpYXRpb25zLW5lZ2F0aXZlXHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJzsgLy8gUm91dGVyIHJlZGlyZWN0ZWQgbGV1dGUgenUgbmV1ZW4gcGFnZXMgLyBMaW5rIGhpbGZ0IGbDvHIgbmF2aWdhdGlvbiAod2lyZCBnZXJhZGUgbmljaHQgZ2VudXR6dClcclxuXHJcblxyXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0geyAvL0bDvHIgZGVuIElucHV0XHJcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogJycsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4geyAvL2FzeW5jIGRhIHdpciBtaXQgZGVyIEJsb2NrY2hhaW4gaW50ZXJhZ2llcmVuXHJcbiAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vRGVmYXVsdCB2YWx1ZSB3aXJkIG5pY2h0IGF1c2dlZsO8aHJ0LCBkYSBlcyBpbW1lciBuZXUgZ2VyZW5kZXJ0IHdpcmRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAvLy5jcmVhdGVDYW1wYWlnbih3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsICdldGhlcicpKVxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUNhbXBhaWduKHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uLCAnZXRoZXInKSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgd2ViMy5ldGguc2lnbihcIkhlbGxvIHdvcmxkXCIsIGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgc2lnbmF0dXJlXCIgKyBzaWduYXR1cmUpO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpOyAvL1VzZXIgd2lyZCB3ZWl0ZXJnZWxlaXRldFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIGEgQ2FtcGFpZ248L2gzPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRVRIXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uIDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSFcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xyXG5cclxuLy88Rm9ybT4gLSBBIEZvcm0uZmllbGQgaXMgYSBmb3JtIGVsZW1lbnQgY29udGFpbmluZyBhIGxhYmVsIGFuZCBhbiBpbnB1dC5cclxuLy9JbnB1dCBmw7xyIG1pbmltdW1Db250cmlidXRpb25cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUhBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBREE7QUFOQTtBQUFBO0FBUUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQWZBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW9CQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOztBQUFBO0FBVUE7QUFWQTtBQUNBO0FBU0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
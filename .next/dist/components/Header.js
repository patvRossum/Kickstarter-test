'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\components\\Header.js'; //https://react.semantic-ui.com/collections/menu/#content-menus

exports.default = function () {
    return (// man benutzt {{}} erste {} sagt jetzt kommt javascript und zweites {} ist das Objekt

        _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '20px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, _react2.default.createElement('a', { className: 'item', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, 'Example Project')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }, _react2.default.createElement('a', { className: 'item', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        }, 'Project')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        }, _react2.default.createElement('a', { className: 'item', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }, '+'))))
    );
};

/* Rausgenommen da es mit dem modul von objekt link nicht funktioniert
<Menu.Item>
CrowdCoin
</Menu.Item>

                <Menu.Item>
                    Campaigns
                </Menu.Item>

                <Menu.Item>
                    +
                </Menu.Item>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJMaW5rIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQSxBQUFTOztBQUNULEFBQVMsQUFBWSxBQUdyQjs7OzttSEFKMEM7O2tCQUkzQixZQUFNLEFBQ2pCO0FBQVEsV0FFSjs7d0JBQUEsQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVk7MEJBQXpCOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTswQkFBWjs0QkFBQSxBQUNJO0FBREo7MkJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTswQkFBYjs0QkFBQTtBQUFBO1dBRlIsQUFDSSxBQUNJLEFBRUoscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjswQkFBcEI7NEJBQUEsQUFDSTtBQURKOzJCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFZOzBCQUFaOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzBCQUFiOzRCQUFBO0FBQUE7V0FGUixBQUNJLEFBQ0ksQUFFSiw2QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTswQkFBWjs0QkFBQSxBQUNJO0FBREo7MkJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTswQkFBYjs0QkFBQTtBQUFBO1dBWGhCLEFBRUksQUFJSSxBQUlJLEFBQ0ksQUFNbkI7O0FBbEJEOztBQW9CQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiYzovVXNlcnMvUGF0cmljay9Eb2N1bWVudHMvU29saWRpdHkvU09MSURJVFkvdWRlbXkva2lja3N0YXJ0djIifQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _CurrentBlock = require('./testComponents/CurrentBlock');

var _CurrentBlock2 = _interopRequireDefault(_CurrentBlock);

var _AddressIcon = require('./testComponents/AddressIcon');

var _AddressIcon2 = _interopRequireDefault(_AddressIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\Users\\Patrick\\Documents\\Solidity\\SOLIDITY\\udemy\\kickstartv2\\components\\Layout.js'; //Reacht helper function für den Header des HTML document z.B. für stylesheet Link

exports.default = function (props) {

    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: 'left', width: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_AddressIcon2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: 'right', width: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_semanticUiReact.Label, { style: { marginRight: 15, marginTop: 15 }, attached: 'top right', horizontal: 'true', size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, ' ', _react2.default.createElement(_CurrentBlock2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), ' ')), _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), props.children, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('center', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, props.nameFetch, ' Made by Patrick van Rossum')))); //props.children ist der inhalt als Objekt der das Layout nutzt
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkxhYmVsIiwiR3JpZCIsIkhlYWQiLCJIZWFkZXIiLCJDdXJyZW50QmxvY2siLCJBZGRyZXNzSWNvbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsIm5hbWVGZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWSxBQUFPOztBQUNyQixBLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWtCLEFBRXpCOzs7Ozs7bUhBTDhCOztrQkFLZixpQkFBUyxBQUVwQjs7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDQTtBQURBO0FBQUEsS0FBQSxrQkFDQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNHO0FBREg7QUFBQSx1QkFDRyxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxTQUFiLEFBQXVCLFFBQU8sT0FBOUIsQUFBcUM7c0JBQXJDO3dCQUFBLEFBQXlDO0FBQXpDO3VCQUF5QyxBQUFDOztzQkFBRDt3QkFEN0MsQUFDSSxBQUF5QyxBQUN6QztBQUR5QztBQUFBLHlCQUN4QyxjQUFELHNCQUFBLEFBQU0sVUFBTyxTQUFiLEFBQXVCLFNBQVEsT0FBL0IsQUFBc0M7c0JBQXRDO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHdDQUFNLE9BQU8sRUFBRSxhQUFGLEFBQWUsSUFBSSxXQUFqQyxBQUFjLEFBQThCLE1BQU0sVUFBbEQsQUFBMkQsYUFBWSxZQUF2RSxBQUFrRixRQUFPLE1BQXpGLEFBQThGO3NCQUE5Rjt3QkFBQTtBQUFBO09BQXdHLHFCQUFBLEFBQUM7O3NCQUFEO3dCQUR4RyxBQUNBLEFBQXdHO0FBQUE7QUFBQSxTQUovRyxBQUNHLEFBRUksQUFLSCx1QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSwrQ0FDVSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBVFIsQUFRSSxBQUNJLEFBRUo7QUFGSTt5QkFFSixBQUFDOztzQkFBRDt3QkFYSixBQVdJLEFBQ0M7QUFERDtBQUFBLGNBWEosQUFZVyxBQUNQLDBCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQVM7QUFBVDtBQUFBLGFBQUEsQUFBZSxXQWpCUCxBQUVwQixBQUNJLEFBQ0EsQUFhSSxBQUFJLG1DQUlWLEFBQ0w7QUF0QkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6ImM6L1VzZXJzL1BhdHJpY2svRG9jdW1lbnRzL1NvbGlkaXR5L1NPTElESVRZL3VkZW15L2tpY2tzdGFydHYyIn0=
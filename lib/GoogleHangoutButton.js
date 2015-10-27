'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var GoogleHangoutButton = (function (_React$Component) {
  function GoogleHangoutButton(props) {
    _classCallCheck(this, GoogleHangoutButton);

    _get(Object.getPrototypeOf(GoogleHangoutButton.prototype), 'constructor', this).call(this, props);
    this.state = { initalized: false };
  }

  _inherits(GoogleHangoutButton, _React$Component);

  _createClass(GoogleHangoutButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.state.initalized) {
        return;
      }

      var ghbutton = _react2['default'].findDOMNode(this.refs.ghbutton);
      var gpscript = document.createElement('script');
      gpscript.src = '//apis.google.com/js/platform.js';
      gpscript.id = 'gapi';
      gpscript.onload = this.renderWidget.bind(this);
      ghbutton.parentNode.appendChild(gpscript);

      this.setState({ initalized: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var elem = document.getElementById('gapi');
      if (elem !== undefined) {
        elem.parentNode.removeChild(elem);
      }
    }
  }, {
    key: 'renderWidget',
    value: function renderWidget() {

      gapi.hangout.render('ghbutton', {
        'topic': 'cats',
        'render': 'createhangout',
        'hangout_type': 'onair',
        'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }],
        'widget_size': 72
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { ref: 'ghbutton',
        id: 'ghbutton' });
    }
  }]);

  return GoogleHangoutButton;
})(_react2['default'].Component);

exports['default'] = GoogleHangoutButton;
module.exports = exports['default'];
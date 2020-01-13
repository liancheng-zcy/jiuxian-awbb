"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _popupMixin = _interopRequireDefault(require("../helpers/popupMixin")),
  _props = require("../multi-picker-view/props");

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function ownKeys(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(r);
    e && (p = p.filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    })), t.push.apply(t, p)
  }
  return t
}

function _objectSpread(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ownKeys(t, !0).forEach(function(e) {
      _defineProperty(r, e, t[e])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
    })
  }
  return r
}

function _defineProperty(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}(0, _baseComponent.default)({
  behaviors: [(0, _popupMixin.default)()],
  properties: _objectSpread({}, _props.props, {
    prefixCls: {
      type: String,
      value: "wux-popup-picker"
    },
    multiPickerPrefixCls: {
      type: String,
      value: "wux-picker"
    },
    cascade: {
      type: Boolean,
      value: !1
    },
    cols: {
      type: Number,
      value: 3
    }
  })
});
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var screenSizes = {
  /**
   * tablet
   */
  tablet: 768,

  /**
   * Small Device
   */
  sm: 960,

  /**
   * Medium Device
   */
  md: 1024,

  /**
   * Large Device
   */
  lg: 1366,

  /**
   * Widescreen
   */
  wd: 1600,

  /**
   * Full HD
   */
  fullhd: 1920
};

var mediaQuery = {
  screen: {
    maxWidth: function maxWidth(screenSize) {
      return "@media screen and (max-width: ".concat(screenSize, "px)");
    }
  }
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\twidth: calc(100% - (96px * 2));\n\tmax-width: ", "px;\n\n\t", " {\n\t\twidth: calc(100% - (32px * 2));\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject());
var Content = styled.div(_templateObject2(), screenSizes.fullhd, mediaQuery.screen.maxWidth(screenSizes.sm));

var ContentContainer = function ContentContainer(_ref) {
  var children = _ref.children;
  return React.createElement(Container, null, React.createElement(Content, null, children));
};

exports.ContentContainer = ContentContainer;

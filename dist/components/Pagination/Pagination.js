"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Pagination.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Pagination = function Pagination(_ref) {
  var _ref$pagIcons = _ref.pagIcons,
    pagIcons = _ref$pagIcons === void 0 ? {
      left: "<",
      right: ">"
    } : _ref$pagIcons,
    entrySelected = _ref.entrySelected,
    endPage = _ref.endPage,
    index = _ref.index,
    setIndex = _ref.setIndex;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    isSelected = _useState2[0],
    setIsSelected = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    arrPage = _useState4[0],
    setArrPage = _useState4[1];

  // create the pagination array to show
  (0, _react.useEffect)(function () {
    if (index > endPage) {
      setIndex(endPage);
    }
    createArrayOfIndexToShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrySelected, endPage, index]);
  (0, _react.useEffect)(function () {
    selectedLogic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrPage]);
  var createArrayOfIndexToShow = function createArrayOfIndexToShow() {
    var t = [];
    var maxSize = 7;
    if (endPage > maxSize) {
      t = _toConsumableArray(Array(maxSize)).map(function (_, i) {
        if (i === 0) {
          return 1;
        } else if (i === 6) {
          return endPage;
        } else {
          if (index <= 4) {
            if (i === 5) {
              return "...";
            } else {
              return i + 1;
            }
          } else if (index > 4 && index < endPage - 3) {
            var res;
            switch (i) {
              case 1:
              case 5:
                res = "...";
                break;
              case 2:
                res = index - 1;
                break;
              case 3:
                res = index;
                break;
              case 4:
                res = index + 1;
                break;
              default:
                break;
            }
            return res;
          } else {
            var _res;
            switch (i) {
              case 1:
                _res = "...";
                break;
              case 2:
                _res = endPage - 4;
                break;
              case 3:
                _res = endPage - 3;
                break;
              case 4:
                _res = endPage - 2;
                break;
              case 5:
                _res = endPage - 1;
                break;
              default:
                break;
            }
            return _res;
          }
        }
      });
    } else {
      t = _toConsumableArray(Array(endPage)).map(function (_, i) {
        return i + 1;
      });
    }
    setArrPage(t);
  };
  var selectedLogic = function selectedLogic() {
    if (isSelected === undefined || isSelected === -1 || isSelected > endPage - 1) {
      setIsSelected(0);
      setIndex(1);
    } else {
      var selectedIndex = 0;
      if (index <= 3) {
        selectedIndex = index - 1;
      } else if (index > 3 && index <= endPage - 3) {
        selectedIndex = 3;
      } else if (index < endPage) {
        selectedIndex = isSelected + (index - arrPage[isSelected]);
      } else {
        selectedIndex = arrPage.length - 1;
      }
      setIsSelected(selectedIndex);
    }
  };
  var paginationBackward = function paginationBackward(e) {
    if (typeof e === "number") {
      setIndex(e);
    } else if (index - 1 > 0) {
      setIndex(index - 1);
    }
  };
  var paginationForward = function paginationForward(e) {
    if (typeof e === "number") {
      setIndex(e);
    } else if (index < endPage) {
      setIndex(index + 1);
    }
  };
  var handlePaginationClick = function handlePaginationClick(e, i) {
    if (e === "..." || i === isSelected) {
      return;
    }
    if (e <= index) {
      paginationBackward(e);
    } else {
      paginationForward(e);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: paginationBackward
  }, pagIcons.left), /*#__PURE__*/_react.default.createElement("ul", null, arrPage.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      onClick: function onClick() {
        return handlePaginationClick(e, i);
      },
      className: isSelected === i ? "selected" : null,
      key: i
    }, e);
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: paginationForward
  }, pagIcons.right));
};
var _default = exports.default = Pagination;
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Search.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Search = function Search(_ref) {
  var _ref$formClassName = _ref.formClassName,
    formClassName = _ref$formClassName === void 0 ? [] : _ref$formClassName,
    _ref$formAutoComplete = _ref.formAutoComplete,
    formAutoComplete = _ref$formAutoComplete === void 0 ? "off" : _ref$formAutoComplete,
    _ref$btnContent = _ref.btnContent,
    btnContent = _ref$btnContent === void 0 ? "Search" : _ref$btnContent,
    _ref$btnAria = _ref.btnAria,
    btnAria = _ref$btnAria === void 0 ? "search button" : _ref$btnAria,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Search..." : _ref$placeholder,
    _ref$inputName = _ref.inputName,
    inputName = _ref$inputName === void 0 ? "search" : _ref$inputName,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? "search" : _ref$inputId,
    _ref$searchType = _ref.searchType,
    searchType = _ref$searchType === void 0 ? "submit" : _ref$searchType,
    data = _ref.data,
    setData = _ref.setData,
    originData = _ref.originData;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  (0, _react.useEffect)(function () {
    if (searchValue.length > 0 && (searchType === "change" || searchType === "both")) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, setSearchValue]);
  var handleSearch = function handleSearch() {
    if (data && setData) {
      var searchResult = originData.filter(function (row) {
        return Object.values(row).some(function (cellValue) {
          return cellValue.toString().toLowerCase().includes(searchValue.toLowerCase());
        });
      });
      setData(searchResult);
    }
  };
  var handleReset = function handleReset(e) {
    if (setData && originData && e.target.value.length === 0) {
      setData(originData);
    }
  };
  var handleChange = function handleChange(e) {
    setSearchValue(e.target.value);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (searchType === "submit" || searchType === "both") {
      handleSearch();
    }
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "search-bar".concat(formClassName.length > 0 ? " ".concat(formClassName.join(" ")) : ""),
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    autoComplete: formAutoComplete
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    value: searchValue,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    onInput: function onInput(e) {
      return handleReset(e);
    },
    placeholder: placeholder,
    name: inputName,
    id: inputId
  }), /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": btnAria
  }, btnContent));
};
var _default = exports.default = Search;
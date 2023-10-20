"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Table.css");
var _react = _interopRequireWildcard(require("react"));
var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var Table = function Table(_ref) {
  var showStep = _ref.showStep,
    _ref$userIcon = _ref.userIcon,
    userIcon = _ref$userIcon === void 0 ? {
      icon: null,
      anchor: null,
      before: true
    } : _ref$userIcon,
    _ref$highlightedCol = _ref.highlightedCol,
    highlightedCol = _ref$highlightedCol === void 0 ? {
      id: "third",
      color: "#2900ff"
    } : _ref$highlightedCol,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? {
      first: "Default 1",
      second: "Default 2",
      third: {
        value: "Start Date",
        isDate: true
      },
      fourth: "Default 4",
      fifth: "Default 5",
      sixth: "Default 6"
    } : _ref$columns,
    data = _ref.data,
    _ref$filterIcons = _ref.filterIcons,
    filterIcons = _ref$filterIcons === void 0 ? {
      up: String.fromCodePoint(8593),
      down: String.fromCodePoint(8595)
    } : _ref$filterIcons;
  var _useState = (0, _react.useState)([{
      first: "row 1 / cell 1",
      second: "row 1 / cell 2",
      third: "2020-10-06 18:36:29",
      fourth: "row 1 / cell 4",
      fifth: "row 1 / cell 5",
      sixth: "row 1 / cell 6"
    }, {
      first: "row 2 / cell 1",
      second: "row 2 / cell 2",
      third: "2020-10-07 18:36:29",
      fourth: "row 2 / cell 4",
      fifth: "row 2 / cell 5",
      sixth: "row 2 / cell 6"
    }, {
      first: "row 3 / cell 1",
      second: "row 3 / cell 2",
      third: "2020-10-08 18:36:29",
      fourth: "row 3 / cell 4",
      fifth: "row 3 / cell 5",
      sixth: "row 3 / cell 6"
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    dataArray = _useState2[0],
    setDataArray = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    dataToShow = _useState4[0],
    setDataToShow = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    emptyRows = _useState6[0],
    setEmptyRows = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    filterUsed = _useState8[0],
    setFilterUsed = _useState8[1];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    pagIndex = _useState10[0],
    setPagIndex = _useState10[1];
  var _useState11 = (0, _react.useState)(showStep && showStep.length > 0 ? showStep : [4, 8, 12]),
    _useState12 = _slicedToArray(_useState11, 1),
    nRowToShow = _useState12[0];
  var _useState13 = (0, _react.useState)(nRowToShow[1]),
    _useState14 = _slicedToArray(_useState13, 2),
    entrySelected = _useState14[0],
    setEntrySelected = _useState14[1];

  // update data array on orginal data change
  (0, _react.useEffect)(function () {
    if (data && data.length > 0) {
      setDataArray(data);
    }
  }, [data]);

  // recreate an array of items to show when the pagination, the nb of entries selected or the data array is set
  (0, _react.useEffect)(function () {
    var start = parseInt(entrySelected) * (pagIndex - 1);
    var end = parseInt(entrySelected) * (pagIndex - 1) + parseInt(entrySelected);
    createDataArrayToShow(start, end);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrySelected, pagIndex, setPagIndex, dataArray]);
  var createDataArrayToShow = function createDataArrayToShow(start, end) {
    var t = dataArray.length > 0 ? dataArray.filter(function (_, i) {
      return i >= start && i < end;
    }) : dataArray;
    var response = {
      data: t,
      pagination: dataArray.length > 0 ? Math.ceil(dataArray.length / parseInt(entrySelected)) : 0
    };
    setDataToShow(response);
    if (t.length !== entrySelected) {
      setEmptyRows(entrySelected - t.length);
    } else {
      setEmptyRows(0);
    }
  };

  // sorting data
  var handleFiltering = function handleFiltering(k) {
    // using "filterUsed" to know if the filtering has already been firing in that case we reverse the array

    var filtedDataArray = _toConsumableArray(dataArray).sort(function (a, b) {
      if (typeof a[k] === "number") {
        return a[k] - b[k];
      } else {
        return a[k].toLowerCase() < b[k].toLowerCase() ? -1 : a[k].toLowerCase() > b[k].toLowerCase() ? 1 : 0;
      }
    });
    if (filterUsed && filterUsed === k) {
      setDataArray(filtedDataArray.reverse());
      setFilterUsed(null);
    } else {
      setDataArray(filtedDataArray);
      setFilterUsed(k);
    }
  };
  var getFormatDate = function getFormatDate(date) {
    var fDate = new Date(date);
    var y = fDate.getFullYear();
    var m = fDate.getMonth() + 1;
    var d = fDate.getDate();

    // mm-dd-yyyy   <-- US format
    return "".concat(m < 10 ? "0".concat(m) : m, "-").concat(d < 10 ? "0".concat(d) : d, "-").concat(y);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, Object.entries(columns).map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
      k = _ref3[0],
      v = _ref3[1];
    return /*#__PURE__*/_react.default.createElement("th", {
      key: "col-".concat(i),
      scope: "col",
      onClick: function onClick() {
        return handleFiltering(k, v);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "th-content"
    }, _typeof(v) === "object" && v !== null && v !== void 0 && v.value ? v.value : _typeof(v) === "object" && !(v !== null && v !== void 0 && v.value) ? "Date column" : v, /*#__PURE__*/_react.default.createElement("span", null, filterUsed && filterUsed === k ? filterIcons.up : filterIcons.down)));
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, dataToShow && dataToShow.data.map(function (da, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: "row-".concat(i)
    }, Object.entries(columns).map(function (_ref4, ind) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        val = _ref5[1];
      if (da.hasOwnProperty(key)) {
        return /*#__PURE__*/_react.default.createElement("td", {
          style: key === highlightedCol.id ? {
            color: highlightedCol.color
          } : null,
          key: "cell-".concat(ind)
        }, userIcon.icon && key === userIcon.anchor && userIcon.before ? userIcon.icon : null, _typeof(val) === "object" && val !== null && val !== void 0 && val.isDate ? getFormatDate(da[key]) : _typeof(val) === "object" && (!(val !== null && val !== void 0 && val.isDate) || !val.isDate) ? "Malformed" : da[key], userIcon.icon && key === userIcon.anchor && !userIcon.before ? userIcon.icon : null);
      } else {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: "cell-".concat(ind, "-empty")
        });
      }
    }));
  }), emptyRows > 0 && _toConsumableArray(Array(emptyRows)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      className: "empty-row",
      key: "empty-row-".concat(i)
    });
  })))), nRowToShow && dataToShow && /*#__PURE__*/_react.default.createElement("div", {
    className: "table-pagination"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "entries-container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "entries-select"
  }, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange(e) {
      return setEntrySelected(e.target.value);
    },
    defaultValue: entrySelected,
    name: "entries",
    id: "entries-select"
  }, nRowToShow.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: "entry-".concat(i),
      value: e
    }, e);
  })), /*#__PURE__*/_react.default.createElement("span", null, "entries")), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    entrySelected: entrySelected,
    endPage: dataToShow.pagination,
    index: pagIndex,
    setIndex: setPagIndex
  })));
};
var _default = exports.default = Table;
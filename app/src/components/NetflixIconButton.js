"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var IconButton_1 = require("@mui/material/IconButton");
var NetflixIconButton = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, sx = _a.sx, others = __rest(_a, ["children", "sx"]);
    return (<IconButton_1["default"] sx={__assign({ color: "white", borderWidth: "2px", borderStyle: "solid", borderColor: "grey.700", "&:hover, &:focus": {
                borderColor: "grey.200"
            } }, sx)} {...others} ref={ref}>
        {children}
      </IconButton_1["default"]>);
});
exports["default"] = NetflixIconButton;

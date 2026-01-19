"use strict";
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
var PlayerControlButton = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, others = __rest(_a, ["children"]);
    return (<IconButton_1["default"] ref={ref} sx={{
            padding: { xs: 0.5, sm: 1 },
            "& svg, & span": { transition: "transform .3s" },
            "&:hover svg, &:hover span": {
                msTransform: "scale(1.3)",
                WebkitTransform: "scale(1.3)",
                transform: "scale(1.3)"
            }
        }} {...others}>
      {children}
    </IconButton_1["default"]>);
});
exports["default"] = PlayerControlButton;

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
var framer_motion_1 = require("framer-motion");
var Box_1 = require("@mui/material/Box");
var Wrap_1 = require("./variants/Wrap");
function MotionContainer(_a) {
    var open = _a.open, children = _a.children, other = __rest(_a, ["open", "children"]);
    return (<Box_1["default"] initial={false} variants={Wrap_1.varWrapBoth} component={framer_motion_1.motion.div} animate={open ? "animate" : "exit"} {...other}>
      {children}
    </Box_1["default"]>);
}
exports["default"] = MotionContainer;

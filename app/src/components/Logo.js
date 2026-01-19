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
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var react_router_dom_1 = require("react-router-dom");
var constant_1 = require("src/constant");
function Logo(_a) {
    var sx = _a.sx;
    return (<react_router_dom_1.Link to={"/".concat(constant_1.MAIN_PATH.browse)}>
      <Box_1["default"] component="img" alt="Netflix Logo" src="/assets/netflix-logo.png" width={87} height={25} sx={__assign({}, sx)}/>
    </react_router_dom_1.Link>);
}
exports["default"] = Logo;

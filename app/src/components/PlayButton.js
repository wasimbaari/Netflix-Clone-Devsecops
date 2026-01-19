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
var Button_1 = require("@mui/material/Button");
var PlayArrow_1 = require("@mui/icons-material/PlayArrow");
var react_router_dom_1 = require("react-router-dom");
var constant_1 = require("src/constant");
function PlayButton(_a) {
    var sx = _a.sx, others = __rest(_a, ["sx"]);
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Button_1["default"] color="inherit" variant="contained" startIcon={<PlayArrow_1["default"] sx={{
                fontSize: {
                    xs: "24px !important",
                    sm: "32px !important",
                    md: "40px !important"
                }
            }}/>} {...others} sx={__assign({ px: { xs: 1, sm: 2 }, py: { xs: 0.5, sm: 1 }, fontSize: { xs: 18, sm: 24, md: 28 }, lineHeight: 1.5, fontWeight: "bold", whiteSpace: "nowrap", textTransform: "capitalize" }, sx)} onClick={function () { return navigate("/".concat(constant_1.MAIN_PATH.watch)); }}>
      Play
    </Button_1["default"]>);
}
exports["default"] = PlayButton;

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
var InfoOutlined_1 = require("@mui/icons-material/InfoOutlined");
function MoreInfoButton(_a) {
    var sx = _a.sx, others = __rest(_a, ["sx"]);
    return (<Button_1["default"] variant="contained" startIcon={<InfoOutlined_1["default"] sx={{
                fontSize: {
                    xs: "24px !important",
                    sm: "32px !important",
                    md: "40px !important"
                }
            }}/>} {...others} sx={__assign(__assign({}, sx), { px: { xs: 1, sm: 2 }, py: { xs: 0.5, sm: 1 }, fontSize: { xs: 18, sm: 24, md: 28 }, lineHeight: 1.5, fontWeight: "bold", textTransform: "capitalize", bgcolor: "#6d6d6eb3", whiteSpace: "nowrap", "&:hover": { bgcolor: "#6d6d6e66" } })}>
      More Info
    </Button_1["default"]>);
}
exports["default"] = MoreInfoButton;

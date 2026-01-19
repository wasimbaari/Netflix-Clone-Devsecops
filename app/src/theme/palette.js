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
var PRIMARY = {
    light: "#B8B8B8",
    main: "#141414",
    dark: "#0E0A0A"
};
var GREY = {
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24"
};
var COMMON = {
    common: { black: "#000", white: "#fff" },
    primary: __assign(__assign({}, PRIMARY), { contrastText: "#fff" }),
    grey: GREY,
    action: {
        active: GREY[500],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
var palette = __assign(__assign({}, COMMON), { text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] }, background: { "default": PRIMARY.main, paper: PRIMARY.main }, mode: "dark" });
exports["default"] = palette;

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
exports.varZoomInRight = exports.varZoomInLeft = exports.varZoomIn = void 0;
var DISTANCE = 0;
var IN = { scale: 1, opacity: 1 };
var OUT = { scale: 0, opacity: 0 };
var TRANSITION_ENTER = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};
var TRANSITION_EXIT = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};
exports.varZoomIn = {
    initial: OUT,
    animate: __assign(__assign({}, IN), { transition: TRANSITION_ENTER }),
    exit: __assign(__assign({}, OUT), { transition: TRANSITION_EXIT })
};
exports.varZoomInLeft = {
    initial: __assign(__assign({}, OUT), { translateX: -DISTANCE }),
    animate: __assign(__assign({}, IN), { translateX: 0, transition: TRANSITION_ENTER }),
    exit: __assign(__assign({}, OUT), { translateX: -DISTANCE, transition: TRANSITION_EXIT })
};
exports.varZoomInRight = {
    initial: __assign(__assign({}, OUT), { translateX: DISTANCE }),
    animate: __assign(__assign({}, IN), { translateX: 0, transition: TRANSITION_ENTER }),
    exit: __assign(__assign({}, OUT), { translateX: DISTANCE, transition: TRANSITION_EXIT })
};

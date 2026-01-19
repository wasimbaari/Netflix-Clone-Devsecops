"use strict";
exports.__esModule = true;
exports.varWrapBoth = exports.varWrapExit = exports.varWrapEnter = void 0;
exports.varWrapEnter = {
    animate: {
        transition: { staggerChildren: 0.1 }
    }
};
exports.varWrapExit = {
    exit: {
        transition: { staggerChildren: 0.1 }
    }
};
exports.varWrapBoth = {
    animate: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

"use strict";
exports.__esModule = true;
exports.varFadeOut = void 0;
var TRANSITION_ENTER = {
    duration: 0.64,
    ease: [0.43, 0.13, 0.23, 0.96]
};
var TRANSITION_EXIT = {
    duration: 0.48,
    ease: [0.43, 0.13, 0.23, 0.96]
};
exports.varFadeOut = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: TRANSITION_ENTER },
    exit: { opacity: 1, transition: TRANSITION_EXIT }
};

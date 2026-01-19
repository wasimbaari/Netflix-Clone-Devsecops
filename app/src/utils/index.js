"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.buildThresholdList = exports.getRandomNumber = exports.formatMinuteToReadable = void 0;
var common_1 = require("./common");
__createBinding(exports, common_1, "formatMinuteToReadable");
__createBinding(exports, common_1, "getRandomNumber");
function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;
    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
}
exports.buildThresholdList = buildThresholdList;

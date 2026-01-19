"use strict";
exports.__esModule = true;
exports.formatTime = exports.formatBytes = exports.formatMinuteToReadable = exports.getRandomNumber = void 0;
var getRandomNumber = function (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
};
exports.getRandomNumber = getRandomNumber;
var formatMinuteToReadable = function (minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes - h * 60;
    if (h > 0) {
        return "".concat(h, "h ").concat(m, "m");
    }
    else {
        return "".concat(m, "m");
    }
};
exports.formatMinuteToReadable = formatMinuteToReadable;
var formatBytes = function (bytes, decimals) {
    if (decimals === void 0) { decimals = 2; }
    if (!+bytes)
        return "0 Bytes";
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = [
        "Bytes",
        "KiB",
        "MiB",
        "GiB",
        "TiB",
        "PiB",
        "EiB",
        "ZiB",
        "YiB",
    ];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
};
exports.formatBytes = formatBytes;
var formatTime = function (current) {
    var h = Math.floor(current / 3600);
    var m = Math.floor((current - h * 3600) / 60);
    var s = Math.floor(current % 60);
    var sString = s < 10 ? "0" + s.toString() : s.toString();
    var mString = m < 10 ? "0" + m.toString() : m.toString();
    if (h > 0) {
        var hString = h < 10 ? "0" + h.toString() : h.toString();
        return "".concat(hString, ":").concat(mString, ":").concat(sString);
    }
    else {
        return "".concat(mString, ":").concat(sString);
    }
};
exports.formatTime = formatTime;

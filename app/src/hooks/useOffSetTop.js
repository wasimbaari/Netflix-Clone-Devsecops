"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useOffSetTop(top) {
    var _a = (0, react_1.useState)(false), offsetTop = _a[0], setOffSetTop = _a[1];
    var onScroll = (0, react_1.useCallback)(function () {
        if (window.pageYOffset > top) {
            setOffSetTop(true);
        }
        else {
            setOffSetTop(false);
        }
    }, [top]);
    (0, react_1.useEffect)(function () {
        window.addEventListener("scroll", onScroll);
        return function () {
            window.removeEventListener("scroll", onScroll);
        };
    }, [top]);
    return offsetTop;
}
exports["default"] = useOffSetTop;

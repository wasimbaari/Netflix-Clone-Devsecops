"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import { buildThresholdList } from "src/utils";
function useIntersectionObserver(ref, options) {
    var _a = (0, react_1.useState)(null), entry = _a[0], setEntry = _a[1];
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setEntry(entry);
        }, options !== null && options !== void 0 ? options : {
            root: null,
            rootMargin: "0px",
            // threshold: buildThresholdList(),
            threshold: 1
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return entry;
}
exports["default"] = useIntersectionObserver;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
function createSafeContext() {
    var context = react_1["default"].createContext(undefined);
    function useContext() {
        var value = react_1["default"].useContext(context);
        if (value === undefined) {
            throw new Error("useContext must be inside a Provider with a value");
        }
        return value;
    }
    return [useContext, context.Provider];
}
exports["default"] = createSafeContext;

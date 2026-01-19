"use strict";
var _a, _b;
exports.__esModule = true;
exports.PortalDataProvider = exports.usePortalData = exports.Provider = exports.usePortal = void 0;
var react_1 = require("react");
var createSafeContext_1 = require("src/lib/createSafeContext");
exports.usePortal = (_a = (0, createSafeContext_1["default"])(), _a[0]), exports.Provider = _a[1];
exports.usePortalData = (_b = (0, createSafeContext_1["default"])(), _b[0]), exports.PortalDataProvider = _b[1];
function PortalProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(null), anchorElement = _b[0], setAnchorElement = _b[1];
    var _c = (0, react_1.useState)(null), miniModalMediaData = _c[0], setMiniModalMediaData = _c[1];
    var handleChangePortal = (0, react_1.useCallback)(function (anchor, video) {
        setAnchorElement(anchor);
        setMiniModalMediaData(video);
    }, []);
    return (<exports.Provider value={handleChangePortal}>
      <exports.PortalDataProvider value={{
            anchorElement: anchorElement,
            miniModalMediaData: miniModalMediaData
        }}>
        {children}
      </exports.PortalDataProvider>
    </exports.Provider>);
}
exports["default"] = PortalProvider;

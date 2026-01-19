"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PortalProvider_1 = require("src/providers/PortalProvider");
var configuration_1 = require("src/store/slices/configuration");
var VideoItemWithHoverPure_1 = require("./VideoItemWithHoverPure");
function VideoItemWithHover(_a) {
    var video = _a.video;
    var setPortal = (0, PortalProvider_1.usePortal)();
    var elementRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isHovered = _b[0], setIsHovered = _b[1];
    var configuration = (0, configuration_1.useGetConfigurationQuery)(undefined).data;
    (0, react_1.useEffect)(function () {
        if (isHovered) {
            setPortal(elementRef.current, video);
        }
    }, [isHovered]);
    return (<VideoItemWithHoverPure_1["default"] ref={elementRef} handleHover={setIsHovered} src={"".concat(configuration === null || configuration === void 0 ? void 0 : configuration.images.base_url, "w300").concat(video.backdrop_path)}/>);
}
exports["default"] = VideoItemWithHover;

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
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Portal_1 = require("@mui/material/Portal");
var VideoCardPortal_1 = require("./VideoCardPortal");
var MotionContainer_1 = require("./animate/MotionContainer");
var ZoomIn_1 = require("./animate/variants/zoom/ZoomIn");
var PortalProvider_1 = require("src/providers/PortalProvider");
function VideoPortalContainer() {
    var _a = (0, PortalProvider_1.usePortalData)(), miniModalMediaData = _a.miniModalMediaData, anchorElement = _a.anchorElement;
    var container = (0, react_1.useRef)(null);
    var rect = anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.getBoundingClientRect();
    var hasToRender = !!miniModalMediaData && !!anchorElement;
    var isFirstElement = false;
    var isLastElement = false;
    var variant = ZoomIn_1.varZoomIn;
    if (hasToRender) {
        var parentElement = anchorElement.closest(".slick-active");
        var nextSiblingOfParentElement = parentElement === null || parentElement === void 0 ? void 0 : parentElement.nextElementSibling;
        var previousSiblingOfParentElement = parentElement === null || parentElement === void 0 ? void 0 : parentElement.previousElementSibling;
        if (!(previousSiblingOfParentElement === null || previousSiblingOfParentElement === void 0 ? void 0 : previousSiblingOfParentElement.classList.contains("slick-active"))) {
            isFirstElement = true;
            variant = ZoomIn_1.varZoomInLeft;
        }
        else if (!(nextSiblingOfParentElement === null || nextSiblingOfParentElement === void 0 ? void 0 : nextSiblingOfParentElement.classList.contains("slick-active"))) {
            isLastElement = true;
            variant = ZoomIn_1.varZoomInRight;
        }
    }
    return (<>
      {hasToRender && (<Portal_1["default"] container={container.current}>
          <VideoCardPortal_1["default"] video={miniModalMediaData} anchorElement={anchorElement}/>
        </Portal_1["default"]>)}
      <MotionContainer_1["default"] open={hasToRender} initial="initial">
        <framer_motion_1.motion.div ref={container} variants={variant} style={__assign({ zIndex: 1, position: "absolute", display: "inline-block" }, (rect && __assign({ top: rect.top + window.pageYOffset - 0.75 * rect.height }, (isLastElement
            ? {
                right: document.documentElement.clientWidth - rect.right
            }
            : {
                left: isFirstElement
                    ? rect.left
                    : rect.left - 0.25 * rect.width
            }))))}/>
      </MotionContainer_1["default"]>
    </>);
}
exports["default"] = VideoPortalContainer;

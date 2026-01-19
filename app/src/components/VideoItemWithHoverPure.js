"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var VideoItemWithHoverPure = /** @class */ (function (_super) {
    __extends(VideoItemWithHoverPure, _super);
    function VideoItemWithHoverPure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoItemWithHoverPure.prototype.render = function () {
        var _this = this;
        return (<div ref={this.props.innerRef} style={{
                zIndex: 9,
                cursor: "pointer",
                borderRadius: 0.5,
                width: "100%",
                position: "relative",
                paddingTop: "calc(9 / 16 * 100%)"
            }}>
        <img src={this.props.src} style={{
                top: 0,
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                borderRadius: "4px"
            }} onPointerEnter={function () {
                // console.log("onPointerEnter");
                _this.props.handleHover(true);
            }} onPointerLeave={function () {
                // console.log("onPointerLeave");
                _this.props.handleHover(false);
            }}/>
      </div>);
    };
    return VideoItemWithHoverPure;
}(react_1.PureComponent));
var VideoItemWithHoverRef = (0, react_1.forwardRef)(function (props, ref) { return <VideoItemWithHoverPure {...props} innerRef={ref}/>; });
VideoItemWithHoverRef.displayName = "VideoItemWithHoverRef";
exports["default"] = VideoItemWithHoverRef;

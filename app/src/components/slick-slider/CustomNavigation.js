"use strict";
exports.__esModule = true;
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var ArrowBackIosNew_1 = require("@mui/icons-material/ArrowBackIosNew");
var ArrowForwardIos_1 = require("@mui/icons-material/ArrowForwardIos");
var ArrowStyle = (0, styles_1.styled)(Box_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            top: 0,
            bottom: 0,
            position: "absolute",
            zIndex: 9,
            height: "100%",
            opacity: 0.48,
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white,
            // background: theme.palette.grey[700],
            transition: theme.transitions.create("opacity"),
            "&:hover": {
                opacity: 0.8,
                background: theme.palette.grey[900]
            }
        },
        _b[theme.breakpoints.down("sm")] = {
            display: "none"
        },
        _b);
});
function CustomNavigation(_a) {
    var isEnd = _a.isEnd, onNext = _a.onNext, children = _a.children, onPrevious = _a.onPrevious, arrowWidth = _a.arrowWidth, activeSlideIndex = _a.activeSlideIndex;
    return (<>
      {activeSlideIndex > 0 && (<ArrowStyle onClick={onPrevious} sx={{
                left: 0,
                width: { xs: arrowWidth / 2, sm: arrowWidth },
                borderTopRightRadius: { xs: "4px" },
                borderBottomRightRadius: { xs: "4px" }
            }}>
          <ArrowBackIosNew_1["default"] />
        </ArrowStyle>)}

      {children}
      {!isEnd && (<ArrowStyle onClick={onNext} sx={{
                right: 0,
                width: { xs: arrowWidth / 2, sm: arrowWidth },
                borderTopLeftRadius: { xs: "4px" },
                borderBottomLeftRadius: { xs: "4px" }
            }}>
          <ArrowForwardIos_1["default"] />
        </ArrowStyle>)}
    </>);
}
exports["default"] = CustomNavigation;

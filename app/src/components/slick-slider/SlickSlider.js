"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_slick_1 = require("react-slick");
var framer_motion_1 = require("framer-motion");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Stack_1 = require("@mui/material/Stack");
var CustomNavigation_1 = require("./CustomNavigation");
var VideoItemWithHover_1 = require("src/components/VideoItemWithHover");
var constant_1 = require("src/constant");
var NetflixNavigationLink_1 = require("src/components/NetflixNavigationLink");
var MotionContainer_1 = require("src/components/animate/MotionContainer");
var FadeIn_1 = require("src/components/animate/variants/fade/FadeIn");
var RootStyle = (0, styles_1.styled)("div")(function () { return ({
    position: "relative",
    overflow: "inherit"
}); });
var StyledSlider = (0, styles_1.styled)(react_slick_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme, padding = _a.padding;
    return (_b = {
            display: "flex !important",
            justifyContent: "center",
            overflow: "initial !important",
            "& > .slick-list": {
                overflow: "visible"
            }
        },
        _b[theme.breakpoints.up("sm")] = {
            "& > .slick-list": {
                width: "calc(100% - ".concat(2 * padding, "px)")
            },
            "& .slick-list > .slick-track": {
                margin: "0px !important"
            },
            "& .slick-list > .slick-track > .slick-current > div > .NetflixBox-root > .NetflixPaper-root:hover": {
                transformOrigin: "0% 50% !important"
            }
        },
        _b[theme.breakpoints.down("sm")] = {
            "& > .slick-list": {
                width: "calc(100% - ".concat(padding, "px)")
            }
        },
        _b);
});
function SlideItem(_a) {
    var item = _a.item;
    return (<Box_1["default"] sx={{ pr: { xs: 0.5, sm: 1 } }}>
      <VideoItemWithHover_1["default"] video={item}/>
    </Box_1["default"]>);
}
function SlickSlider(_a) {
    var _this = this;
    var data = _a.data, genre = _a.genre;
    var sliderRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(0), activeSlideIndex = _b[0], setActiveSlideIndex = _b[1];
    var _c = (0, react_1.useState)(false), showExplore = _c[0], setShowExplore = _c[1];
    var _d = (0, react_1.useState)(false), isEnd = _d[0], setIsEnd = _d[1];
    var theme = (0, styles_1.useTheme)();
    var beforeChange = function (currentIndex, nextIndex) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (currentIndex < nextIndex) {
                setActiveSlideIndex(nextIndex);
            }
            else if (currentIndex > nextIndex) {
                setIsEnd(false);
            }
            setActiveSlideIndex(nextIndex);
            return [2 /*return*/];
        });
    }); };
    var settings = {
        speed: 500,
        arrows: false,
        infinite: false,
        lazyLoad: "ondemand",
        slidesToShow: 6,
        slidesToScroll: 6,
        // afterChange: (current) => {
        //   console.log("After Change", current);
        // },
        beforeChange: beforeChange,
        // onEdge: (direction) => {
        //   console.log("Edge: ", direction);
        // },
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };
    var handlePrevious = function () {
        var _a;
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickPrev();
    };
    var handleNext = function () {
        var _a;
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickNext();
    };
    return (<Box_1["default"] sx={{ overflow: "hidden", height: "100%", zIndex: 1 }}>
      {data.results.length > 0 && (<>
          <Stack_1["default"] spacing={2} direction="row" alignItems="center" sx={{ mb: 2, pl: { xs: "30px", sm: "60px" } }}>
            <NetflixNavigationLink_1["default"] variant="h5" to={"/genre/".concat(genre.id || genre.name.toLowerCase().replace(" ", "_"))} sx={{
                display: "inline-block",
                fontWeight: 700
            }} onMouseOver={function () {
                setShowExplore(true);
            }} onMouseLeave={function () {
                setShowExplore(false);
            }}>
              {"".concat(genre.name, " Movies ")}
              <MotionContainer_1["default"] open={showExplore} initial="initial" sx={{ display: "inline", color: "success.main" }}>
                {"Explore All".split("").map(function (letter, index) { return (<framer_motion_1.motion.span key={index} variants={FadeIn_1.varFadeIn}>
                    {letter}
                  </framer_motion_1.motion.span>); })}
              </MotionContainer_1["default"]>
            </NetflixNavigationLink_1["default"]>
          </Stack_1["default"]>

          <RootStyle>
            <CustomNavigation_1["default"] isEnd={isEnd} arrowWidth={constant_1.ARROW_MAX_WIDTH} onNext={handleNext} onPrevious={handlePrevious} activeSlideIndex={activeSlideIndex}>
              <StyledSlider ref={sliderRef} {...settings} padding={constant_1.ARROW_MAX_WIDTH} theme={theme}>
                {data.results
                .filter(function (i) { return !!i.backdrop_path; })
                .map(function (item) { return (<SlideItem key={item.id} item={item}/>); })}
              </StyledSlider>
            </CustomNavigation_1["default"]>
          </RootStyle>
        </>)}
    </Box_1["default"]>);
}
exports["default"] = SlickSlider;

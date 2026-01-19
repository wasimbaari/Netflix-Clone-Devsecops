"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var InputBase_1 = require("@mui/material/InputBase");
var Search_1 = require("@mui/icons-material/Search");
var Search = (0, styles_1.styled)("div")(function (_a) {
    var theme = _a.theme;
    return ({
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center"
    });
});
var SearchIconWrapper = (0, styles_1.styled)("div")(function (_a) {
    var theme = _a.theme;
    return ({
        cursor: "pointer",
        padding: theme.spacing(0, 1),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });
});
var StyledInputBase = (0, styles_1.styled)(InputBase_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        color: "inherit",
        "& .NetflixInputBase-input": {
            width: 0,
            transition: theme.transitions.create("width", {
                duration: theme.transitions.duration.complex,
                easing: theme.transitions.easing.easeIn
            }),
            "&:focus": {
                width: "auto"
            }
        }
    });
});
function SearchBox() {
    var _a = (0, react_1.useState)(false), isFocused = _a[0], setIsFocused = _a[1];
    var searchInputRef = (0, react_1.useRef)();
    var handleClickSearchIcon = function () {
        var _a;
        if (!isFocused) {
            (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    return (<Search sx={isFocused ? { border: "1px solid white", backgroundColor: "black" } : {}}>
      <SearchIconWrapper onClick={handleClickSearchIcon}>
        <Search_1["default"] />
      </SearchIconWrapper>
      <StyledInputBase inputRef={searchInputRef} placeholder="Titles, people, genres" inputProps={{
            "aria-label": "search",
            onFocus: function () {
                setIsFocused(true);
            },
            onBlur: function () {
                setIsFocused(false);
            }
        }}/>
    </Search>);
}
exports["default"] = SearchBox;

"use strict";
exports.__esModule = true;
var withPagination_1 = require("src/hoc/withPagination");
var SlickSlider_1 = require("./slick-slider/SlickSlider");
function SliderRowForGenre(_a) {
    var genre = _a.genre, mediaType = _a.mediaType;
    var Component = (0, withPagination_1["default"])(SlickSlider_1["default"], mediaType, genre);
    return <Component />;
}
exports["default"] = SliderRowForGenre;

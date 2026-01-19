"use strict";
exports.__esModule = true;
var withPagination_1 = require("src/hoc/withPagination");
var GridWithInfiniteScroll_1 = require("./GridWithInfiniteScroll");
function GridPage(_a) {
    var genre = _a.genre, mediaType = _a.mediaType;
    var Component = (0, withPagination_1["default"])(GridWithInfiniteScroll_1["default"], mediaType, genre);
    return <Component />;
}
exports["default"] = GridPage;

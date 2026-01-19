"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Breadcrumbs_1 = require("@mui/material/Breadcrumbs");
var Separator = (<Box_1["default"] component="span" sx={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        bgcolor: "text.disabled"
    }}/>);
function GenreBreadcrumbs(_a) {
    var genres = _a.genres, others = __rest(_a, ["genres"]);
    return (<Breadcrumbs_1["default"] separator={Separator} {...others}>
      {genres.map(function (genre, idx) { return (<Typography_1["default"] key={idx} sx={{ color: "text.primary" }}>
          {genre}
        </Typography_1["default"]>); })}
    </Breadcrumbs_1["default"]>);
}
exports["default"] = GenreBreadcrumbs;

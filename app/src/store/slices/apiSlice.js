"use strict";
exports.__esModule = true;
exports.tmdbApi = void 0;
var constant_1 = require("src/constant");
var react_1 = require("@reduxjs/toolkit/query/react");
exports.tmdbApi = (0, react_1.createApi)({
    reducerPath: "tmdbApi",
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: constant_1.API_ENDPOINT_URL }),
    endpoints: function (build) { return ({}); }
});

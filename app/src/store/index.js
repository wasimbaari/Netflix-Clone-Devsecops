"use strict";
var _a;
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var apiSlice_1 = require("./slices/apiSlice");
var discover_1 = require("./slices/discover");
var store = (0, toolkit_1.configureStore)({
    reducer: (_a = {
            discover: discover_1["default"]
        },
        _a[apiSlice_1.tmdbApi.reducerPath] = apiSlice_1.tmdbApi.reducer,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(apiSlice_1.tmdbApi.middleware);
    }
});
exports["default"] = store;

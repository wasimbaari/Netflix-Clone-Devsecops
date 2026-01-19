"use strict";
exports.__esModule = true;
exports.useGetConfigurationQuery = exports.extendedApi = void 0;
var constant_1 = require("src/constant");
var apiSlice_1 = require("./apiSlice");
exports.extendedApi = apiSlice_1.tmdbApi.injectEndpoints({
    endpoints: function (build) { return ({
        getConfiguration: build.query({
            query: function () { return ({
                url: "/configuration",
                params: { api_key: constant_1.TMDB_V3_API_KEY }
            }); }
        })
    }); }
});
exports.useGetConfigurationQuery = exports.extendedApi.useGetConfigurationQuery;

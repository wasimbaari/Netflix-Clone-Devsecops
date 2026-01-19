"use strict";
exports.__esModule = true;
exports.genreSliceEndpoints = exports.useGetGenresQuery = void 0;
var constant_1 = require("src/constant");
var apiSlice_1 = require("./apiSlice");
var extendedApi = apiSlice_1.tmdbApi.injectEndpoints({
    endpoints: function (build) { return ({
        getGenres: build.query({
            query: function (mediaType) { return ({
                url: "/genre/".concat(mediaType, "/list"),
                params: { api_key: constant_1.TMDB_V3_API_KEY }
            }); },
            transformResponse: function (response) {
                return response.genres;
            }
        })
    }); }
});
exports.useGetGenresQuery = extendedApi.useGetGenresQuery, exports.genreSliceEndpoints = extendedApi.endpoints;

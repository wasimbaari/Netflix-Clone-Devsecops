"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.useLazyGetSimilarVideosQuery = exports.useGetSimilarVideosQuery = exports.useLazyGetAppendedVideosQuery = exports.useGetAppendedVideosQuery = exports.useLazyGetVideosByMediaTypeAndCustomGenreQuery = exports.useGetVideosByMediaTypeAndCustomGenreQuery = exports.useLazyGetVideosByMediaTypeAndGenreIdQuery = exports.useGetVideosByMediaTypeAndGenreIdQuery = exports.initiateItem = exports.setNextPage = exports.initialItemState = void 0;
var constant_1 = require("src/constant");
var apiSlice_1 = require("./apiSlice");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {};
exports.initialItemState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};
var discoverSlice = (0, toolkit_1.createSlice)({
    name: "discover",
    initialState: initialState,
    reducers: {
        setNextPage: function (state, action) {
            var _a = action.payload, mediaType = _a.mediaType, itemKey = _a.itemKey;
            state[mediaType][itemKey].page += 1;
        },
        initiateItem: function (state, action) {
            var _a = action.payload, mediaType = _a.mediaType, itemKey = _a.itemKey;
            if (!state[mediaType]) {
                state[mediaType] = {};
            }
            if (!state[mediaType][itemKey]) {
                state[mediaType][itemKey] = exports.initialItemState;
            }
        }
    },
    extraReducers: function (builder) {
        builder.addMatcher((0, toolkit_1.isAnyOf)(extendedApi.endpoints.getVideosByMediaTypeAndCustomGenre.matchFulfilled, extendedApi.endpoints.getVideosByMediaTypeAndGenreId.matchFulfilled), function (state, action) {
            var _a;
            var _b = action.payload, page = _b.page, results = _b.results, total_pages = _b.total_pages, total_results = _b.total_results, mediaType = _b.mediaType, itemKey = _b.itemKey;
            state[mediaType][itemKey].page = page;
            (_a = state[mediaType][itemKey].results).push.apply(_a, results);
            state[mediaType][itemKey].total_pages = total_pages;
            state[mediaType][itemKey].total_results = total_results;
        });
    }
});
exports.setNextPage = (_a = discoverSlice.actions, _a.setNextPage), exports.initiateItem = _a.initiateItem;
exports["default"] = discoverSlice.reducer;
var extendedApi = apiSlice_1.tmdbApi.injectEndpoints({
    endpoints: function (build) { return ({
        getVideosByMediaTypeAndGenreId: build.query({
            query: function (_a) {
                var mediaType = _a.mediaType, genreId = _a.genreId, page = _a.page;
                return ({
                    url: "/discover/".concat(mediaType),
                    params: { api_key: constant_1.TMDB_V3_API_KEY, with_genres: genreId, page: page }
                });
            },
            transformResponse: function (response, _, _a) {
                var mediaType = _a.mediaType, genreId = _a.genreId;
                return (__assign(__assign({}, response), { mediaType: mediaType, itemKey: genreId }));
            }
        }),
        getVideosByMediaTypeAndCustomGenre: build.query({
            query: function (_a) {
                var mediaType = _a.mediaType, apiString = _a.apiString, page = _a.page;
                return ({
                    url: "/".concat(mediaType, "/").concat(apiString),
                    params: { api_key: constant_1.TMDB_V3_API_KEY, page: page }
                });
            },
            transformResponse: function (response, _, _a) {
                var mediaType = _a.mediaType, apiString = _a.apiString;
                return __assign(__assign({}, response), { mediaType: mediaType, itemKey: apiString });
            }
        }),
        getAppendedVideos: build.query({
            query: function (_a) {
                var mediaType = _a.mediaType, id = _a.id;
                return ({
                    url: "/".concat(mediaType, "/").concat(id),
                    params: { api_key: constant_1.TMDB_V3_API_KEY, append_to_response: "videos" }
                });
            }
        }),
        getSimilarVideos: build.query({
            query: function (_a) {
                var mediaType = _a.mediaType, id = _a.id;
                return ({
                    url: "/".concat(mediaType, "/").concat(id, "/similar"),
                    params: { api_key: constant_1.TMDB_V3_API_KEY }
                });
            }
        })
    }); }
});
exports.useGetVideosByMediaTypeAndGenreIdQuery = extendedApi.useGetVideosByMediaTypeAndGenreIdQuery, exports.useLazyGetVideosByMediaTypeAndGenreIdQuery = extendedApi.useLazyGetVideosByMediaTypeAndGenreIdQuery, exports.useGetVideosByMediaTypeAndCustomGenreQuery = extendedApi.useGetVideosByMediaTypeAndCustomGenreQuery, exports.useLazyGetVideosByMediaTypeAndCustomGenreQuery = extendedApi.useLazyGetVideosByMediaTypeAndCustomGenreQuery, exports.useGetAppendedVideosQuery = extendedApi.useGetAppendedVideosQuery, exports.useLazyGetAppendedVideosQuery = extendedApi.useLazyGetAppendedVideosQuery, exports.useGetSimilarVideosQuery = extendedApi.useGetSimilarVideosQuery, exports.useLazyGetSimilarVideosQuery = extendedApi.useLazyGetSimilarVideosQuery;

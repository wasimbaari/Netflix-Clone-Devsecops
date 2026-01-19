"use strict";
exports.__esModule = true;
exports.INITIAL_DETAIL_STATE = exports.APP_BAR_HEIGHT = exports.YOUTUBE_URL = exports.COMMON_TITLES = exports.ARROW_MAX_WIDTH = exports.MAIN_PATH = exports.TMDB_V3_API_KEY = exports.API_ENDPOINT_URL = void 0;
exports.API_ENDPOINT_URL = import.meta.env.VITE_APP_API_ENDPOINT_URL;
exports.TMDB_V3_API_KEY = import.meta.env.VITE_APP_TMDB_V3_API_KEY;
exports.MAIN_PATH = {
    root: "",
    browse: "browse",
    genreExplore: "genre",
    watch: "watch"
};
exports.ARROW_MAX_WIDTH = 60;
exports.COMMON_TITLES = [
    { name: "Popular", apiString: "popular" },
    { name: "Top Rated", apiString: "top_rated" },
    { name: "Now Playing", apiString: "now_playing" },
    { name: "Upcoming", apiString: "upcoming" },
];
exports.YOUTUBE_URL = "https://www.youtube.com/watch?v=";
exports.APP_BAR_HEIGHT = 70;
exports.INITIAL_DETAIL_STATE = {
    id: undefined,
    mediaType: undefined,
    mediaDetail: undefined
};

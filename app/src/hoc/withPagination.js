"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MainLoadingScreen_1 = require("src/components/MainLoadingScreen");
var redux_1 = require("src/hooks/redux");
var discover_1 = require("src/store/slices/discover");
function withPagination(Component, mediaType, genre) {
    return function WithPagination() {
        var _a;
        var dispatch = (0, redux_1.useAppDispatch)();
        var itemKey = (_a = genre.id) !== null && _a !== void 0 ? _a : genre.apiString;
        var mediaState = (0, redux_1.useAppSelector)(function (state) { return state.discover[mediaType]; });
        var pageState = mediaState ? mediaState[itemKey] : undefined;
        var getVideosByMediaTypeAndGenreId = (0, discover_1.useLazyGetVideosByMediaTypeAndGenreIdQuery)()[0];
        var getVideosByMediaTypeAndCustomGenre = (0, discover_1.useLazyGetVideosByMediaTypeAndCustomGenreQuery)()[0];
        (0, react_1.useEffect)(function () {
            if (!mediaState || !pageState) {
                dispatch((0, discover_1.initiateItem)({ mediaType: mediaType, itemKey: itemKey }));
            }
        }, [mediaState, pageState]);
        (0, react_1.useEffect)(function () {
            if (pageState && pageState.page === 0) {
                handleNext(pageState.page + 1);
            }
        }, [pageState]);
        var handleNext = (0, react_1.useCallback)(function (page) {
            if (genre.id) {
                getVideosByMediaTypeAndGenreId({
                    mediaType: mediaType,
                    genreId: genre.id,
                    page: page
                });
            }
            else {
                getVideosByMediaTypeAndCustomGenre({
                    mediaType: mediaType,
                    apiString: genre.apiString,
                    page: page
                });
            }
            // dispatch(setNextPage({ mediaType, itemKey }));
        }, []);
        if (pageState) {
            return (<Component genre={genre} data={pageState} handleNext={handleNext}/>);
        }
        return <MainLoadingScreen_1["default"] />;
    };
}
exports["default"] = withPagination;

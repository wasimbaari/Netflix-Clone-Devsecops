"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var Stack_1 = require("@mui/material/Stack");
var VolumeUp_1 = require("@mui/icons-material/VolumeUp");
var VolumeOff_1 = require("@mui/icons-material/VolumeOff");
var common_1 = require("src/utils/common");
var MaxLineTypography_1 = require("./MaxLineTypography");
var PlayButton_1 = require("./PlayButton");
var MoreInfoButton_1 = require("./MoreInfoButton");
var NetflixIconButton_1 = require("./NetflixIconButton");
var MaturityRate_1 = require("./MaturityRate");
var useOffSetTop_1 = require("src/hooks/useOffSetTop");
var DetailModalProvider_1 = require("src/providers/DetailModalProvider");
var discover_1 = require("src/store/slices/discover");
var VideoJSPlayer_1 = require("./watch/VideoJSPlayer");
function TopTrailer(_a) {
    var _b;
    var mediaType = _a.mediaType;
    var data = (0, discover_1.useGetVideosByMediaTypeAndCustomGenreQuery)({
        mediaType: mediaType,
        apiString: "popular",
        page: 1
    }).data;
    var _c = (0, discover_1.useLazyGetAppendedVideosQuery)(), getVideoDetail = _c[0], detail = _c[1].data;
    var _d = (0, react_1.useState)(null), video = _d[0], setVideo = _d[1];
    var _e = (0, react_1.useState)(true), muted = _e[0], setMuted = _e[1];
    var playerRef = (0, react_1.useRef)(null);
    var isOffset = (0, useOffSetTop_1["default"])(window.innerWidth * 0.5625);
    var setDetailType = (0, DetailModalProvider_1.useDetailModal)().setDetailType;
    var maturityRate = (0, react_1.useMemo)(function () {
        return (0, common_1.getRandomNumber)(20);
    }, []);
    var handleReady = (0, react_1.useCallback)(function (player) {
        playerRef.current = player;
    }, []);
    (0, react_1.useEffect)(function () {
        if (playerRef.current) {
            if (isOffset) {
                playerRef.current.pause();
            }
            else {
                if (playerRef.current.paused()) {
                    playerRef.current.play();
                }
            }
        }
    }, [isOffset]);
    (0, react_1.useEffect)(function () {
        if (data && data.results) {
            var videos = data.results.filter(function (item) { return !!item.backdrop_path; });
            setVideo(videos[(0, common_1.getRandomNumber)(videos.length)]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    (0, react_1.useEffect)(function () {
        if (video) {
            getVideoDetail({ mediaType: mediaType, id: video.id });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video]);
    var handleMute = (0, react_1.useCallback)(function (status) {
        if (playerRef.current) {
            playerRef.current.muted(!status);
            setMuted(!status);
        }
    }, []);
    return (<Box_1["default"] sx={{ position: "relative", zIndex: 1 }}>
      <Box_1["default"] sx={{
            mb: 3,
            pb: "40%",
            top: 0,
            left: 0,
            right: 0,
            position: "relative"
        }}>
        <Box_1["default"] sx={{
            width: "100%",
            height: "56.25vw",
            position: "absolute"
        }}>
          {video && (<>
              <Box_1["default"] sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute"
            }}>
                {detail && (<VideoJSPlayer_1["default"] options={{
                    loop: true,
                    muted: true,
                    autoplay: true,
                    controls: false,
                    responsive: true,
                    fluid: true,
                    techOrder: ["youtube"],
                    sources: [
                        {
                            type: "video/youtube",
                            src: "https://www.youtube.com/watch?v=".concat(((_b = detail.videos.results[0]) === null || _b === void 0 ? void 0 : _b.key) || "L3oOldViIgY")
                        },
                    ]
                }} onReady={handleReady}/>)}
                <Box_1["default"] sx={{
                background: "linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)",
                top: 0,
                left: 0,
                bottom: 0,
                right: "26.09%",
                opacity: 1,
                position: "absolute",
                transition: "opacity .5s"
            }}/>
                <Box_1["default"] sx={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "0px top",
                backgroundSize: "100% 100%",
                bottom: 0,
                position: "absolute",
                height: "14.7vw",
                opacity: 1,
                top: "auto",
                width: "100%"
            }}/>
                <Stack_1["default"] direction="row" spacing={2} sx={{
                alignItems: "center",
                position: "absolute",
                right: 0,
                bottom: "35%"
            }}>
                  <NetflixIconButton_1["default"] size="large" onClick={function () { return handleMute(muted); }} sx={{ zIndex: 2 }}>
                    {!muted ? <VolumeUp_1["default"] /> : <VolumeOff_1["default"] />}
                  </NetflixIconButton_1["default"]>
                  <MaturityRate_1["default"]>{"".concat(maturityRate, "+")}</MaturityRate_1["default"]>
                </Stack_1["default"]>
              </Box_1["default"]>

              <Box_1["default"] sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%"
            }}>
                <Stack_1["default"] spacing={4} sx={{
                bottom: "35%",
                position: "absolute",
                left: { xs: "4%", md: "60px" },
                top: 0,
                width: "36%",
                zIndex: 10,
                justifyContent: "flex-end"
            }}>
                  <MaxLineTypography_1["default"] variant="h2" maxLine={1} color="text.primary">
                    {video.title}
                  </MaxLineTypography_1["default"]>
                  <MaxLineTypography_1["default"] variant="h5" maxLine={3} color="text.primary">
                    {video.overview}
                  </MaxLineTypography_1["default"]>
                  <Stack_1["default"] direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <PlayButton_1["default"] size="large"/>
                    <MoreInfoButton_1["default"] size="large" onClick={function () {
                setDetailType({ mediaType: mediaType, id: video.id });
            }}/>
                  </Stack_1["default"]>
                </Stack_1["default"]>
              </Box_1["default"]>
            </>)}
        </Box_1["default"]>
      </Box_1["default"]>
    </Box_1["default"]>);
}
exports["default"] = TopTrailer;

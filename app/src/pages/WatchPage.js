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
exports.__esModule = true;
exports.Component = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var PlayArrow_1 = require("@mui/icons-material/PlayArrow");
var Pause_1 = require("@mui/icons-material/Pause");
var SkipNext_1 = require("@mui/icons-material/SkipNext");
var Fullscreen_1 = require("@mui/icons-material/Fullscreen");
var Settings_1 = require("@mui/icons-material/Settings");
var BrandingWatermarkOutlined_1 = require("@mui/icons-material/BrandingWatermarkOutlined");
var KeyboardBackspace_1 = require("@mui/icons-material/KeyboardBackspace");
var useWindowSize_1 = require("src/hooks/useWindowSize");
var common_1 = require("src/utils/common");
var MaxLineTypography_1 = require("src/components/MaxLineTypography");
var VolumeControllers_1 = require("src/components/watch/VolumeControllers");
var VideoJSPlayer_1 = require("src/components/watch/VideoJSPlayer");
var PlayerSeekbar_1 = require("src/components/watch/PlayerSeekbar");
var PlayerControlButton_1 = require("src/components/watch/PlayerControlButton");
function Component() {
    var playerRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)({
        paused: false,
        muted: false,
        playedSeconds: 0,
        duration: 0,
        volume: 0.8,
        loaded: 0
    }), playerState = _a[0], setPlayerState = _a[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)(false), playerInitialized = _b[0], setPlayerInitialized = _b[1];
    var windowSize = (0, useWindowSize_1["default"])();
    var videoJsOptions = (0, react_1.useMemo)(function () {
        return {
            preload: "metadata",
            autoplay: true,
            controls: false,
            // responsive: true,
            // fluid: true,
            width: windowSize.width,
            height: windowSize.height,
            sources: [
                {
                    // src: videoData?.video,
                    // src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
                    src: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
                    type: "application/x-mpegurl"
                },
            ]
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize]);
    var handlePlayerReady = function (player) {
        player.on("pause", function () {
            setPlayerState(function (draft) {
                return __assign(__assign({}, draft), { paused: true });
            });
        });
        player.on("play", function () {
            setPlayerState(function (draft) {
                return __assign(__assign({}, draft), { paused: false });
            });
        });
        player.on("timeupdate", function () {
            setPlayerState(function (draft) {
                return __assign(__assign({}, draft), { playedSeconds: player.currentTime() });
            });
        });
        player.one("durationchange", function () {
            setPlayerInitialized(true);
            setPlayerState(function (draft) { return (__assign(__assign({}, draft), { duration: player.duration() })); });
        });
        playerRef.current = player;
        setPlayerState(function (draft) {
            return __assign(__assign({}, draft), { paused: player.paused() });
        });
    };
    var handleVolumeChange = function (_, value) {
        var _a;
        (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.volume(value / 100);
        setPlayerState(function (draft) {
            return __assign(__assign({}, draft), { volume: value / 100 });
        });
    };
    var handleSeekTo = function (v) {
        var _a;
        (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.currentTime(v);
    };
    var handleGoBack = function () {
        navigate("/browse");
    };
    if (!!videoJsOptions.width) {
        return (<material_1.Box sx={{
                position: "relative"
            }}>
        <VideoJSPlayer_1["default"] options={videoJsOptions} onReady={handlePlayerReady}/>
        {playerRef.current && playerInitialized && (<material_1.Box sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "absolute"
                }}>
            <material_1.Box px={2} sx={{ position: "absolute", top: 75 }}>
              <PlayerControlButton_1["default"] onClick={handleGoBack}>
                <KeyboardBackspace_1["default"] />
              </PlayerControlButton_1["default"]>
            </material_1.Box>
            <material_1.Box px={2} sx={{
                    position: "absolute",
                    top: { xs: "40%", sm: "55%", md: "60%" },
                    left: 0
                }}>
              <material_1.Typography variant="h3" sx={{
                    fontWeight: 700,
                    color: "white"
                }}>
                Title
              </material_1.Typography>
            </material_1.Box>
            <material_1.Box px={{ xs: 0, sm: 1, md: 2 }} sx={{
                    position: "absolute",
                    top: { xs: "50%", sm: "60%", md: "70%" },
                    right: 0
                }}>
              <material_1.Typography variant="subtitle2" sx={{
                    px: 1,
                    py: 0.5,
                    fontWeight: 700,
                    color: "white",
                    bgcolor: "red",
                    borderRadius: "12px 0px 0px 12px"
                }}>
                12+
              </material_1.Typography>
            </material_1.Box>

            <material_1.Box px={{ xs: 1, sm: 2 }} sx={{ position: "absolute", bottom: 20, left: 0, right: 0 }}>
              {/* Seekbar */}
              <material_1.Stack direction="row" alignItems="center" spacing={1}>
                <PlayerSeekbar_1["default"] playedSeconds={playerState.playedSeconds} duration={playerState.duration} seekTo={handleSeekTo}/>
              </material_1.Stack>
              {/* end Seekbar */}

              {/* Controller */}
              <material_1.Stack direction="row" alignItems="center">
                {/* left controller */}
                <material_1.Stack direction="row" spacing={{ xs: 0.5, sm: 1.5, md: 2 }} alignItems="center">
                  {!playerState.paused ? (<PlayerControlButton_1["default"] onClick={function () {
                        var _a;
                        (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.pause();
                    }}>
                      <Pause_1["default"] />
                    </PlayerControlButton_1["default"]>) : (<PlayerControlButton_1["default"] onClick={function () {
                        var _a;
                        (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.play();
                    }}>
                      <PlayArrow_1["default"] />
                    </PlayerControlButton_1["default"]>)}
                  <PlayerControlButton_1["default"]>
                    <SkipNext_1["default"] />
                  </PlayerControlButton_1["default"]>
                  <VolumeControllers_1["default"] muted={playerState.muted} handleVolumeToggle={function () {
                    var _a;
                    (_a = playerRef.current) === null || _a === void 0 ? void 0 : _a.muted(!playerState.muted);
                    setPlayerState(function (draft) {
                        return __assign(__assign({}, draft), { muted: !draft.muted });
                    });
                }} value={playerState.volume} handleVolume={handleVolumeChange}/>
                  <material_1.Typography variant="caption" sx={{ color: "white" }}>
                    {"".concat((0, common_1.formatTime)(playerState.playedSeconds), " / ").concat((0, common_1.formatTime)(playerState.duration))}
                  </material_1.Typography>
                </material_1.Stack>
                {/* end left controller */}

                {/* middle time */}
                <material_1.Box flexGrow={1}>
                  <MaxLineTypography_1["default"] maxLine={1} variant="subtitle1" textAlign="center" sx={{ maxWidth: 300, mx: "auto", color: "white" }}>
                    Description
                  </MaxLineTypography_1["default"]>
                </material_1.Box>
                {/* end middle time */}

                {/* right controller */}
                <material_1.Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5, md: 2 }}>
                  <PlayerControlButton_1["default"]>
                    <Settings_1["default"] />
                  </PlayerControlButton_1["default"]>
                  <PlayerControlButton_1["default"]>
                    <BrandingWatermarkOutlined_1["default"] />
                  </PlayerControlButton_1["default"]>
                  <PlayerControlButton_1["default"]>
                    <Fullscreen_1["default"] />
                  </PlayerControlButton_1["default"]>
                </material_1.Stack>
                {/* end right controller */}
              </material_1.Stack>
              {/* end Controller */}
            </material_1.Box>
          </material_1.Box>)}
      </material_1.Box>);
    }
    return null;
}
exports.Component = Component;
Component.displayName = "WatchPage";

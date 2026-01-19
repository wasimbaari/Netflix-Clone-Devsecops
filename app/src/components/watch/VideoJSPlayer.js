"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var video_js_1 = require("video.js");
require("videojs-youtube");
require("video.js/dist/video-js.css");
function VideoJSPlayer(_a) {
    var options = _a.options, onReady = _a.onReady;
    var videoRef = (0, react_1.useRef)(null);
    var playerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        (function handleVideojs() {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var videoElement, player_1, player;
                return __generator(this, function (_b) {
                    // Make sure Video.js player is only initialized once
                    if (!playerRef.current) {
                        videoElement = document.createElement("video-js");
                        // videoElement.classList.add("vjs-big-play-centered", "vjs-16-9");
                        (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(videoElement);
                        player_1 = (playerRef.current = (0, video_js_1["default"])(videoElement, options, function () {
                            onReady && onReady(player_1);
                        }));
                        // import("video.js").then(async ({ default: videojs }) => {
                        //   await import("video.js/dist/video-js.css");
                        //   if (options["techOrder"] && options["techOrder"].includes("youtube")) {
                        //     // eslint-disable-next-line
                        //     await import("videojs-youtube");
                        //   }
                        //   const player = (playerRef.current = videojs(
                        //     videoElement,
                        //     options,
                        //     () => {
                        //       onReady && onReady(player);
                        //     }
                        //   ));
                        // });
                        // await import("video.js/dist/video-js.css");
                        // const videojs = await import("video.js");
                        // if (options["techOrder"] && options["techOrder"].includes("youtube")) {
                        //   // eslint-disable-next-line
                        //   await import("videojs-youtube");
                        // }
                        // const player = (playerRef.current = videojs.default(
                        //   videoElement,
                        //   options,
                        //   () => {
                        //     onReady && onReady(player);
                        //   }
                        // ));
                        // You could update an existing player in the `else` block here
                        // on prop change, for example:
                    }
                    else {
                        player = playerRef.current;
                        // player.autoplay(options.autoplay);
                        player.width(options.width);
                        player.height(options.height);
                    }
                    return [2 /*return*/];
                });
            });
        })();
    }, [options, videoRef]);
    // Dispose the Video.js player when the functional component unmounts
    (0, react_1.useEffect)(function () {
        var player = playerRef.current;
        return function () {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);
    return (<div data-vjs-player>
      <div ref={videoRef}/>
    </div>);
}
exports["default"] = VideoJSPlayer;

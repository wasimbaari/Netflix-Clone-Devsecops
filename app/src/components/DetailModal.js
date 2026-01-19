"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var Container_1 = require("@mui/material/Container");
var Stack_1 = require("@mui/material/Stack");
var IconButton_1 = require("@mui/material/IconButton");
var Typography_1 = require("@mui/material/Typography");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var Slide_1 = require("@mui/material/Slide");
var Close_1 = require("@mui/icons-material/Close");
var Add_1 = require("@mui/icons-material/Add");
var ThumbUpOffAlt_1 = require("@mui/icons-material/ThumbUpOffAlt");
var VolumeUp_1 = require("@mui/icons-material/VolumeUp");
var VolumeOff_1 = require("@mui/icons-material/VolumeOff");
var MaxLineTypography_1 = require("./MaxLineTypography");
var PlayButton_1 = require("./PlayButton");
var NetflixIconButton_1 = require("./NetflixIconButton");
var AgeLimitChip_1 = require("./AgeLimitChip");
var QualityChip_1 = require("./QualityChip");
var common_1 = require("src/utils/common");
var SimilarVideoCard_1 = require("./SimilarVideoCard");
var DetailModalProvider_1 = require("src/providers/DetailModalProvider");
var discover_1 = require("src/store/slices/discover");
var Common_1 = require("src/types/Common");
var VideoJSPlayer_1 = require("./watch/VideoJSPlayer");
var Transition = (0, react_1.forwardRef)(function Transition(props, ref) {
    return <Slide_1["default"] direction="up" ref={ref} {...props}/>;
});
function DetailModal() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = (0, DetailModalProvider_1.useDetailModal)(), detail = _k.detail, setDetailType = _k.setDetailType;
    var similarVideos = (0, discover_1.useGetSimilarVideosQuery)({ mediaType: (_a = detail.mediaType) !== null && _a !== void 0 ? _a : Common_1.MEDIA_TYPE.Movie, id: (_b = detail.id) !== null && _b !== void 0 ? _b : 0 }, { skip: !detail.id }).data;
    var playerRef = (0, react_1.useRef)(null);
    var _l = (0, react_1.useState)(true), muted = _l[0], setMuted = _l[1];
    var handleReady = (0, react_1.useCallback)(function (player) {
        playerRef.current = player;
        setMuted(player.muted());
    }, []);
    var handleMute = (0, react_1.useCallback)(function (status) {
        if (playerRef.current) {
            playerRef.current.muted(!status);
            setMuted(!status);
        }
    }, []);
    if (detail.mediaDetail) {
        return (<Dialog_1["default"] fullWidth scroll="body" maxWidth="md" open={!!detail.mediaDetail} id="detail_dialog" TransitionComponent={Transition}>
        <DialogContent_1["default"] sx={{ p: 0, bgcolor: "#181818" }}>
          <Box_1["default"] sx={{
                top: 0,
                left: 0,
                right: 0,
                position: "relative",
                mb: 3
            }}>
            <Box_1["default"] sx={{
                width: "100%",
                position: "relative",
                height: "calc(9 / 16 * 100%)"
            }}>
              <VideoJSPlayer_1["default"] options={{
                loop: true,
                autoplay: true,
                controls: false,
                responsive: true,
                fluid: true,
                techOrder: ["youtube"],
                sources: [
                    {
                        type: "video/youtube",
                        src: "https://www.youtube.com/watch?v=".concat(((_d = (_c = detail.mediaDetail) === null || _c === void 0 ? void 0 : _c.videos.results[0]) === null || _d === void 0 ? void 0 : _d.key) ||
                            "L3oOldViIgY")
                    },
                ]
            }} onReady={handleReady}/>

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
              <IconButton_1["default"] onClick={function () {
                setDetailType({ mediaType: undefined, id: undefined });
            }} sx={{
                top: 15,
                right: 15,
                position: "absolute",
                bgcolor: "#181818",
                width: { xs: 22, sm: 40 },
                height: { xs: 22, sm: 40 },
                "&:hover": {
                    bgcolor: "primary.main"
                }
            }}>
                <Close_1["default"] sx={{ color: "white", fontSize: { xs: 14, sm: 22 } }}/>
              </IconButton_1["default"]>
              <Box_1["default"] sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 16,
                px: { xs: 2, sm: 3, md: 5 }
            }}>
                <MaxLineTypography_1["default"] variant="h4" maxLine={1} sx={{ mb: 2 }}>
                  {(_e = detail.mediaDetail) === null || _e === void 0 ? void 0 : _e.title}
                </MaxLineTypography_1["default"]>
                <Stack_1["default"] direction="row" spacing={2} sx={{ mb: 3 }}>
                  <PlayButton_1["default"] sx={{ color: "black", py: 0 }}/>
                  <NetflixIconButton_1["default"]>
                    <Add_1["default"] />
                  </NetflixIconButton_1["default"]>
                  <NetflixIconButton_1["default"]>
                    <ThumbUpOffAlt_1["default"] />
                  </NetflixIconButton_1["default"]>
                  <Box_1["default"] flexGrow={1}/>
                  <NetflixIconButton_1["default"] size="large" onClick={function () { return handleMute(muted); }} sx={{ zIndex: 2 }}>
                    {!muted ? <VolumeUp_1["default"] /> : <VolumeOff_1["default"] />}
                  </NetflixIconButton_1["default"]>
                </Stack_1["default"]>

                <Container_1["default"] sx={{
                p: "0px !important"
            }}>
                  <Grid_1["default"] container spacing={5} alignItems="center">
                    <Grid_1["default"] item xs={12} sm={6} md={8}>
                      <Stack_1["default"] direction="row" spacing={1} alignItems="center">
                        <Typography_1["default"] variant="subtitle1" sx={{ color: "success.main" }}>{"".concat((0, common_1.getRandomNumber)(100), "% Match")}</Typography_1["default"]>
                        <Typography_1["default"] variant="body2">
                          {(_f = detail.mediaDetail) === null || _f === void 0 ? void 0 : _f.release_date.substring(0, 4)}
                        </Typography_1["default"]>
                        <AgeLimitChip_1["default"] label={"".concat((0, common_1.getRandomNumber)(20), "+")}/>
                        <Typography_1["default"] variant="subtitle2">{"".concat((0, common_1.formatMinuteToReadable)((0, common_1.getRandomNumber)(180)))}</Typography_1["default"]>
                        <QualityChip_1["default"] label="HD"/>
                      </Stack_1["default"]>

                      <MaxLineTypography_1["default"] maxLine={3} variant="body1" sx={{ mt: 2 }}>
                        {(_g = detail.mediaDetail) === null || _g === void 0 ? void 0 : _g.overview}
                      </MaxLineTypography_1["default"]>
                    </Grid_1["default"]>
                    <Grid_1["default"] item xs={12} sm={6} md={4}>
                      <Typography_1["default"] variant="body2" sx={{ my: 1 }}>
                        {"Genres : ".concat((_h = detail.mediaDetail) === null || _h === void 0 ? void 0 : _h.genres.map(function (g) { return g.name; }).join(", "))}
                      </Typography_1["default"]>
                      <Typography_1["default"] variant="body2" sx={{ my: 1 }}>
                        {"Available in : ".concat((_j = detail.mediaDetail) === null || _j === void 0 ? void 0 : _j.spoken_languages.map(function (l) { return l.name; }).join(", "))}
                      </Typography_1["default"]>
                    </Grid_1["default"]>
                  </Grid_1["default"]>
                </Container_1["default"]>
              </Box_1["default"]>
            </Box_1["default"]>
            {similarVideos && similarVideos.results.length > 0 && (<Container_1["default"] sx={{
                    py: 2,
                    px: { xs: 2, sm: 3, md: 5 }
                }}>
                <Typography_1["default"] variant="h6" sx={{ mb: 2 }}>
                  More Like This
                </Typography_1["default"]>
                <Grid_1["default"] container spacing={2}>
                  {similarVideos.results.map(function (sm) { return (<Grid_1["default"] item xs={6} sm={4} key={sm.id}>
                      <SimilarVideoCard_1["default"] video={sm}/>
                    </Grid_1["default"]>); })}
                </Grid_1["default"]>
              </Container_1["default"]>)}
          </Box_1["default"]>
        </DialogContent_1["default"]>
      </Dialog_1["default"]>);
    }
    return null;
}
exports["default"] = DetailModal;

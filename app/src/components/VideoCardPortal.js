"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Stack_1 = require("@mui/material/Stack");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Typography_1 = require("@mui/material/Typography");
var VolumeUp_1 = require("@mui/icons-material/VolumeUp");
var PlayCircle_1 = require("@mui/icons-material/PlayCircle");
var ThumbUpOffAlt_1 = require("@mui/icons-material/ThumbUpOffAlt");
var Add_1 = require("@mui/icons-material/Add");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
var PortalProvider_1 = require("src/providers/PortalProvider");
var DetailModalProvider_1 = require("src/providers/DetailModalProvider");
var common_1 = require("src/utils/common");
var NetflixIconButton_1 = require("./NetflixIconButton");
var MaxLineTypography_1 = require("./MaxLineTypography");
var AgeLimitChip_1 = require("./AgeLimitChip");
var QualityChip_1 = require("./QualityChip");
var GenreBreadcrumbs_1 = require("./GenreBreadcrumbs");
var configuration_1 = require("src/store/slices/configuration");
var Common_1 = require("src/types/Common");
var genre_1 = require("src/store/slices/genre");
var constant_1 = require("src/constant");
function VideoCardModal(_a) {
    var video = _a.video, anchorElement = _a.anchorElement;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var configuration = (0, configuration_1.useGetConfigurationQuery)(undefined).data;
    var genres = (0, genre_1.useGetGenresQuery)(Common_1.MEDIA_TYPE.Movie).data;
    var setPortal = (0, PortalProvider_1.usePortal)();
    var rect = anchorElement.getBoundingClientRect();
    var setDetailType = (0, DetailModalProvider_1.useDetailModal)().setDetailType;
    return (<Card_1["default"] onPointerLeave={function () {
            setPortal(null, null);
        }} sx={{
            width: rect.width * 1.5,
            height: "100%"
        }}>
      <div style={{
            width: "100%",
            position: "relative",
            paddingTop: "calc(9 / 16 * 100%)"
        }}>
        <img src={"".concat(configuration === null || configuration === void 0 ? void 0 : configuration.images.base_url, "w780").concat(video.backdrop_path)} style={{
            top: 0,
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            backgroundPosition: "50%"
        }}/>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            left: 0,
            right: 0,
            bottom: 0,
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "4px",
            position: "absolute"
        }}>
          <MaxLineTypography_1["default"] maxLine={2} sx={{ width: "80%", fontWeight: 700 }} variant="h6">
            {video.title}
          </MaxLineTypography_1["default"]>
          <div style={{ flexGrow: 1 }}/>
          <NetflixIconButton_1["default"]>
            <VolumeUp_1["default"] />
          </NetflixIconButton_1["default"]>
        </div>
      </div>
      <CardContent_1["default"]>
        <Stack_1["default"] spacing={1}>
          <Stack_1["default"] direction="row" spacing={1}>
            <NetflixIconButton_1["default"] sx={{ p: 0 }} onClick={function () { return navigate("/".concat(constant_1.MAIN_PATH.watch)); }}>
              <PlayCircle_1["default"] sx={{ width: 40, height: 40 }}/>
            </NetflixIconButton_1["default"]>
            <NetflixIconButton_1["default"]>
              <Add_1["default"] />
            </NetflixIconButton_1["default"]>
            <NetflixIconButton_1["default"]>
              <ThumbUpOffAlt_1["default"] />
            </NetflixIconButton_1["default"]>
            <div style={{ flexGrow: 1 }}/>
            <NetflixIconButton_1["default"] onClick={function () {
            setDetailType({ mediaType: Common_1.MEDIA_TYPE.Movie, id: video.id });
        }}>
              <ExpandMore_1["default"] />
            </NetflixIconButton_1["default"]>
          </Stack_1["default"]>
          <Stack_1["default"] direction="row" spacing={1} alignItems="center">
            <Typography_1["default"] variant="subtitle1" sx={{ color: "success.main" }}>{"".concat((0, common_1.getRandomNumber)(100), "% Match")}</Typography_1["default"]>
            <AgeLimitChip_1["default"] label={"".concat((0, common_1.getRandomNumber)(20), "+")}/>
            <Typography_1["default"] variant="subtitle2">{"".concat((0, common_1.formatMinuteToReadable)((0, common_1.getRandomNumber)(180)))}</Typography_1["default"]>
            <QualityChip_1["default"] label="HD"/>
          </Stack_1["default"]>
          {genres && (<GenreBreadcrumbs_1["default"] genres={genres
                .filter(function (genre) { return video.genre_ids.includes(genre.id); })
                .map(function (genre) { return genre.name; })}/>)}
        </Stack_1["default"]>
      </CardContent_1["default"]>
    </Card_1["default"]>);
}
exports["default"] = VideoCardModal;

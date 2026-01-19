"use strict";
exports.__esModule = true;
var Stack_1 = require("@mui/material/Stack");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Typography_1 = require("@mui/material/Typography");
var Add_1 = require("@mui/icons-material/Add");
var NetflixIconButton_1 = require("./NetflixIconButton");
var MaxLineTypography_1 = require("./MaxLineTypography");
var common_1 = require("src/utils/common");
var AgeLimitChip_1 = require("./AgeLimitChip");
var configuration_1 = require("src/store/slices/configuration");
function SimilarVideoCard(_a) {
    var video = _a.video;
    var configuration = (0, configuration_1.useGetConfigurationQuery)(undefined).data;
    return (<Card_1["default"]>
      <div style={{
            width: "100%",
            position: "relative",
            paddingTop: "calc(9 / 16 * 100%)"
        }}>
        <img src={"".concat(configuration === null || configuration === void 0 ? void 0 : configuration.images.base_url, "w780").concat(video.backdrop_path)} style={{
            top: 0,
            height: "100%",
            position: "absolute"
        }}/>
        <div style={{
            top: 10,
            right: 15,
            position: "absolute"
        }}>
          <Typography_1["default"] variant="subtitle2">{"".concat((0, common_1.formatMinuteToReadable)((0, common_1.getRandomNumber)(180)))}</Typography_1["default"]>
        </div>
        <div style={{
            left: 0,
            right: 0,
            bottom: 0,
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "4px",
            position: "absolute"
        }}>
          <MaxLineTypography_1["default"] maxLine={1} sx={{ width: "80%", fontWeight: 700 }} variant="subtitle1">
            {video.title}
          </MaxLineTypography_1["default"]>
        </div>
      </div>
      <CardContent_1["default"]>
        <Stack_1["default"] spacing={1}>
          <Stack_1["default"] direction="row" alignItems="center">
            <div>
              <Typography_1["default"] variant="subtitle2" sx={{ color: "success.main" }}>{"".concat((0, common_1.getRandomNumber)(100), "% Match")}</Typography_1["default"]>
              <Stack_1["default"] direction="row" spacing={1} alignItems="center">
                <AgeLimitChip_1["default"] label={"".concat((0, common_1.getRandomNumber)(20), "+")}/>
                <Typography_1["default"] variant="body2">
                  {video.release_date.substring(0, 4)}
                </Typography_1["default"]>
              </Stack_1["default"]>
            </div>
            <div style={{ flexGrow: 1 }}/>
            <NetflixIconButton_1["default"]>
              <Add_1["default"] />
            </NetflixIconButton_1["default"]>
          </Stack_1["default"]>
          <MaxLineTypography_1["default"] maxLine={4} variant="subtitle2">
            {video.overview}
          </MaxLineTypography_1["default"]>
        </Stack_1["default"]>
      </CardContent_1["default"]>
    </Card_1["default"]>);
}
exports["default"] = SimilarVideoCard;

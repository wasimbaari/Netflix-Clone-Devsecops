"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var Slider_1 = require("@mui/material/Slider");
var styles_1 = require("@mui/material/styles");
var VolumeUp_1 = require("@mui/icons-material/VolumeUp");
var VolumeOff_1 = require("@mui/icons-material/VolumeOff");
var PlayerControlButton_1 = require("./PlayerControlButton");
var StyledSlider = (0, styles_1.styled)(Slider_1["default"])({
    height: 5,
    borderRadius: 0,
    padding: 0,
    "& .NetflixSlider-track": {
        border: "none",
        backgroundColor: "red"
    },
    "& .NetflixSlider-rail": {
        border: "none",
        backgroundColor: "white",
        opacity: 0.85
    },
    "& .NetflixSlider-thumb": {
        height: 10,
        width: 10,
        backgroundColor: "red",
        "&:focus, &:hover, &.Netflix-active, &.Netflix-focusVisible": {
            boxShadow: "inherit",
            height: 15,
            width: 15
        },
        "&:before": {
            display: "none"
        }
    }
});
function VolumeControllers(_a) {
    var value = _a.value, handleVolume = _a.handleVolume, handleVolumeToggle = _a.handleVolumeToggle, muted = _a.muted;
    return (<material_1.Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
      <PlayerControlButton_1["default"] onClick={handleVolumeToggle}>
        {!muted ? <VolumeUp_1["default"] /> : <VolumeOff_1["default"] />}
      </PlayerControlButton_1["default"]>
      <StyledSlider max={100} value={value * 100} valueLabelDisplay="auto" valueLabelFormat={function (x) { return x; }} onChange={handleVolume} sx={{ width: { xs: 60, sm: 80, md: 100 } }}/>
    </material_1.Stack>);
}
exports["default"] = VolumeControllers;

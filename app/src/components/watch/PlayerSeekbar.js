"use strict";
exports.__esModule = true;
var Slider_1 = require("@mui/material/Slider");
var styles_1 = require("@mui/material/styles");
var common_1 = require("src/utils/common");
var StyledSlider = (0, styles_1.styled)(Slider_1["default"])({
    borderRadius: 0,
    "& .NetflixSlider-track": {
        backgroundColor: "red !important",
        border: 0
    },
    "& .NetflixSlider-rail": {
        border: "none",
        backgroundColor: "white !important",
        opacity: 0.85
    },
    "& .NetflixSlider-thumb": {
        borderRadius: "50%",
        height: 10,
        width: 10,
        backgroundColor: "red",
        "&:focus, &:hover, &.Netflix-active, &.Netflix-focusVisible": {
            boxShadow: "inherit",
            height: 15,
            width: 15
        },
        "&:before": {
            display: "none",
            boxShadow: "0 2px 2px 0 #fff",
            height: 10,
            width: 10
        }
    }
});
function PlayerSeekbar(_a) {
    var playedSeconds = _a.playedSeconds, duration = _a.duration, seekTo = _a.seekTo;
    return (<StyledSlider valueLabelDisplay="auto" valueLabelFormat={function (v) { return (0, common_1.formatTime)(v); }} 
    // components={{
    //   ValueLabel: ValueLabelComponent,
    // }}
    value={playedSeconds} max={duration} onChange={function (_, value) {
            seekTo(value);
        }}/>);
}
exports["default"] = PlayerSeekbar;

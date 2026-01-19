"use strict";
exports.__esModule = true;
var CircularProgress_1 = require("@mui/material/CircularProgress");
function MainLoadingScreen() {
    return (<div style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            backgroundColor: "#141414",
            opacity: 0.75,
            zIndex: 2
        }}>
      <CircularProgress_1["default"] sx={{ color: "white" }}/>
    </div>);
}
exports["default"] = MainLoadingScreen;

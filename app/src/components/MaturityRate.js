"use strict";
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
function MaturityRate(_a) {
    var children = _a.children;
    return (<Box_1["default"] sx={{
            py: 1,
            pl: 1.5,
            pr: 3,
            fontSize: 22,
            display: "flex",
            alignItem: "center",
            color: "text.primary",
            border: "3px #dcdcdc",
            borderLeftStyle: "solid",
            bgcolor: "#33333399"
        }}>
      {children}
    </Box_1["default"]>);
}
exports["default"] = MaturityRate;

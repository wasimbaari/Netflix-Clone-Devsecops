"use strict";
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var Link_1 = require("@mui/material/Link");
var Typography_1 = require("@mui/material/Typography");
var Divider_1 = require("@mui/material/Divider");
function Footer() {
    return (<Box_1["default"] sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 150,
            bgcolor: "inherit",
            px: "60px"
        }}>
      <Box_1["default"]>
        <Divider_1["default"]>
          <Typography_1["default"] color="grey.700" variant="h6">
            Developed by{" "}
            <Link_1["default"] href="https://github.com/crazy-man22" underline="none" sx={{ color: "text.primary" }} target="_blank">
              Crazy Man
            </Link_1["default"]>
          </Typography_1["default"]>
        </Divider_1["default"]>
      </Box_1["default"]>
    </Box_1["default"]>);
}
exports["default"] = Footer;

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
var React = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Stack_1 = require("@mui/material/Stack");
var Toolbar_1 = require("@mui/material/Toolbar");
var IconButton_1 = require("@mui/material/IconButton");
var Typography_1 = require("@mui/material/Typography");
var Menu_1 = require("@mui/material/Menu");
var Menu_2 = require("@mui/icons-material/Menu");
var Avatar_1 = require("@mui/material/Avatar");
var Tooltip_1 = require("@mui/material/Tooltip");
var MenuItem_1 = require("@mui/material/MenuItem");
var useOffSetTop_1 = require("src/hooks/useOffSetTop");
var constant_1 = require("src/constant");
var Logo_1 = require("../Logo");
var SearchBox_1 = require("../SearchBox");
var NetflixNavigationLink_1 = require("../NetflixNavigationLink");
var pages = ["My List", "Movies", "Tv Shows"];
var MainHeader = function () {
    var isOffset = (0, useOffSetTop_1["default"])(constant_1.APP_BAR_HEIGHT);
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var _b = React.useState(null), anchorElUser = _b[0], setAnchorElUser = _b[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    return (<AppBar_1["default"] sx={__assign({ 
            // px: "4%",
            px: "60px", height: constant_1.APP_BAR_HEIGHT, backgroundImage: "none" }, (isOffset
            ? {
                bgcolor: "primary.main",
                boxShadow: function (theme) { return theme.shadows[4]; }
            }
            : { boxShadow: 0, bgcolor: "transparent" }))}>
      <Toolbar_1["default"] disableGutters>
        <Logo_1["default"] sx={{ mr: { xs: 2, sm: 4 } }}/>

        <Box_1["default"] sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton_1["default"] size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
            <Menu_2["default"] />
          </IconButton_1["default"]>
          <Menu_1["default"] id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
        }} keepMounted transformOrigin={{
            vertical: "top",
            horizontal: "left"
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: "block", md: "none" }
        }}>
            {pages.map(function (page) { return (<MenuItem_1["default"] key={page} onClick={handleCloseNavMenu}>
                <Typography_1["default"] textAlign="center">{page}</Typography_1["default"]>
              </MenuItem_1["default"]>); })}
          </Menu_1["default"]>
        </Box_1["default"]>
        <Typography_1["default"] variant="h5" noWrap component="a" href="" sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none"
        }}>
          Netflix
        </Typography_1["default"]>
        <Stack_1["default"] direction="row" spacing={3} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(function (page) { return (<NetflixNavigationLink_1["default"] to="" variant="subtitle1" key={page} onClick={handleCloseNavMenu}>
              {page}
            </NetflixNavigationLink_1["default"]>); })}
        </Stack_1["default"]>

        <Box_1["default"] sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
          <SearchBox_1["default"] />
          <Tooltip_1["default"] title="Open settings">
            <IconButton_1["default"] onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar_1["default"] alt="user_avatar" src="/avatar.png" variant="rounded"/>
            </IconButton_1["default"]>
          </Tooltip_1["default"]>
          <Menu_1["default"] sx={{ mt: "45px" }} id="avatar-menu" anchorEl={anchorElUser} anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }} keepMounted transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
            {["Account", "Logout"].map(function (setting) { return (<MenuItem_1["default"] key={setting} onClick={handleCloseUserMenu}>
                <Typography_1["default"] textAlign="center">{setting}</Typography_1["default"]>
              </MenuItem_1["default"]>); })}
          </Menu_1["default"]>
        </Box_1["default"]>
      </Toolbar_1["default"]>
    </AppBar_1["default"]>);
};
exports["default"] = MainHeader;

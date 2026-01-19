"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("@mui/material/Box");
var DetailModal_1 = require("src/components/DetailModal");
var VideoPortalContainer_1 = require("src/components/VideoPortalContainer");
var DetailModalProvider_1 = require("src/providers/DetailModalProvider");
var PortalProvider_1 = require("src/providers/PortalProvider");
var constant_1 = require("src/constant");
var layouts_1 = require("src/components/layouts");
var MainLoadingScreen_1 = require("src/components/MainLoadingScreen");
function MainLayout() {
    var location = (0, react_router_dom_1.useLocation)();
    var navigation = (0, react_router_dom_1.useNavigation)();
    // console.log("Nav Stat: ", navigation.state);
    return (<Box_1["default"] sx={{
            width: "100%",
            minHeight: "100vh",
            bgcolor: "background.default"
        }}>
      <layouts_1.MainHeader />
      {navigation.state !== "idle" && <MainLoadingScreen_1["default"] />}
      <DetailModalProvider_1["default"]>
        <DetailModal_1["default"] />
        <PortalProvider_1["default"]>
          {/* <MainLoadingScreen /> */}
          <react_router_dom_1.Outlet />
          <VideoPortalContainer_1["default"] />
        </PortalProvider_1["default"]>
      </DetailModalProvider_1["default"]>
      {location.pathname !== "/".concat(constant_1.MAIN_PATH.watch) && <layouts_1.Footer />}
    </Box_1["default"]>);
}
exports["default"] = MainLayout;

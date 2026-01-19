"use strict";
exports.__esModule = true;
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require("./CustomClassNameSetup");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@mui/material/styles");
var store_1 = require("./store");
var configuration_1 = require("./store/slices/configuration");
var palette_1 = require("./theme/palette");
var routes_1 = require("./routes");
var MainLoadingScreen_1 = require("./components/MainLoadingScreen");
store_1["default"].dispatch(configuration_1.extendedApi.endpoints.getConfiguration.initiate(undefined));
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(<react_redux_1.Provider store={store_1["default"]}>
    <react_1["default"].StrictMode>
      <styles_1.ThemeProvider theme={(0, styles_1.createTheme)({ palette: palette_1["default"] })}>
        <react_router_dom_1.RouterProvider router={routes_1["default"]} fallbackElement={<MainLoadingScreen_1["default"] />}/>
      </styles_1.ThemeProvider>
    </react_1["default"].StrictMode>
  </react_redux_1.Provider>);

"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var constant_1 = require("src/constant");
var MainLayout_1 = require("src/layouts/MainLayout");
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <MainLayout_1["default"] />,
        children: [
            {
                path: constant_1.MAIN_PATH.root,
                element: <react_router_dom_1.Navigate to={"/".concat(constant_1.MAIN_PATH.browse)}/>
            },
            {
                path: constant_1.MAIN_PATH.browse,
                lazy: function () { return Promise.resolve().then(function () { return require("src/pages/HomePage"); }); }
            },
            {
                path: constant_1.MAIN_PATH.genreExplore,
                children: [
                    {
                        path: ":genreId",
                        lazy: function () { return Promise.resolve().then(function () { return require("src/pages/GenreExplore"); }); }
                    },
                ]
            },
            {
                path: constant_1.MAIN_PATH.watch,
                lazy: function () { return Promise.resolve().then(function () { return require("src/pages/WatchPage"); }); }
            },
        ]
    },
]);
exports["default"] = router;

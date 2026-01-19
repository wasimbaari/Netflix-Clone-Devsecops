"use strict";
exports.__esModule = true;
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var path_1 = require("path");
exports["default"] = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1["default"])()],
    resolve: {
        alias: {
            src: path_1["default"].resolve(__dirname, "src")
        }
    }
});

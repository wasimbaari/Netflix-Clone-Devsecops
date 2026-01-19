"use strict";
exports.__esModule = true;
var className_1 = require("@mui/material/className");
className_1.unstable_ClassNameGenerator.configure(function (componentName) {
    var newComponentName = componentName;
    // you can replace Mui, default prefix of every component with new one you want
    newComponentName = newComponentName.replace("Mui", "Netflix");
    // you can replace default classname of component with new one you want
    newComponentName = newComponentName.replace("Button", "Btn");
    return newComponentName;
});

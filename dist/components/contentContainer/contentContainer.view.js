"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./contentContainer.style.scss");
var clsx_1 = require("clsx");
var ContentContainer = function (props) {
    return (React.createElement("div", { className: clsx_1.default(['content-container']) },
        React.createElement("div", { className: "content" }, props.children)));
};
exports.default = ContentContainer;
//# sourceMappingURL=contentContainer.view.js.map
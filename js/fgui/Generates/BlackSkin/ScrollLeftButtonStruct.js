/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fgui;
(function (fgui) {
    var BlackSkin;
    (function (BlackSkin) {
        var ScrollLeftButtonStruct = /** @class */ (function (_super) {
            __extends(ScrollLeftButtonStruct, _super);
            function ScrollLeftButtonStruct() {
                return _super.call(this) || this;
            }
            ScrollLeftButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ScrollLeftButton"));
            };
            ScrollLeftButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            ScrollLeftButtonStruct.URL = "ui://s1uxc7tgjmop33";
            ScrollLeftButtonStruct.DependPackages = ["BlackSkin"];
            return ScrollLeftButtonStruct;
        }(fairygui.GButton));
        BlackSkin.ScrollLeftButtonStruct = ScrollLeftButtonStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScrollLeftButtonStruct.js.map
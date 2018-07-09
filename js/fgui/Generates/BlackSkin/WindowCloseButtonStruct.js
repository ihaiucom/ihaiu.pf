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
        var WindowCloseButtonStruct = /** @class */ (function (_super) {
            __extends(WindowCloseButtonStruct, _super);
            function WindowCloseButtonStruct() {
                return _super.call(this) || this;
            }
            WindowCloseButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "WindowCloseButton"));
            };
            WindowCloseButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            WindowCloseButtonStruct.URL = "ui://s1uxc7tgjmop3g";
            WindowCloseButtonStruct.DependPackages = ["BlackSkin"];
            return WindowCloseButtonStruct;
        }(fairygui.GButton));
        BlackSkin.WindowCloseButtonStruct = WindowCloseButtonStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowCloseButtonStruct.js.map
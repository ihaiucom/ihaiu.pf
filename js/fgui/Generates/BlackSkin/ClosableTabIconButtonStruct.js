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
        var ClosableTabIconButtonStruct = /** @class */ (function (_super) {
            __extends(ClosableTabIconButtonStruct, _super);
            function ClosableTabIconButtonStruct() {
                return _super.call(this) || this;
            }
            ClosableTabIconButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ClosableTabIconButton"));
            };
            ClosableTabIconButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_closeButton = (this.getChild("closeButton"));
            };
            ClosableTabIconButtonStruct.URL = "ui://s1uxc7tgjmop38";
            ClosableTabIconButtonStruct.DependPackages = ["BlackSkin"];
            return ClosableTabIconButtonStruct;
        }(fairygui.GButton));
        BlackSkin.ClosableTabIconButtonStruct = ClosableTabIconButtonStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ClosableTabIconButtonStruct.js.map
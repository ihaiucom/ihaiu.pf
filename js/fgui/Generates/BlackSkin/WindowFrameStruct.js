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
        var WindowFrameStruct = /** @class */ (function (_super) {
            __extends(WindowFrameStruct, _super);
            function WindowFrameStruct() {
                return _super.call(this) || this;
            }
            WindowFrameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "WindowFrame"));
            };
            WindowFrameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dragArea = (this.getChild("dragArea"));
                this.m_title = (this.getChild("title"));
                this.m_contentArea = (this.getChild("contentArea"));
            };
            WindowFrameStruct.URL = "ui://s1uxc7tgjmop3f";
            WindowFrameStruct.DependPackages = ["BlackSkin"];
            return WindowFrameStruct;
        }(fairygui.GLabel));
        BlackSkin.WindowFrameStruct = WindowFrameStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowFrameStruct.js.map
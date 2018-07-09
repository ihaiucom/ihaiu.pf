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
        var ScrollBar_HZStruct = /** @class */ (function (_super) {
            __extends(ScrollBar_HZStruct, _super);
            function ScrollBar_HZStruct() {
                return _super.call(this) || this;
            }
            ScrollBar_HZStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ScrollBar_HZ"));
            };
            ScrollBar_HZStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_grip = (this.getChild("grip"));
                this.m_arrow2 = (this.getChild("arrow2"));
                this.m_arrow1 = (this.getChild("arrow1"));
            };
            ScrollBar_HZStruct.URL = "ui://s1uxc7tgjmop30";
            ScrollBar_HZStruct.DependPackages = ["BlackSkin"];
            return ScrollBar_HZStruct;
        }(fairygui.GScrollBar));
        BlackSkin.ScrollBar_HZStruct = ScrollBar_HZStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScrollBar_HZStruct.js.map
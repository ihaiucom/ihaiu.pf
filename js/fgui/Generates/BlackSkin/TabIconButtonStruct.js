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
        var TabIconButtonStruct = /** @class */ (function (_super) {
            __extends(TabIconButtonStruct, _super);
            function TabIconButtonStruct() {
                return _super.call(this) || this;
            }
            TabIconButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "TabIconButton"));
            };
            TabIconButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            TabIconButtonStruct.URL = "ui://s1uxc7tgjmop37";
            TabIconButtonStruct.DependPackages = ["BlackSkin"];
            return TabIconButtonStruct;
        }(fairygui.GButton));
        BlackSkin.TabIconButtonStruct = TabIconButtonStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TabIconButtonStruct.js.map
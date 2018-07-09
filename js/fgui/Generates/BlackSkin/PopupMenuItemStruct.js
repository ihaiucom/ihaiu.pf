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
        var PopupMenuItemStruct = /** @class */ (function (_super) {
            __extends(PopupMenuItemStruct, _super);
            function PopupMenuItemStruct() {
                return _super.call(this) || this;
            }
            PopupMenuItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "PopupMenuItem"));
            };
            PopupMenuItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            PopupMenuItemStruct.URL = "ui://s1uxc7tgjmop2r";
            PopupMenuItemStruct.DependPackages = ["BlackSkin"];
            return PopupMenuItemStruct;
        }(fairygui.GButton));
        BlackSkin.PopupMenuItemStruct = PopupMenuItemStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopupMenuItemStruct.js.map
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
        var ListItemStruct = /** @class */ (function (_super) {
            __extends(ListItemStruct, _super);
            function ListItemStruct() {
                return _super.call(this) || this;
            }
            ListItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ListItem"));
            };
            ListItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ListItemStruct.URL = "ui://s1uxc7tgjmop2n";
            ListItemStruct.DependPackages = ["BlackSkin"];
            return ListItemStruct;
        }(fairygui.GButton));
        BlackSkin.ListItemStruct = ListItemStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ListItemStruct.js.map
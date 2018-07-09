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
        var TreeItemStruct = /** @class */ (function (_super) {
            __extends(TreeItemStruct, _super);
            function TreeItemStruct() {
                return _super.call(this) || this;
            }
            TreeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "TreeItem"));
            };
            TreeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_indent = (this.getChild("indent"));
                this.m_icon = (this.getChild("icon"));
                this.m_sign = (this.getChild("sign"));
                this.m_expandButton = (this.getChild("expandButton"));
            };
            TreeItemStruct.URL = "ui://s1uxc7tgjmop3c";
            TreeItemStruct.DependPackages = ["BlackSkin"];
            return TreeItemStruct;
        }(fairygui.GButton));
        BlackSkin.TreeItemStruct = TreeItemStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TreeItemStruct.js.map
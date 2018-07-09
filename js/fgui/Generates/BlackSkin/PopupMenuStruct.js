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
        var PopupMenuStruct = /** @class */ (function (_super) {
            __extends(PopupMenuStruct, _super);
            function PopupMenuStruct() {
                return _super.call(this) || this;
            }
            PopupMenuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "PopupMenu"));
            };
            PopupMenuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            PopupMenuStruct.URL = "ui://s1uxc7tgjmop2t";
            PopupMenuStruct.DependPackages = ["BlackSkin"];
            return PopupMenuStruct;
        }(fairygui.GComponent));
        BlackSkin.PopupMenuStruct = PopupMenuStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopupMenuStruct.js.map
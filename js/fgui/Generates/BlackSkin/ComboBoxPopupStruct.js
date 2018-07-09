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
        var ComboBoxPopupStruct = /** @class */ (function (_super) {
            __extends(ComboBoxPopupStruct, _super);
            function ComboBoxPopupStruct() {
                return _super.call(this) || this;
            }
            ComboBoxPopupStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ComboBoxPopup"));
            };
            ComboBoxPopupStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            ComboBoxPopupStruct.URL = "ui://s1uxc7tgjmopf";
            ComboBoxPopupStruct.DependPackages = ["BlackSkin"];
            return ComboBoxPopupStruct;
        }(fairygui.GComponent));
        BlackSkin.ComboBoxPopupStruct = ComboBoxPopupStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ComboBoxPopupStruct.js.map
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
    var Main;
    (function (Main) {
        var AssetPanelStruct = /** @class */ (function (_super) {
            __extends(AssetPanelStruct, _super);
            function AssetPanelStruct() {
                return _super.call(this) || this;
            }
            AssetPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "AssetPanel"));
            };
            AssetPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_coin = (this.getChild("txt_coin"));
                this.m_txt_diamond = (this.getChild("txt_diamond"));
            };
            AssetPanelStruct.URL = "ui://7ecreso0f2qvx3s";
            AssetPanelStruct.DependPackages = ["Main", "Common"];
            return AssetPanelStruct;
        }(fairygui.GComponent));
        Main.AssetPanelStruct = AssetPanelStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetPanelStruct.js.map
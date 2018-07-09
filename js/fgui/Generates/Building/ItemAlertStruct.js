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
    var Building;
    (function (Building) {
        var ItemAlertStruct = /** @class */ (function (_super) {
            __extends(ItemAlertStruct, _super);
            function ItemAlertStruct() {
                return _super.call(this) || this;
            }
            ItemAlertStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "ItemAlert"));
            };
            ItemAlertStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_alert_title = (this.getChild("alert_title"));
                this.m_lbl = (this.getChild("lbl"));
                this.m_descTxt = (this.getChild("descTxt"));
                this.m_line = (this.getChild("line"));
                this.m_getwayList = (this.getChild("getwayList"));
                this.m_btn_close = (this.getChild("btn_close"));
                this.m_costAsset = (this.getChild("costAsset"));
            };
            ItemAlertStruct.URL = "ui://d062jvkgo11z121";
            ItemAlertStruct.DependPackages = ["Building"];
            return ItemAlertStruct;
        }(fairygui.GComponent));
        Building.ItemAlertStruct = ItemAlertStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemAlertStruct.js.map
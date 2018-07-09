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
    var Common;
    (function (Common) {
        var Btn_itemBuyStruct = /** @class */ (function (_super) {
            __extends(Btn_itemBuyStruct, _super);
            function Btn_itemBuyStruct() {
                return _super.call(this) || this;
            }
            Btn_itemBuyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "btn_itemBuy"));
            };
            Btn_itemBuyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_itemCount = (this.getChild("itemCount"));
            };
            Btn_itemBuyStruct.URL = "ui://txcuvopdo11z1l";
            Btn_itemBuyStruct.DependPackages = ["Common"];
            return Btn_itemBuyStruct;
        }(fairygui.GButton));
        Common.Btn_itemBuyStruct = Btn_itemBuyStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_itemBuyStruct.js.map
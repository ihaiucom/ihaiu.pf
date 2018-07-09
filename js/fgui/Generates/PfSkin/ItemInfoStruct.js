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
    var PfSkin;
    (function (PfSkin) {
        var ItemInfoStruct = /** @class */ (function (_super) {
            __extends(ItemInfoStruct, _super);
            function ItemInfoStruct() {
                return _super.call(this) || this;
            }
            ItemInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ItemInfo"));
            };
            ItemInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_itemType = this.getController("itemType");
                this.m_txtItemCount = (this.getChild("txtItemCount"));
                this.m_txtInfo = (this.getChild("txtInfo"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_labItem = (this.getChild("labItem"));
                this.m_btnSale = (this.getChild("btnSale"));
                this.m_btnUse = (this.getChild("btnUse"));
                this.m_btnResolve = (this.getChild("btnResolve"));
                this.m_btnGive = (this.getChild("btnGive"));
                this.m_btnCompound = (this.getChild("btnCompound"));
            };
            ItemInfoStruct.URL = "ui://s33x8418ow2j1nq";
            ItemInfoStruct.DependPackages = ["PfSkin"];
            return ItemInfoStruct;
        }(fairygui.GComponent));
        PfSkin.ItemInfoStruct = ItemInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemInfoStruct.js.map
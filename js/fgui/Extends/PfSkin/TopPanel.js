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
        var TopPanel = /** @class */ (function (_super) {
            __extends(TopPanel, _super);
            function TopPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TopPanel.prototype.InitView = function (thisObj, closeHandler, assetList) {
                this.m_btnClose.onClick(thisObj, closeHandler);
                this.m_listAsset.itemRenderer = new Handler(this, this.RenderAssetItem, null, false);
                this.assetList = assetList;
            };
            TopPanel.prototype.updateAsset = function () {
                this.m_listAsset.numItems = this.assetList.length;
            };
            TopPanel.prototype.RenderAssetItem = function (index, obj) {
                var itemId = this.assetList[index];
                var item = Game.moduleModel.item.getItem(itemId);
                obj.icon = item.itemIconUrl;
                // obj.title = this.NumberNormalization(item.itemNum);
                obj.normalNumb = item.itemNum;
                obj.m_trColor.setSelectedIndex(item.itemNum > 10000 ? 1 : 0);
            };
            return TopPanel;
        }(PfSkin.TopPanelStruct));
        PfSkin.TopPanel = TopPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopPanel.js.map
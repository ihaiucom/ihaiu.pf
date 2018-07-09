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
        var BagMainPanel = /** @class */ (function (_super) {
            __extends(BagMainPanel, _super);
            function BagMainPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.bagTab = [
                    [4], [5, 8], [6], [7],
                ];
                return _this;
            }
            BagMainPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_listBagItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_listBagItem.setVirtual();
                this.m_listBagItem.on(fairygui.Events.CLICK_ITEM, this, this.OnItemClick);
                this.m_listBagItem.itemProvider = new Handler(this, this.GetListItemResource, null, false);
                this.m_listTab.on(fairygui.Events.CLICK_ITEM, this, this.OnTabClick);
                this.m_itemInfo.InitView();
            };
            BagMainPanel.prototype.onWindowShow = function () {
                this.AddProtoHandler();
                this.m_listTab.selectedIndex = 0;
                this.selectItem = null;
                this.UpdateView();
            };
            BagMainPanel.prototype.onWindowHide = function () {
                this.RemoveProtoHandler();
            };
            BagMainPanel.prototype.UpdateView = function () {
                this.UpdateBagItemList();
                this.UpdateItemInfo();
            };
            BagMainPanel.prototype.UpdateBagItemList = function () {
                var itemTypes = this.GetItemTypes();
                this.itemList = Game.moduleModel.item.GetItemListByType(itemTypes);
                this.m_listBagItem.numItems = this.itemList.length;
                this.m_listBagItem.selectedIndex = this.GetSelectIndex();
                this.m_listBagItem.refreshVirtualList();
                this.m_listBagItem.scrollToView(0, true, true);
            };
            BagMainPanel.prototype.GetItemTypes = function () {
                if (this.m_listTab.selectedIndex >= 0 && this.m_listTab.selectedIndex < this.bagTab.length) {
                    return this.bagTab[this.m_listTab.selectedIndex];
                }
                return [];
            };
            BagMainPanel.prototype.GetSelectIndex = function () {
                if (this.selectItem == null) {
                    return -1;
                }
                var itemType = this.selectItem.itemType;
                var itemTypes = this.GetItemTypes();
                if (itemTypes.indexOf(itemType) >= 0) {
                    for (var index = 0; index < this.itemList.length; index++) {
                        var item = this.itemList[index];
                        if (item.itemId == this.selectItem.itemId) {
                            return index;
                        }
                    }
                }
                return -1;
            };
            BagMainPanel.prototype.UpdateItemInfo = function () {
                var itemData = this.selectItem;
                if (itemData == null || itemData.itemNum == 0) {
                    this.m_itemInfo.Hide();
                    return;
                }
                this.m_itemInfo.UpdateView(itemData.itemId);
                this.m_itemInfo.Show();
            };
            BagMainPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            BagMainPanel.prototype.RenderItem = function (index, obj) {
                // let data = this.itemList[index];
                // obj.RenderItem(data.itemIconUrl, data.itemNum.toString(), data.itemStar);
                if (this.m_listTab.selectedIndex == 3) {
                    var itemObj = obj;
                    var data = this.itemList[index];
                    itemObj.RenderItem(data.itemBodyIconUrl, data.itemNum.toString(), data.itemStar);
                }
                else {
                    var itemObj = obj;
                    var data = this.itemList[index];
                    itemObj.RenderItem(data.itemIconUrl, data.itemNum.toString(), data.itemStar);
                }
            };
            BagMainPanel.prototype.OnItemClick = function (obj) {
                this.selectItem = this.itemList[this.m_listBagItem.selectedIndex];
                this.UpdateItemInfo();
            };
            BagMainPanel.prototype.OnTabClick = function (obj) {
                this.UpdateView();
            };
            BagMainPanel.prototype.GetListItemResource = function (index) {
                if (this.m_listTab.selectedIndex == 3)
                    return fgui.PfSkin.PactItem.URL;
                else
                    return fgui.PfSkin.PropItem.URL;
            };
            BagMainPanel.prototype.AddProtoHandler = function () {
                Game.protoOkEvent.add(ProtoAPIEventKey.item_SellOut, this.OnSellOutResponse, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.item_Compound, this.OnCompoundResponse, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.item_CompoundActor, this.OnCompoundActorResponse, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.item_Split, this.OnSplitResponse, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.item_Use, this.OnUseResponse, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.ItemData, this.OnItemDataResponse, this);
            };
            BagMainPanel.prototype.RemoveProtoHandler = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.item_SellOut, this.OnSellOutResponse, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.item_Compound, this.OnCompoundResponse, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.item_CompoundActor, this.OnCompoundActorResponse, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.item_Split, this.OnSplitResponse, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.item_Use, this.OnUseResponse, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.ItemData, this.OnItemDataResponse, this);
            };
            BagMainPanel.prototype.OnItemDataResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnSellOutResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnCompoundResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnSplitResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnUseResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnCompoundActorResponse = function () {
                this.UpdateView();
            };
            return BagMainPanel;
        }(PfSkin.BagMainPanelStruct));
        PfSkin.BagMainPanel = BagMainPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagMainPanel.js.map
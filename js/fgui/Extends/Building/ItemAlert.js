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
        var ItemAlert = /** @class */ (function (_super) {
            __extends(ItemAlert, _super);
            function ItemAlert() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ItemAlert.prototype.show = function () {
                this.m_btn_close.onClick(this, this.onCloseSelf);
                Games.MenuLayer.module.addChild(this);
            };
            ItemAlert.prototype.setInfo = function (itemId, costNum) {
                var itemcfg = Game.config.item.getConfig(itemId);
                if (itemcfg) {
                    this.m_alert_title.text = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemcfg.name);
                    var userItem = Game.moduleModel.item.getItem(itemId);
                    this.m_costAsset.m_assetLoad.url = userItem.itemIconUrl;
                    this.m_costAsset.m_assetNum.text = (costNum - userItem.itemNum).toString();
                    this.m_descTxt.text = itemcfg.get_way_explain;
                    this.setGetWay(itemcfg);
                }
            };
            ItemAlert.prototype.setGetWay = function (cfg) {
                this.m_getwayList.removeChildrenToPool();
                var getWayList = cfg.get_way;
                for (var _i = 0, getWayList_1 = getWayList; _i < getWayList_1.length; _i++) {
                    var getway = getWayList_1[_i];
                    var menuCfg = Game.config.menu.getConfig(getway);
                    if (menuCfg) {
                        var getwayItem = this.m_getwayList.addItemFromPool();
                        // getwayItem.m_loader.url = "";
                        getwayItem.m_title.text = menuCfg.name;
                        this.m_getwayList.addChild(getwayItem);
                    }
                }
            };
            ItemAlert.prototype.onCloseSelf = function () {
                this.parent.removeChild(this);
            };
            return ItemAlert;
        }(Building.ItemAlertStruct));
        Building.ItemAlert = ItemAlert;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemAlert.js.map
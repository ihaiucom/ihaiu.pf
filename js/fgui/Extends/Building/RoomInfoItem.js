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
        var RoomInfoItem = /** @class */ (function (_super) {
            __extends(RoomInfoItem, _super);
            function RoomInfoItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoomInfoItem.prototype.setInfo = function (info) {
                this.info = info;
                this.m_room_title.text = info.name;
                this.m_room_level.visible = true;
                this.m_room_level.text = "";
                if (this.info.isBuilded) {
                    this.m_builded_bg.visible = true;
                    this.m_unbuild_bg.visible = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_be_builded);
                    this.m_room_level.text = msg;
                }
                else {
                    this.m_builded_bg.visible = false;
                    this.m_unbuild_bg.visible = true;
                }
                this.setIcon();
                this.setBuildCost();
            };
            RoomInfoItem.prototype.setIcon = function () {
                var avatarIconId = Game.config.buildingLevel.getConfig(this.info.id).building_small;
                this.m_room_icon.url = Game.config.avatar.getConfig(avatarIconId).iconUrl;
            };
            //升级消耗
            RoomInfoItem.prototype.setBuildCost = function () {
                var cfg = Game.config.buildingLevel.getConfig(this.info.id);
                this.m_assetList.removeChildrenToPool();
                var costList = cfg.cost;
                for (var _i = 0, costList_1 = costList; _i < costList_1.length; _i++) {
                    var costItem = costList_1[_i];
                    var itemCfg = Game.config.item.getConfig(costItem.itemId);
                    var userItem = Game.moduleModel.item.getItem(costItem.itemId);
                    var asset = this.m_assetList.addItemFromPool();
                    asset.setInfo(userItem.itemIconUrl, costItem.itemNum);
                    this.m_assetList.addChild(asset);
                }
            };
            return RoomInfoItem;
        }(Building.RoomInfoItemStruct));
        Building.RoomInfoItem = RoomInfoItem;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoomInfoItem.js.map
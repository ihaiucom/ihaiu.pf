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
        var MenuLayer = Games.MenuLayer;
        var BuildRoomUpgrade = /** @class */ (function (_super) {
            __extends(BuildRoomUpgrade, _super);
            function BuildRoomUpgrade() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BuildRoomUpgrade.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                Game.protoOkEvent.add(ProtoAPIEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
            };
            /**
             * 销毁
             */
            BuildRoomUpgrade.prototype.dispose = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
            };
            /**
             * 房间升级
             * @param msg
             */
            BuildRoomUpgrade.prototype.onServerRoomUpgrade = function (msg) {
                var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                this.setInfo(roomInfo);
                this.onUpgradeSuccess();
            };
            BuildRoomUpgrade.prototype.setInfo = function (info) {
                this.info = info;
                var maxLevel = this.getBuildRoomMaxLevel(info.type);
                var curentCfg = Game.config.buildingLevel.getConfig(info.id);
                var nextId = info.id + 1;
                var nextCfg = Game.config.buildingLevel.getConfig(nextId);
                var avatarIconId = Game.config.buildingLevel.getConfig(this.info.id).building_small;
                this.m_minImage.url = Game.config.avatar.getConfig(avatarIconId).iconUrl;
                if (curentCfg.level < maxLevel) //最大等级
                 {
                    this.m_btn_levelup.visible = true;
                    this.m_btn_confirm.visible = false;
                    this.m_txt_name.text = info.name + "[color=#66ff66]升级至" + nextCfg.level + "级[/color]";
                }
                else {
                    this.m_txt_name.text = info.name + "[color=#66ff66]升级至" + maxLevel + "级[/color]";
                    this.m_btn_confirm.visible = true;
                    this.m_btn_levelup.visible = false;
                }
                if (this.checkLevelCondition()) {
                    this.m_txt_companyLevel.visible = false;
                }
                else {
                    // this.m_btn_confirm.visible = true;
                    // this.m_btn_levelup.visible = false;
                    this.m_txt_companyLevel.visible = true;
                    this.m_txt_companyLevel.text = "升级需要公司等级达到[color=#ff0000]" + nextCfg.level_req + "级[/color]";
                }
                this.setCurrentProp(curentCfg); //当前等级属性
                this.setNextProp(nextCfg); //下一等级属性
                this.setLevelupCost(nextCfg); //升级消耗
                //event
                this.m_topAsset.m_btn_close.onClick(this, this.onClose);
                this.m_btn_confirm.onClick(this, this.onConfirm);
                this.m_btn_levelup.onClick(this, this.onUpgradeClick);
            };
            //----------------------------
            //Private
            //----------------------------
            BuildRoomUpgrade.prototype.setCurrentProp = function (cfg) {
                this.m_curLevelProp.m_list.removeChildrenToPool();
                var effects = cfg.effect_id;
                for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                    var effectId = effects_1[_i];
                    var effectCfg = Game.config.buildingEffect.getConfig(effectId);
                    var itemProp = this.m_curLevelProp.m_list.addItemFromPool();
                    itemProp.getChild("title").text = effectCfg.effect_des;
                    this.m_curLevelProp.m_list.addChild(itemProp);
                }
            };
            BuildRoomUpgrade.prototype.setNextProp = function (cfg) {
                if (cfg == null)
                    return;
                this.m_nextLevelProp.m_list.removeChildrenToPool();
                var effects = cfg.effect_id;
                for (var _i = 0, effects_2 = effects; _i < effects_2.length; _i++) {
                    var effectId = effects_2[_i];
                    var effectCfg = Game.config.buildingEffect.getConfig(effectId);
                    var itemProp = this.m_nextLevelProp.m_list.addItemFromPool();
                    itemProp.getChild("title").text = "[color=#66ff66]" + effectCfg.effect_des + "[/color]";
                    this.m_nextLevelProp.m_list.addChild(itemProp);
                }
            };
            //升级消耗
            BuildRoomUpgrade.prototype.setLevelupCost = function (cfg) {
                if (cfg == null)
                    return;
                this.setTopAsset(cfg);
                this.m_needAssetList.removeChildren();
                var costList = cfg.cost;
                for (var _i = 0, costList_1 = costList; _i < costList_1.length; _i++) {
                    var costItem = costList_1[_i];
                    var itemCfg = Game.config.item.getConfig(costItem.itemId);
                    var userItem = Game.moduleModel.item.getItem(costItem.itemId);
                    var asset = this.m_needAssetList.addItemFromPool();
                    asset.setInfo(userItem.itemIconUrl, costItem.itemNum);
                    this.m_needAssetList.addChild(asset);
                }
            };
            //设置消耗材料
            BuildRoomUpgrade.prototype.setTopAsset = function (cfg) {
                this.m_topAsset.m_assetList.removeChildrenToPool();
                var costList = cfg.cost;
                for (var _i = 0, costList_2 = costList; _i < costList_2.length; _i++) {
                    var costItem = costList_2[_i];
                    var userItem = Game.moduleModel.item.getItem(costItem.itemId);
                    var itemNum = Game.moduleModel.item.getItemNum(costItem.itemId);
                    var assetItem = this.m_topAsset.m_assetList.addItemFromPool();
                    assetItem.setInfo(userItem.itemIconUrl, itemNum);
                    this.m_topAsset.m_assetList.addChild(assetItem);
                }
            };
            //检查条件是否满足(消耗，等级)
            BuildRoomUpgrade.prototype.checkCondition = function () {
                var nextId = this.info.id + 1;
                var buildConfig = Game.config.buildingLevel.getConfig(nextId);
                if (buildConfig != null) {
                    if (User.info.level < buildConfig.level_req) {
                        var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_level, buildConfig.level_req);
                        Game.system.toastText(msg);
                        return false;
                    }
                    for (var _i = 0, _a = buildConfig.cost; _i < _a.length; _i++) {
                        var cost = _a[_i];
                        var hasItemNum = Game.moduleModel.item.getItemNum(cost.itemId);
                        if (hasItemNum < cost.itemNum) {
                            var itemCfg = Game.config.item.getConfig(cost.itemId);
                            var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemCfg.name);
                            var itemAlert = Building.ItemAlert.createInstance();
                            itemAlert.show();
                            itemAlert.setInfo(cost.itemId, cost.itemNum);
                            return false;
                        }
                    }
                }
                return true;
            };
            BuildRoomUpgrade.prototype.checkLevelCondition = function () {
                var nextId = this.info.id + 1;
                var buildConfig = Game.config.buildingLevel.getConfig(nextId);
                if (buildConfig != null) {
                    if (User.info.level < buildConfig.level_req) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * 获取房间升级最大等级
             * @param type
             */
            BuildRoomUpgrade.prototype.getBuildRoomMaxLevel = function (type) {
                var roomListConfig = Game.config.buildingLevel.getConfigList();
                var result = roomListConfig.filter(function (value, index, array) {
                    return value.type == type;
                });
                return result.length;
            };
            /**
             * 升级
             */
            BuildRoomUpgrade.prototype.onUpgradeClick = function () {
                if (this.checkCondition()) {
                    //请求升级房间
                    Game.protosender.CinemaBuild.UpgradeRoom(this.info.id);
                }
            };
            BuildRoomUpgrade.prototype.onUpgradeSuccess = function () {
                var buildRoomUpgradeSuccess = Building.BuildRoomUpgradeSuccess.createInstance();
                buildRoomUpgradeSuccess.init(this.info);
                MenuLayer.module.addChild(buildRoomUpgradeSuccess);
                this.onClose();
            };
            BuildRoomUpgrade.prototype.onConfirm = function () {
                this.onClose();
            };
            BuildRoomUpgrade.prototype.onClose = function () {
                this.parent.removeChild(this);
                this.dispose();
            };
            return BuildRoomUpgrade;
        }(Building.BuildRoomUpgradeStruct));
        Building.BuildRoomUpgrade = BuildRoomUpgrade;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomUpgrade.js.map
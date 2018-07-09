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
        var BagItemInfo = /** @class */ (function (_super) {
            __extends(BagItemInfo, _super);
            function BagItemInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BagItemInfo.prototype.InitView = function () {
                this.m_btnCompound.onClick(this, this.OnBtnCompoundClick);
                this.m_btnGive.onClick(this, this.OnBtnGiveClick);
                this.m_btnResolve.onClick(this, this.OnBtnResolveClick);
                this.m_btnSale.onClick(this, this.OnBtnSaleClick);
                this.m_btnUse.onClick(this, this.OnBtnUseClick);
            };
            BagItemInfo.prototype.UpdateView = function (id) {
                this.itemData = Game.moduleModel.item.getItem(id);
                this.m_labItem.icon = this.itemData.itemType == 7 ? this.itemData.itemBodyIconUrl : this.itemData.itemIconUrl;
                this.m_labItem.title = this.itemData.itemName;
                this.m_labItem.star = this.itemData.itemStar;
                this.m_txtItemCount.text = this.itemData.itemNum.toString();
                this.m_labPrice.icon = Game.moduleModel.item.getItem(3).itemIconUrl;
                this.m_labPrice.normalNumb = this.itemData.itemConfig.price;
                this.m_txtInfo.text = this.itemData.itemDes;
                this.m_tipAct.text = "";
                this.UpdateButtonType();
            };
            BagItemInfo.prototype.UpdateButtonType = function () {
                if (this.itemData.itemType == 6) {
                    if (this.itemData.splitItem.length == 0) {
                        this.m_buttonType.setSelectedIndex(4);
                    }
                    else if (this.itemData.compoundItem == null) {
                        this.m_buttonType.setSelectedIndex(5);
                    }
                    else {
                        this.m_buttonType.setSelectedIndex(6);
                    }
                }
                else {
                    var cfg = this.itemData.itemConfig;
                    if (cfg.can_use && cfg.can_sell) {
                        this.m_buttonType.setSelectedIndex(3);
                    }
                    else if (cfg.can_sell) {
                        this.m_buttonType.setSelectedIndex(2);
                    }
                    else if (cfg.can_use) {
                        this.m_buttonType.setSelectedIndex(1);
                    }
                    else {
                        this.m_buttonType.setSelectedIndex(0);
                    }
                }
            };
            BagItemInfo.prototype.OnBtnCompoundClick = function () {
                var limit = this.itemData.compoundNum;
                if (limit == 0) {
                    var needNum = this.itemData.compoundItem.itemNum - this.itemData.itemNum;
                    var str = "物品不足，还需要{0}个才能合成";
                    Game.system.toastText(str.format(needNum));
                }
                Game.system.setNumText(limit, "选择要合成的数量", "", this, this.OnConfirmCompound);
            };
            BagItemInfo.prototype.OnConfirmCompound = function (itemNum) {
                if (this.itemData.itemType == 6) {
                    Game.protosender.item.Compound(this.itemData.uuid, this.itemData.itemId, itemNum);
                }
            };
            BagItemInfo.prototype.OnBtnGiveClick = function () {
                // TODD 选择赠送对象；
                // let actorIdList = Game.config.actorAssets.getActorListByAsset(this.itemData.itemId);
                // let actorList: Games.ActorData[] = [];
                // for (var index = 0; index < actorIdList.length; index++)
                // {
                // 	var actorId = actorIdList[index];
                // 	var actor = Game.moduleModel.actor.getActor(actorId);
                // 	if (actor != null && actor.giveAssetsCount < actor.giveAssetsCountLimit)
                // 	{
                // 		actorList.push(actor);
                // 	}
                // }
                var actorList = this.GetActorListByAsset();
                Game.system.selectActor(actorList, this.OnConfirmGiveActor, this, "选择赠送对象");
            };
            BagItemInfo.prototype.GetActorListByAsset = function () {
                var list = [];
                var actorList = Game.moduleModel.actor.getActors();
                for (var i = 0; i < actorList.length; i++) {
                    var actor = actorList[i];
                    var assetList = actor.giveAssetsList;
                    var isPush = false;
                    for (var j = 0; j < assetList.length; j++) {
                        var asset = assetList[j];
                        for (var k = 0; k < asset.giveItemList.length; k++) {
                            var item = asset.giveItemList[k];
                            if (item.itemId == this.itemData.itemId) {
                                list.push(actor);
                                isPush = true;
                                break;
                            }
                        }
                        if (isPush) {
                            break;
                        }
                    }
                }
                return list;
            };
            BagItemInfo.prototype.OnConfirmGiveActor = function (actorId) {
                this.protoGiveData = { actorId: actorId };
                var actor = Game.moduleModel.actor.getActor(actorId);
                this.UpdateActorAssetTypeAndLv(actor);
                // TODO 获得数量
                var limit = Math.min(this.itemData.itemNum, actor.giveAssetsCountLimit - actor.giveAssetsCount);
                Game.system.setNumText(limit, "选择要赠送的数量", "", this, this.OnConfirmGiveNum);
            };
            // 更新protoGiveData里的actorType和actorLv
            BagItemInfo.prototype.UpdateActorAssetTypeAndLv = function (actor) {
                var assetList = actor.giveAssetsList;
                for (var j = 0; j < assetList.length; j++) {
                    var asset = assetList[j];
                    for (var k = 0; k < asset.giveItemList.length; k++) {
                        var item = asset.giveItemList[k];
                        if (item.itemId == this.itemData.itemId) {
                            this.protoGiveData.actorLv = asset.giveLevel;
                            this.protoGiveData.actorType = asset.giveType;
                            return;
                        }
                    }
                }
            };
            BagItemInfo.prototype.OnConfirmGiveNum = function (itemNum) {
                var actorId = this.protoGiveData.actorId;
                var actorType = this.protoGiveData.actorType;
                var actorLv = this.protoGiveData.actorLv;
                Game.protosender.Actor.giveActorAssets(actorId, actorType, actorLv, itemNum);
            };
            BagItemInfo.prototype.OnBtnResolveClick = function () {
                // TODO 获得数量
                var limit = this.itemData.itemNum;
                Game.system.setNumText(limit, "选择要拆分的数量", "", this, this.OnConfirmResolve);
            };
            BagItemInfo.prototype.OnConfirmResolve = function (itemNum) {
                Game.protosender.item.Split(this.itemData.uuid, this.itemData.itemId, itemNum);
            };
            BagItemInfo.prototype.OnBtnSaleClick = function () {
                // TODO 获得数量
                var limit = this.itemData.itemNum;
                Game.system.setNumText(limit, "选择要出售的数量", "", this, this.OnConfirmSale);
            };
            BagItemInfo.prototype.OnConfirmSale = function (num) {
                Game.protosender.item.SellOut(this.itemData.uuid, this.itemData.itemId, num);
            };
            BagItemInfo.prototype.OnBtnUseClick = function () {
                if (this.itemData.itemType == 7) {
                    var actorId = this.itemData.compoundActor.itemId;
                    if (Game.moduleModel.actor.getActor(actorId) != null) {
                        var str = "你已拥有此艺人";
                        Game.system.toastText(str);
                        return;
                    }
                    var limit = this.itemData.compoundActorNum;
                    if (limit == 0) {
                        var needNum = this.itemData.compoundActor.itemNum - this.itemData.itemNum;
                        var str = "物品不足，还需要{0}个才能合成";
                        Game.system.toastText(str.format(needNum));
                        return;
                    }
                    Game.protosender.item.CompoundActor(this.itemData.uuid, this.itemData.itemId);
                }
                else {
                    Game.protosender.item.Use(this.itemData.uuid, this.itemData.itemId, this.itemData.itemNum);
                }
            };
            BagItemInfo.prototype.Show = function () {
                this.visible = true;
            };
            BagItemInfo.prototype.Hide = function () {
                this.visible = false;
            };
            return BagItemInfo;
        }(PfSkin.BagItemInfoStruct));
        PfSkin.BagItemInfo = BagItemInfo;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagItemInfo.js.map
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
        var MarketCityInfoPanel = /** @class */ (function (_super) {
            __extends(MarketCityInfoPanel, _super);
            function MarketCityInfoPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isFxShow = false;
                _this.PATH_JINBI = "fx/jinbi_01.part";
                _this.NAME_ITEMDISPATCH = "DispatchItem";
                _this.rewardItems = [];
                return _this;
            }
            MarketCityInfoPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_btnGet.onClick(this, this.OnBtnGetclick);
                Laya.loader.load(this.PATH_JINBI, Handler.create(this, this.OnAssetsLoaded), null, Loader.JSON);
                this.InitDispatch();
                this.InitAssetSpeed();
                this.InitAssets();
                this.InitRewards();
            };
            MarketCityInfoPanel.prototype.UpdateView = function (cityId) {
                this.cityData = Game.moduleModel.market.GetCity(cityId);
                this.dispatchList = this.cityData.isHome ? Game.moduleModel.market.GetAmbassador() : null;
                this.m_listActor.numItems = 5;
                if (this.cityData.isHome) {
                    this.m_listAssetSpeed.numItems = 2;
                    this.m_listAsset.numItems = 2;
                }
                else {
                    this.m_listAssetSpeed.numItems = 0;
                    this.m_listAsset.numItems = 0;
                }
                this.cityRewardList = Game.moduleModel.market.GetCityReward(this.cityData.id);
                this.m_listReward.numItems = this.cityRewardList.length;
                this.m_cityName.text = this.cityData.name;
                this.m_isHome.setSelectedIndex(this.cityData.isHome ? 1 : 0);
                this.StopAddAsset();
                if (this.cityData.isHome) {
                    this.ShowFx();
                    this.StartAddAsset();
                    this.m_btnGet.enabled = true;
                }
                else {
                    this.m_btnGet.enabled = false;
                    this.HideFx();
                }
                this.m_btnGet.enabled = Game.time.getSubSecondsPre(Game.moduleModel.market.Info.lastDropTimestamp) > 5;
            };
            MarketCityInfoPanel.prototype.StartAddAsset = function () {
                Laya.timer.loop(5000, this, this.UpdateAddAsset);
            };
            MarketCityInfoPanel.prototype.UpdateAddAsset = function () {
                this.m_labAniGold.title = Math.ceil(Game.moduleModel.market.GetCityGoldSpeed() * 5).toString();
                this.m_labAniFans.title = Math.ceil(Game.moduleModel.market.GetCityFansSpeed() * 5).toString();
                this.m_trAddAsset.play(new Handler(this, this.UpdateAsset, null, false));
                this.m_btnGet.enabled = Game.time.getSubSecondsPre(Game.moduleModel.market.Info.lastDropTimestamp) > 5;
            };
            MarketCityInfoPanel.prototype.UpdateAsset = function () {
                if (this.cityData.isHome) {
                    this.m_listAsset.numItems = 2;
                }
                else {
                    this.m_listAsset.numItems = 0;
                }
            };
            MarketCityInfoPanel.prototype.StopAddAsset = function () {
                Laya.timer.clear(this, this.UpdateAddAsset);
            };
            MarketCityInfoPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketCityInfoPanel.prototype.Hide = function () {
                this.visible = false;
            };
            MarketCityInfoPanel.prototype.InitDispatch = function () {
                this.m_listActor.itemRenderer = Handler.create(this, this.RenderDispatchList, null, false);
                this.m_listActor.on(fairygui.Events.CLICK_ITEM, this, this.OnDispatchClick);
            };
            MarketCityInfoPanel.prototype.RenderDispatchList = function (index, obj) {
                var item = obj;
                item.name = this.NAME_ITEMDISPATCH + index;
                if (this.cityData == null) {
                    return;
                }
                item.setPivot(0.5, 0.5);
                if (this.dispatchList == null) {
                    item.m_state.setSelectedIndex(1);
                    return;
                }
                var id = this.dispatchList[index];
                if (id == null || id == 0) {
                    item.m_state.setSelectedIndex(1);
                    return;
                }
                var data = Game.config.actor.getConfig(id);
                item.m_state.setSelectedIndex(2);
                item.icon = Game.moduleModel.market.GetActorIcon(id);
            };
            MarketCityInfoPanel.prototype.OnDispatchClick = function (obj) {
                var _this = this;
                var item = obj;
                if (this.cityData.isHome == false) {
                    // TODO 弹窗；
                    Game.system.confirmText("只能在经营总部所在城市派驻形象大使，是否更换总部", "更换总部所在城市", this, function () { _this.OnDispatch(item); });
                    return;
                }
                this.OnDispatch(item);
            };
            MarketCityInfoPanel.prototype.OnDispatch = function (item) {
                var _this = this;
                // if (item.m_state.selectedIndex == 0) {
                // 	return;
                // }
                var itemIndex = parseInt(item.name.substr(this.NAME_ITEMDISPATCH.length));
                this.HideFx();
                this.StopAddAsset();
                var demandList = Game.moduleModel.market.GetCityDemand(this.cityData.id, itemIndex);
                var dispatch = this.cityData.isHome ? Game.moduleModel.market.GetAmbassador() : [];
                this.window.ShowSelectActor(function (actor, tweenRect) {
                    _this.OnSelect(itemIndex, actor, tweenRect);
                }, demandList, dispatch);
            };
            MarketCityInfoPanel.prototype.InitAssetSpeed = function () {
                this.m_listAssetSpeed.itemRenderer = Handler.create(this, this.RenderAssetSpeedList, null, false);
                // list.numItems = this.cityData.cityAsset.length;
            };
            MarketCityInfoPanel.prototype.RenderAssetSpeedList = function (index, obj) {
                var item = obj;
                // var data: CityAsset = this.cityData.cityAsset[index];
                item.setPivot(0.5, 0.5);
                var speed = 0;
                if (index == 0) {
                    speed = Math.ceil(Game.moduleModel.market.GetCityGoldSpeed() * 3600);
                    item.icon = Game.moduleModel.item.getItem(2).itemIconUrl;
                }
                else {
                    speed = Math.ceil(Game.moduleModel.market.GetCityFansSpeed() * 3600);
                    item.icon = Game.moduleModel.item.getItem(5).itemIconUrl;
                }
                // item.title = this.NumberNormalization(speed) + "/小时";
                item.normalNumbs("{0}小时", speed);
            };
            MarketCityInfoPanel.prototype.InitAssets = function () {
                var list = this.m_listAsset;
                list.itemRenderer = Handler.create(this, this.RenderAssetList, null, false);
            };
            MarketCityInfoPanel.prototype.RenderAssetList = function (index, obj) {
                var item = obj;
                item.setPivot(0.5, 0.5);
                var count = 0;
                var limit = 0;
                if (index == 0) {
                    item.icon = Game.moduleModel.item.getItem(2).itemIconUrl;
                    count = Game.moduleModel.market.GetCurGold();
                    limit = Game.moduleModel.market.GetGoldLimit();
                    if (count >= limit) {
                        count = limit;
                        item.m_trColor.setSelectedIndex(3);
                    }
                    else {
                        item.m_trColor.setSelectedIndex(count >= 10000 ? 1 : 0);
                    }
                }
                else {
                    item.icon = Game.moduleModel.item.getItem(5).itemIconUrl;
                    count = Game.moduleModel.market.GetCurFans();
                    limit = Game.moduleModel.market.GetFansLimit();
                    if (count >= limit) {
                        count = limit;
                        item.m_trColor.setSelectedIndex(3);
                    }
                    else {
                        item.m_trColor.setSelectedIndex(count >= 10000 ? 1 : 0);
                    }
                }
                // item.title = this.NumberNormalization(count) + "/" + this.NumberNormalization(limit);
                item.normalNumbs("{0}/{1}", count, limit);
            };
            MarketCityInfoPanel.prototype.InitRewards = function () {
                var list = this.m_listReward;
                list.itemRenderer = Handler.create(this, this.RenderRewardList, null, false);
            };
            MarketCityInfoPanel.prototype.RenderRewardList = function (index, obj) {
                var viewItem = obj;
                var id = this.cityRewardList[index];
                viewItem.setPivot(0.5, 0.5);
                var item = Game.moduleModel.item.getItem(id);
                viewItem.icon = item.itemIconUrl;
                viewItem.m_star.starNum = item.itemStar;
                if (this.cityData.isHome) {
                    viewItem.m_state.setSelectedIndex(Game.moduleModel.market.GetAmbassadorNum() > index ? 1 : 0);
                }
                else {
                    viewItem.m_state.setSelectedIndex(0);
                }
            };
            MarketCityInfoPanel.prototype.OnBtnGetclick = function () {
                if (this.cityData.isHome) {
                    var goldItem = new DTItemNum();
                    goldItem.itemId = 2;
                    goldItem.itemNum = Game.moduleModel.market.GetCurGold();
                    var fansItem = new DTItemNum();
                    fansItem.itemId = 5;
                    fansItem.itemNum = Game.moduleModel.market.GetCurFans();
                    this.rewardItems = [];
                    this.rewardItems.push(goldItem);
                    this.rewardItems.push(fansItem);
                    Game.protosender.city.GetReward("", this.cityData.id);
                }
            };
            MarketCityInfoPanel.prototype.OnGetReward = function () {
                Game.system.getRewardText(this.rewardItems, "获得收益", 4);
                this.UpdateView(this.cityData.id);
                this.m_listAsset.numItems = 2;
            };
            MarketCityInfoPanel.prototype.OnSelect = function (index, actor, tweenRect) {
                if (actor == null) {
                    this.ShowFx();
                    return;
                }
                this.animSelectActorStruct = { index: index, actor: actor, tweenRect: tweenRect };
                Game.moduleModel.market.SendSetAmbassador("", this.cityData.id, index, actor);
            };
            MarketCityInfoPanel.prototype.OnsSetAmbassador = function () {
                var _this = this;
                this.window.conent.m_selectActorPanel.Hide();
                this.window.conent.UpdateView();
                if (this.animSelectActorStruct) {
                    var itemIndex = this.animSelectActorStruct.index;
                    var tweenRect = this.animSelectActorStruct.tweenRect;
                    var actorId = this.animSelectActorStruct.actor;
                    var item = this.m_listActor.getChildAt(itemIndex);
                    // this.RenderDispatchList(itemIndex, item)
                    var icon_1 = item.m_icon;
                    icon_1.visible = false;
                    var fromRect = this.globalToLocalRect(tweenRect.x, tweenRect.y, tweenRect.width, tweenRect.height);
                    var iconGlobalRect = item.localToGlobalRect(icon_1.x, icon_1.y, icon_1.width, icon_1.height);
                    var toRect = this.globalToLocalRect(iconGlobalRect.x, iconGlobalRect.y, iconGlobalRect.width, iconGlobalRect.height);
                    this.m_tweenIcon.visible = true;
                    this.m_tweenIcon.url = Game.moduleModel.market.GetActorIcon(actorId);
                    DoTween.TweenRect(this.m_tweenIcon, fromRect, toRect, 300, null, Handler.create(this, function () { icon_1.visible = true; _this.m_tweenIcon.visible = false; }));
                }
                this.animSelectActorStruct = null;
            };
            MarketCityInfoPanel.prototype.OnClose = function () {
                this.HideFx();
                this.StopAddAsset();
            };
            MarketCityInfoPanel.prototype.OnDestory = function () {
                this.fxJinbi.destroy();
            };
            MarketCityInfoPanel.prototype.OnAssetsLoaded = function (settings) {
                this.fxJinbi = new Laya.Particle2D(settings);
                Laya.stage.addChild(this.fxJinbi);
                var point = this.m_posJinbi.localToGlobal();
                this.fxJinbi.x = point.x;
                this.fxJinbi.y = point.y;
                if (this.isFxShow) {
                    this.ShowFx();
                    this.StartAddAsset();
                }
                else {
                    this.HideFx();
                    this.StopAddAsset();
                }
            };
            MarketCityInfoPanel.prototype.ShowFx = function () {
                this.isFxShow = true;
                if (this.fxJinbi == null) {
                    return;
                }
                if (this.fxJinbi == null)
                    return;
                this.fxJinbi.visible = true;
                this.fxJinbi.emitter.start();
                this.fxJinbi.play();
            };
            MarketCityInfoPanel.prototype.HideFx = function () {
                this.isFxShow = false;
                if (this.fxJinbi == null) {
                    return;
                }
                this.fxJinbi.stop();
                this.fxJinbi.visible = false;
            };
            return MarketCityInfoPanel;
        }(PfSkin.MarketCityInfoPanelStruct));
        PfSkin.MarketCityInfoPanel = MarketCityInfoPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCityInfoPanel.js.map
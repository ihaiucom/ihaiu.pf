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
        var MarketPublicityPanel = /** @class */ (function (_super) {
            __extends(MarketPublicityPanel, _super);
            function MarketPublicityPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.publicRewards = [];
                return _this;
            }
            MarketPublicityPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoAPIEventKey.city_Propaganda, this.OnsPropaganda, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.city_SetPropagandaActor, this.OnsSetPropagandaActor, this);
            };
            MarketPublicityPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.city_Propaganda, this.OnsPropaganda, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.city_SetPropagandaActor, this.OnsSetPropagandaActor, this);
            };
            MarketPublicityPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_topPanel.InitView(this, this.OnCloseClick, [3]);
                this.m_btnAddActor.onClick(this, this.OnBtnAddActorClick);
                this.m_btnPublicity.onClick(this, this.OnBtnPublicityClick);
                this.m_btnFinish.onClick(this, this.OnPublicityFinish);
                this.m_tabSelfmotion.onClick(this, this.OnTabSelfmotionChangState);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardsItem, null, false);
                this.Hide();
            };
            MarketPublicityPanel.prototype.UpdateView = function () {
                // this.m_topPanel.updateAsset();
                this.pointData = Game.moduleModel.market.GetLastStreet();
                this.rewardList = Game.config.street.getConfig(this.pointData.id).finale_reward;
                this.m_listReward.numItems = this.rewardList.length;
                this.selectActor = Game.moduleModel.market.Info.propagandaActor;
                this.m_progress.value = this.pointData.progress;
                this.m_active.setSelectedIndex(0);
                this.m_labCost.title = Game.moduleModel.market.GetPublicityCost().toString();
                this.m_demand.text = Game.moduleModel.market.GetPublicityDemandText();
                this.m_actorDemand.text = Game.moduleModel.market.GetStreetDemandText();
                this.m_name.text = this.pointData.name;
                if (this.selectActor != null) {
                    this.m_btnAddActor.m_state.setSelectedIndex(2);
                    this.m_btnAddActor.icon = Game.moduleModel.market.GetActorIcon(this.selectActor);
                }
                else {
                    this.m_btnAddActor.m_state.setSelectedIndex(1);
                }
                this.m_btnPublicity.enabled;
            };
            MarketPublicityPanel.prototype.OnTabSelfmotionChangState = function () {
                if (this.m_tabSelfmotion.m_button.selectedIndex == 1) {
                    Game.system.confirmText("您还没有购买终身秘书，是否立即购买");
                }
            };
            MarketPublicityPanel.prototype.RenderRewardsItem = function (index, obj) {
                var data = this.rewardList[index];
                var item = obj;
                item.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
                item.title = data.itemNum.toString();
            };
            MarketPublicityPanel.prototype.OnCloseClick = function () {
                this.window.conent.UpdateView();
                this.Hide();
            };
            MarketPublicityPanel.prototype.OnBtnAddActorClick = function () {
                var _this = this;
                // TODO 选择演员
                var demandList = Game.moduleModel.market.GetStreetDemand();
                var dispatch = Game.moduleModel.market.GetPropagandaActor();
                var dispatchList = dispatch == 0 ? [] : [dispatch];
                this.window.ShowSelectActor(function (actor, tweenRect) {
                    _this.OnActorSelect(actor, tweenRect);
                }, demandList, dispatchList);
            };
            MarketPublicityPanel.prototype.OnActorSelect = function (actor, tweenRect) {
                if (actor == null) {
                    return;
                }
                this.animSelectActorStruct = { actor: actor, tweenRect: tweenRect };
                Game.protosender.city.SetPropagandaActor("", this.pointData.city, this.pointData.id, actor);
            };
            MarketPublicityPanel.prototype.OnsSetPropagandaActor = function (msg) {
                this.window.conent.m_selectActorPanel.Hide();
                this.UpdateView();
                this.PlaySelectAnim();
            };
            MarketPublicityPanel.prototype.PlaySelectAnim = function () {
                var _this = this;
                var actor = this.animSelectActorStruct.actor;
                var tweenRect = this.animSelectActorStruct.tweenRect;
                var mIcon = this.m_btnAddActor.m_icon;
                var fromRect = this.globalToLocalRect(tweenRect.x, tweenRect.y, tweenRect.width, tweenRect.height);
                var iconGlobalRect = this.m_btnAddActor.localToGlobalRect(mIcon.x, mIcon.y, mIcon.width, mIcon.height);
                var toRect = this.globalToLocalRect(iconGlobalRect.x, iconGlobalRect.y, mIcon.width, iconGlobalRect.height);
                mIcon.visible = false;
                this.m_tweenIcon.visible = true;
                this.m_tweenIcon.url = Game.moduleModel.market.GetActorIcon(actor);
                DoTween.TweenRect(this.m_tweenIcon, fromRect, toRect, 300, null, Handler.create(this, function () {
                    mIcon.visible = true;
                    _this.m_tweenIcon.visible = false;
                }));
            };
            MarketPublicityPanel.prototype.OnBtnPublicityClick = function () {
                this.PublicityOnce();
            };
            MarketPublicityPanel.prototype.PublicityOnce = function () {
                var cost = this.pointData.Config.publicize_cost;
                if (Game.moduleModel.item.hasItemNum(3, cost)) {
                    this.m_btnPublicity.enabled = false;
                    this.publicRewards = Game.moduleModel.market.GetPublicRewards(this.pointData);
                    Game.protosender.city.Propaganda("", this.pointData.city, this.pointData.id);
                }
                else {
                    Game.system.alertText("美元不足");
                }
            };
            MarketPublicityPanel.prototype.OnsPropaganda = function (msg) {
                if (Game.moduleModel.market.Info.lastArea == this.pointData.id) {
                    this.UpdateView();
                }
                else {
                    this.m_progress.value = 100;
                }
                this.m_t0.play(Handler.create(this, this.OnPublicityTransFinish));
            };
            MarketPublicityPanel.prototype.OnPublicityTransFinish = function () {
                Game.system.getRewardText(this.publicRewards, "获得奖励", 3);
                this.m_btnPublicity.enabled = true;
                if (Game.moduleModel.market.Info.lastArea != this.pointData.id || Game.moduleModel.market.Info.lastAreaProgress == 100) {
                    this.ShowFinishView();
                }
                else {
                    this.UpdateView();
                    if (this.m_tabSelfmotion.m_button.selectedIndex == 1) {
                        this.PublicityOnce();
                    }
                }
            };
            MarketPublicityPanel.prototype.ShowFinishView = function () {
                this.m_active.setSelectedIndex(1);
            };
            MarketPublicityPanel.prototype.OnPublicityFinish = function () {
                this.Hide();
                this.window.OnPublicityFinish();
            };
            MarketPublicityPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketPublicityPanel.prototype.Hide = function () {
                this.visible = false;
            };
            return MarketPublicityPanel;
        }(PfSkin.MarketPublicityPanelStruct));
        PfSkin.MarketPublicityPanel = MarketPublicityPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketPublicityPanel.js.map
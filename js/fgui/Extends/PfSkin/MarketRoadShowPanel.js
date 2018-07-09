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
        var MarketRoadShowPanel = /** @class */ (function (_super) {
            __extends(MarketRoadShowPanel, _super);
            function MarketRoadShowPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.PATH_SKMD = "res/ani/MD/MD.sk";
                _this.isAniLoad = false;
                _this.isStart = false;
                _this.aniSpeed = 2;
                return _this;
            }
            MarketRoadShowPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoAPIEventKey.city_Roadshow, this.OnsRoadshow, this);
            };
            MarketRoadShowPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.city_Roadshow, this.OnsRoadshow, this);
            };
            MarketRoadShowPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_btnSkip.onClick(this, this.OnBtnSkipClick);
                this.m_btnFinish.onClick(this, this.OnBtnFinishClick);
                this.LoadSkeleton(this.PATH_SKMD);
                this.m_listActor.itemRenderer = new Handler(this, this.RenderActorItem, null, false);
                this.Hide();
            };
            MarketRoadShowPanel.prototype.UpdateView = function () {
                this.m_state.setSelectedIndex(0);
                this.cityData = Game.moduleModel.market.GetLastCity();
                this.actorList = Game.moduleModel.market.GetActorList();
                this.m_listActor.numItems = this.actorList.length;
                this.show_need = Game.config.city.getConfig(this.cityData.id).show_need;
                this.m_progress.max = this.show_need;
                this.m_progress.value = 0;
                this.isStart = true;
                this.TryStartAnim();
            };
            MarketRoadShowPanel.prototype.UpdateLocal = function () {
                this.m_state.setSelectedIndex(0);
                this.cityData = Game.moduleModel.market.GetLastCity();
                this.actorList = Game.moduleModel.market.GetActorList();
                this.m_listActor.numItems = 3;
                this.show_need = Game.config.city.getConfig(this.cityData.id).show_need;
                this.m_progress.max = this.show_need;
                this.m_progress.value = 0;
                this.isStart = true;
                this.TryStartAnim();
            };
            MarketRoadShowPanel.prototype.OnsRoadshow = function (msg) {
                var res = msg.result;
                this.window.conent.m_occupyPanel.OnsRoadshow();
            };
            MarketRoadShowPanel.prototype.TryStartAnim = function () {
                if (this.isStart && this.isAniLoad) {
                    this.StartAnim();
                    return true;
                }
                return false;
            };
            MarketRoadShowPanel.prototype.StartAnim = function () {
                var _this = this;
                this.skMD.visible = true;
                laya.utils.Tween.to(this.skMD, { x: this.m_aniActor.x }, this.aniSpeed * 200);
                var num = this.m_listActor.numItems;
                if (num == 0) {
                    this.AnimFinish();
                    return;
                }
                var actor = this.actorList[this.m_listActor.numItems - 1];
                setTimeout(function () {
                    _this.m_labTalk.visible = true;
                    var name = actor.name;
                    var company = User.info.name;
                    var str = "\u4ECA\u5929\u6709\u5E78\u5728\u8FD9\u91CC\u4E3A\u5404\u4F4D\u732E\u4E0A" + company + "\u516C\u53F8\u8DEF\u6F14\u6D3B\u52A8\uFF0C\u89C2\u4F17\u4EEC\uFF01High\u8D77\u6765\u4E86\u5417\uFF1F\uFF01\u8BF7\u5927\u5BB6\u638C\u58F0\u6B22\u8FCE" + name + "\uFF01";
                    _this.m_labTalk.title = str;
                    _this.skMD.play(1, false);
                }, this.aniSpeed * 200);
                setTimeout(function () {
                    _this.m_labTalk.visible = false;
                    laya.utils.Tween.to(_this.skMD, { x: 1000 }, _this.aniSpeed * 200);
                }, this.aniSpeed * 800);
                setTimeout(function () {
                    _this.AnimActorTalk();
                }, this.aniSpeed * 1000);
            };
            MarketRoadShowPanel.prototype.AnimMCTalk = function () {
                var _this = this;
                if (this.m_progress.value == this.show_need) {
                    this.AnimFinish();
                    return;
                }
                var num = this.m_listActor.numItems;
                if (num == 0) {
                    this.AnimFinish();
                    return;
                }
                laya.utils.Tween.to(this.skMD, { x: this.m_aniActor.x }, this.aniSpeed * 200);
                var actor = this.actorList[this.m_listActor.numItems - 1];
                setTimeout(function () {
                    _this.m_labTalk.visible = true;
                    var name = actor.name;
                    var str = "\u4E0B\u9762\u4E0A\u53F0\u7684\u662F" + name + "\uFF01";
                    _this.m_labTalk.title = str;
                    _this.skMD.play(1, false);
                }, this.aniSpeed * 200);
                setTimeout(function () {
                    _this.m_labTalk.visible = false;
                    laya.utils.Tween.to(_this.skMD, { x: 1000 }, _this.aniSpeed * 200);
                }, this.aniSpeed * 800);
                setTimeout(function () {
                    _this.AnimActorTalk();
                }, this.aniSpeed * 1000);
            };
            MarketRoadShowPanel.prototype.AnimActorTalk = function () {
                var _this = this;
                var num = this.m_listActor.numChildren;
                this.m_listActor.numItems = this.m_listActor.numItems - 1;
                var actor = this.actorList[this.m_listActor.numItems];
                this.m_loadCurrentActor.url = Game.moduleModel.market.GetActorIcon(actor.id);
                this.m_tweenItem.icon = Game.moduleModel.market.GetActorIcon(actor.id);
                this.m_aniIcon.play();
                laya.utils.Tween.to(this.skMD, { x: this.m_aniActor.x }, this.aniSpeed * 200);
                setTimeout(function () {
                    _this.m_labTalk.visible = true;
                    var name = actor.name;
                    var str = "\u5927\u5BB6\u597D\u5440\uFF01\u6211\u662F" + name + "\uFF0C\u8BF7\u5927\u5BB6\u591A\u591A\u652F\u6301\u6211\u4EEC\u516C\u53F8\uFF01";
                    _this.m_labTalk.title = str;
                    _this.skMD.play(1, false);
                }, this.aniSpeed * 200);
                setTimeout(function () {
                    _this.UpdateProgress(actor);
                    _this.m_labTalk.visible = false;
                    laya.utils.Tween.to(_this.skMD, { x: 1000 }, _this.aniSpeed * 200);
                }, this.aniSpeed * 800);
                setTimeout(function () {
                    _this.AnimMCTalk();
                }, this.aniSpeed * 1000);
            };
            MarketRoadShowPanel.prototype.AnimFinish = function () {
                var _this = this;
                laya.utils.Tween.to(this.skMD, { x: this.m_aniActor.x }, this.aniSpeed * 200);
                var str;
                if (Game.moduleModel.market.Info.roadShowFlag) {
                    str = "我宣布，{0}公司的路演活动圆满结束！";
                }
                else {
                    str = "观众们的热情不够啊，{0}公司的路演还差一点热度，希望他们再接再厉！";
                }
                setTimeout(function () {
                    _this.m_labTalk.visible = true;
                    var company = User.info.name;
                    _this.m_labTalk.title = str.format(company);
                    _this.skMD.play(1, false);
                }, this.aniSpeed * 200);
                setTimeout(function () {
                    _this.OnAnimFinish();
                }, this.aniSpeed * 800);
            };
            MarketRoadShowPanel.prototype.OnAnimFinish = function () {
                this.isStart = false;
                this.skMD.visible = false;
                this.OnFinish();
            };
            MarketRoadShowPanel.prototype.UpdateProgress = function (actor) {
                var total = actor.art + actor.plot + actor.perform + actor.spectacle + actor.entertainment;
                total = this.m_progress.value + total;
                if (total >= this.show_need) {
                    total = this.show_need;
                }
                this.m_progress.m_aniProgress.play();
                this.m_progress.value = total;
            };
            MarketRoadShowPanel.prototype.RenderActorItem = function (index, obj) {
                var data = this.actorList[index];
                obj.icon = Game.moduleModel.market.GetActorIcon(data.id);
            };
            MarketRoadShowPanel.prototype.LoadSkeleton = function (path) {
                var _this = this;
                if (this.skMD != null) {
                    return;
                }
                var templete = new Laya.Templet();
                templete.on(Laya.Event.COMPLETE, this, function () { _this.OnSkeletonLoad(templete); });
                templete.on(Laya.Event.ERROR, this, this.onSkeletonError);
                templete.loadAni(path);
            };
            MarketRoadShowPanel.prototype.OnSkeletonLoad = function (templete) {
                this.skMD = templete.buildArmature(0);
                var pos = this.localToGlobal(this.m_aniActor.x, this.m_aniActor.y);
                this.skMD.pos(pos.x, pos.y);
                this.skMD.showSkinByIndex(1);
                Laya.stage.addChild(this.skMD);
                // this.skMD.visible = false;
                this.isAniLoad = true;
                this.TryStartAnim();
            };
            MarketRoadShowPanel.prototype.onSkeletonError = function () {
            };
            MarketRoadShowPanel.prototype.OnFinish = function () {
                if (Game.moduleModel.market.Info.roadShowFlag) {
                    this.OnSuccess();
                }
                else {
                    this.OnFail();
                }
            };
            MarketRoadShowPanel.prototype.OnSuccess = function () {
                this.m_state.setSelectedIndex(1);
            };
            MarketRoadShowPanel.prototype.OnFail = function () {
                this.m_state.setSelectedIndex(2);
            };
            MarketRoadShowPanel.prototype.OnBtnSkipClick = function () {
                this.OnAnimFinish();
            };
            MarketRoadShowPanel.prototype.OnBtnFinishClick = function () {
                this.Hide();
                this.window.OnRoadShowFinish();
            };
            MarketRoadShowPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketRoadShowPanel.prototype.Hide = function () {
                this.visible = false;
                if (this.skMD != null) {
                    this.skMD.visible = false;
                    this.skMD.play(0, true);
                }
            };
            return MarketRoadShowPanel;
        }(PfSkin.MarketRoadShowPanelStruct));
        PfSkin.MarketRoadShowPanel = MarketRoadShowPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketRoadShowPanel.js.map
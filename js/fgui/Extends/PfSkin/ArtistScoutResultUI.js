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
        var ArtistScoutResultUI = /** @class */ (function (_super) {
            __extends(ArtistScoutResultUI, _super);
            function ArtistScoutResultUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistScoutResultUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_resetBtn.text = Games.TEXT.ResetNose;
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_resetBtn.onClick(this, this.onClickResetBtn);
                this.m_speedBtn.onClick(this, this.onClickSpeedBtn);
            };
            /**
             * 点击探查艺人 不消耗道具
             */
            ArtistScoutResultUI.prototype.onClickResetBtn = function () {
                if (Game.moduleModel.actor.actorIsMax) {
                    Game.system.toastText(Games.TEXT.ActorMax);
                }
                else {
                    Game.system.confirmText(Games.TEXT.SureResetActors, null, null, function () {
                        //再次探查艺人
                        Game.protosender.Actor.noseInfoActor(false);
                    });
                }
            };
            /**
             * 点击探查艺人 消耗道具
             */
            ArtistScoutResultUI.prototype.onClickSpeedBtn = function () {
                if (Game.moduleModel.actor.actorIsMax) {
                    Game.system.toastText(Games.TEXT.ActorMax);
                }
                else {
                    var cost = GlobalConfig.getValue1(GlobalKey.KEY_1008);
                    Game.system.confirmBuyText(Games.TEXT.AlertTextScountActor, cost, null, function () {
                        if (Games.ItemHelper.checkItemEnough3(cost)) {
                            //再次探查艺人
                            Game.protosender.Actor.noseInfoActor(true);
                        }
                        else {
                            //道具不足提示
                            Game.system.toastItemNotEnough(cost[0]);
                        }
                    });
                }
            };
            /**
             *界面
             */
            ArtistScoutResultUI.prototype.updateView = function () {
                this.scoutActors = User.info.noseIntoActorList;
                this.m_list.numItems = this.scoutActors.length;
                this.m_dianzan.text = formatNumberUnit(Game.moduleModel.item.getItemNum(6));
                this.m_zuanshi.text = formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.diamond));
                this.startTime();
            };
            /**
             * 更新单条数据
             * @param index
             * @param item
             */
            ArtistScoutResultUI.prototype.onUpdateItem = function (index, item) {
                var rItem = item;
                rItem.updateView(this.scoutActors[index]);
            };
            /**
             * 开始倒计时
             */
            ArtistScoutResultUI.prototype.startTime = function () {
                var nowTimes = getTimeStamp();
                //探查时间CD
                var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002) + GlobalConfig.getValue(GlobalKey.KEY_1003) * (User.info.noseIntoNum - 1);
                var resetTimes = User.info.noseIntoTime + otherTime * 60;
                this.resetTimes = 0;
                if (resetTimes > nowTimes) {
                    this.resetTimes = resetTimes - nowTimes;
                }
                //艺人离开时间
                var leaveTimes = User.info.noseIntoActorEffectTime;
                if (leaveTimes > nowTimes) {
                    this.leaveTimes = leaveTimes - nowTimes;
                }
                Laya.timer.clear(this, this.onUpdateTime);
                if (this.leaveTimes > 0 || this.resetTimes > 0) {
                    Laya.timer.loop(1000, this, this.onUpdateTime, null, true, true);
                }
                this.updateTimeView();
            };
            /**更新时间 */
            ArtistScoutResultUI.prototype.onUpdateTime = function () {
                //重置次数时间
                if (this.resetTimes > 0) {
                    this.resetTimes--;
                    if (this.resetTimes < 0) {
                        this.resetTimes = 0;
                    }
                }
                //离开时间
                if (this.leaveTimes > 0) {
                    this.leaveTimes--;
                    if (this.leaveTimes <= 0) {
                        this.leaveTimes = 0;
                        this.moduleWindow.onClickCloseBtn();
                    }
                }
                this.updateTimeView();
            };
            /**
             * 更新时间后的显示
             */
            ArtistScoutResultUI.prototype.updateTimeView = function () {
                if (this.resetTimes > 0) {
                    this.m_speedBtn.text = Games.TimeHelper.TimeFormat(this.resetTimes);
                    this.m_speedBtn.visible = true;
                    this.m_resetBtn.visible = false;
                }
                else {
                    this.m_speedBtn.visible = false;
                    this.m_resetBtn.visible = true;
                }
                if (this.leaveTimes > 0) {
                    this.m_leaveLabel.text = format(Games.TEXT.ActorWillLeave, Games.TimeHelper.TimeFormat2(this.leaveTimes));
                }
            };
            return ArtistScoutResultUI;
        }(PfSkin.ArtistScoutResultUIStruct));
        PfSkin.ArtistScoutResultUI = ArtistScoutResultUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutResultUI.js.map
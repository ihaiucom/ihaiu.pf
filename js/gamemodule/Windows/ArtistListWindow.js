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
var Games;
(function (Games) {
    //======================
    // 艺人窗口
    //----------------------
    var ArtistListWindow = /** @class */ (function (_super) {
        __extends(ArtistListWindow, _super);
        function ArtistListWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ArtistUI);
            return _this;
        }
        // 生成动态预加载资源
        ArtistListWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6001));
        };
        // 菜单创建
        ArtistListWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ArtistUI.createInstance();
            this.conent.m_list.setVirtual();
            this.conent.m_list.itemRenderer = Handler.create(this, this.onUpdateItemList, null, false);
            this.conent.m_list.scrollItemToViewOnClick = false;
            this.conent.m_haixuanBtn.visible = false;
            this.conent.m_xingtanBtn.m_red.visible = false;
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        ArtistListWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            //更新界面
            this.showListPanel();
        };
        /**
         * 开始倒计时
         */
        ArtistListWindow.prototype.startTime = function () {
            Laya.timer.clear(this, this.onUpdateTime);
            var nowTimes = getTimeStamp();
            //探查时间CD
            var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002) + GlobalConfig.getValue(GlobalKey.KEY_1003) * (User.info.noseIntoNum - 1);
            var resetTimes = User.info.noseIntoTime + otherTime * 60;
            this.resetTimes = 0;
            if (resetTimes > nowTimes) {
                this.resetTimes = resetTimes - nowTimes;
            }
            Laya.timer.clear(this, this.onUpdateTime);
            if (this.resetTimes > 0) {
                this.startTimeHandler();
            }
            else {
                this.stopTimeHandler();
            }
        };
        ArtistListWindow.prototype.startTimeHandler = function () {
            this.conent.m_time.visible = true;
            this.conent.m_findBtn.text = Games.TEXT.ScountActor;
            this.updateRemainTime(0);
            this.conent.m_findBtn.m_number.text = GlobalConfig.getValue1(GlobalKey.KEY_1001)[1] + "";
            Laya.timer.loop(1000, this, this.onUpdateTime, null, true, true);
            this.updateTimeView();
        };
        ArtistListWindow.prototype.stopTimeHandler = function () {
            this.updateRemainTime(1);
            this.conent.m_findBtn.text = Games.TEXT.ScountActor;
            this.conent.m_findBtn.m_number.text = formatNumberUnit(GlobalConfig.getValue1(GlobalKey.KEY_1001)[1]);
            this.conent.m_time.visible = false;
        };
        /**
         *更新时间
         */
        ArtistListWindow.prototype.onUpdateTime = function () {
            //重置次数时间
            if (this.resetTimes >= 0) {
                this.resetTimes--;
                if (this.resetTimes < 0) {
                    this.resetTimes = 0;
                    this.startTime();
                }
            }
            this.updateTimeView();
        };
        /**
         *更新时间
         */
        ArtistListWindow.prototype.updateTimeView = function () {
            this.conent.m_time.text = format(Games.TEXT.AfterToScountActor, Games.TimeHelper.TimeFormat2(this.resetTimes));
        };
        /**
         * 更新艺人单条内容
         * @param index
         * @param obj
         */
        ArtistListWindow.prototype.onUpdateItemList = function (index, obj) {
            var item = obj;
            item.updateView(this.actors[index]);
        };
        //  点击
        ArtistListWindow.prototype.onClickArtistItem = function (itemObject) {
            var index = this.conent.m_list.getChildIndex(itemObject);
            var realIndex = this.conent.m_list.childIndexToItemIndex(index);
            Game.menu.open(Games.MenuId.ArtistDetail, realIndex);
        };
        //增加槽位
        ArtistListWindow.prototype.onClickAddBtn = function () {
            Game.system.confirmBuyText(Games.TEXT.AlertTextBuyActor, GlobalConfig.getValue1(GlobalKey.KEY_1009), null, function () {
                Game.protosender.Actor.addActorSlot();
            });
        };
        /**
         * 点击探查按钮
         */
        ArtistListWindow.prototype.onClickFindBtn = function () {
            var self = this;
            function noseActor() {
                var enough = Games.ItemHelper.checkItemEnough3(GlobalConfig.getValue1(GlobalKey.KEY_1001));
                if (enough) {
                    self.isNoseActor = true;
                    //请求探查艺人
                    Game.protosender.Actor.noseInfoActor(self.resetTimes > 0);
                }
                else {
                    Game.system.toastText(format(Games.TEXT.ToastTextItemNotEnough, Game.config.item.getConfig(GlobalConfig.getValue1(GlobalKey.KEY_1001)[0]).name));
                }
            }
            if (Game.moduleModel.actor.actorIsMax) {
                Game.system.toastText(Games.TEXT.ActorMax);
            }
            else {
                if (this.resetTimes > 0) {
                    var cost = GlobalConfig.getValue1(GlobalKey.KEY_1008);
                    var s = format(Games.TEXT.AlertTextScountActor, cost[1], Game.config.item.getConfig(cost[0]).name);
                    Game.system.confirmText(s, null, null, function () {
                        var enough = Games.ItemHelper.checkItemEnough3(cost);
                        if (enough) {
                            noseActor();
                        }
                        else {
                            Game.system.toastText(format(Games.TEXT.ToastTextItemNotEnough, Game.config.item.getConfig(cost[0]).name));
                        }
                    });
                }
                else {
                    noseActor();
                }
            }
        };
        ArtistListWindow.prototype.onClickFrozenBtn = function () {
            Game.menu.open(Games.MenuId.ArtistFrozen);
        };
        //关闭
        ArtistListWindow.prototype.onClickCloseBtn = function () {
            if (this.isShowFindPanel) {
                this.showListPanel();
            }
            else {
                this.menuClose();
            }
        };
        //点击星探按钮
        ArtistListWindow.prototype.onClickXingTanBtn = function () {
            if (User.info.noseIntoActorList.length > 0) {
                //有探查艺人
                Game.menu.open(Games.MenuId.ArtistScoutResult);
            }
            else {
                //没有探查艺人
                this.showFindPanel();
            }
        };
        /**
         * 显示查找面板
         */
        ArtistListWindow.prototype.showFindPanel = function () {
            this.isShowFindPanel = true;
            this.conent.m_findPanel.visible = true;
            this.conent.m_listPanel.visible = false;
            if (User.info.noseIntoTime > 0) {
                //显示倒计时
                this.startTime();
            }
            else {
                this.stopTimeHandler();
            }
            this.conent.m_gold.text = formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.gold));
        };
        ArtistListWindow.prototype.updateRemainTime = function (remain) {
            //剩余次数
            this.conent.m_remianTime.text = format(Games.TEXT.RemainTimes, remain, GlobalConfig.getValue(GlobalKey.KEY_1013));
        };
        /**
         * 刷新列表显示
         */
        ArtistListWindow.prototype.showListPanel = function () {
            this.isShowFindPanel = false;
            this.conent.m_findPanel.visible = false;
            this.conent.m_listPanel.visible = true;
            this.actors = Game.moduleModel.actor.getActors();
            this.conent.m_canScount.text = format(Games.TEXT.CanScountActorNums, this.actors.length, User.info.maxActor);
            this.conent.m_list.numItems = this.actors.length;
            //星探卡
            this.conent.m_xingtanBtn.m_red.visible = Game.moduleModel.actor.isCanNoseActor;
        };
        /**
         * 更新界面
         */
        ArtistListWindow.prototype.openResultWindow = function () {
            if (this.isShowFindPanel == true) {
                //正在显示查找面板
                if (User.info.noseIntoActorList.length > 0) {
                    //有探查艺人
                    Game.menu.open(Games.MenuId.ArtistScoutResult);
                    this.showListPanel();
                }
            }
            else {
                this.updateListView();
            }
        };
        /**
         * 更新列表
         */
        ArtistListWindow.prototype.updateListView = function () {
            if (this.isShowFindPanel == false) {
                this.showListPanel();
            }
        };
        /**
         * 更新GameInfo数据
         */
        ArtistListWindow.prototype.onUpdateGameInfoHandler = function () {
            this.openResultWindow();
        };
        /**
         *
         * @param data 新增演员数据
         */
        ArtistListWindow.prototype.onAddActorHandler = function (data) {
            Game.menu.open(Games.MenuId.ArtistScoutSuccess, data);
            this.updateListView();
        };
        /**
         *艺人数据更新
         * @param data
         */
        ArtistListWindow.prototype.onUpdateActorHandler = function (data) {
            this.updateListView();
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ArtistListWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            this.conent.m_bgCom.m_closeBtn.onClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.onClick(this, this.onClickFrozenBtn);
            this.conent.m_xingtanBtn.onClick(this, this.onClickXingTanBtn);
            this.conent.m_findBtn.onClick(this, this.onClickFindBtn);
            this.conent.m_add.onClick(this, this.onClickAddBtn);
            this.conent.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickArtistItem);
            User.sGameInfoUpdate.add(this.onUpdateGameInfoHandler, this);
            Game.moduleModel.actor.sAddActorList.add(this.onAddActorHandler, this);
            Game.moduleModel.actor.sUpdateActorInfo.add(this.onUpdateActorHandler, this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ArtistListWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            Laya.timer.clear(this, this.onUpdateTime);
            this.conent.m_bgCom.m_closeBtn.offClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.offClick(this, this.onClickFrozenBtn);
            this.conent.m_xingtanBtn.offClick(this, this.onClickXingTanBtn);
            this.conent.m_findBtn.offClick(this, this.onClickFindBtn);
            this.conent.m_add.offClick(this, this.onClickAddBtn);
            this.conent.m_list.off(fairygui.Events.CLICK_ITEM, this, this.onClickArtistItem);
            User.sGameInfoUpdate.remove(this.onUpdateGameInfoHandler, this);
            Game.moduleModel.actor.sAddActorList.remove(this.onAddActorHandler, this);
            Game.moduleModel.actor.sUpdateActorInfo.remove(this.onUpdateActorHandler, this);
        };
        return ArtistListWindow;
    }(Games.MWindow));
    Games.ArtistListWindow = ArtistListWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ArtistListWindow.js.map
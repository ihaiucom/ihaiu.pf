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
    /**
     *页签
     */
    var ArtistDetailTabType;
    (function (ArtistDetailTabType) {
        ArtistDetailTabType[ArtistDetailTabType["Base"] = 0] = "Base";
        ArtistDetailTabType[ArtistDetailTabType["Skill"] = 1] = "Skill";
        ArtistDetailTabType[ArtistDetailTabType["Asset"] = 2] = "Asset";
        ArtistDetailTabType[ArtistDetailTabType["Expert"] = 3] = "Expert";
        ArtistDetailTabType[ArtistDetailTabType["Agent"] = 4] = "Agent";
    })(ArtistDetailTabType = Games.ArtistDetailTabType || (Games.ArtistDetailTabType = {}));
    var ArtistDetailSubType;
    (function (ArtistDetailSubType) {
        ArtistDetailSubType[ArtistDetailSubType["UseItem"] = 0] = "UseItem";
    })(ArtistDetailSubType = Games.ArtistDetailSubType || (Games.ArtistDetailSubType = {}));
    var ArtistDetailWindow = /** @class */ (function (_super) {
        __extends(ArtistDetailWindow, _super);
        function ArtistDetailWindow() {
            var _this = _super.call(this) || this;
            _this.tabstrs = [Games.TEXT.ActorTabBase, Games.TEXT.ActorTabSkill, Games.TEXT.ActorTabAsset, Games.TEXT.ActorTabExport, Games.TEXT.ActorTabAgent];
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ArtistDetailUI);
            return _this;
        }
        // 菜单创建
        ArtistDetailWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ArtistDetailUI.createInstance();
            this.contentPane = this.conent;
            this.center();
            this.createTabPanel();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            this.conent.m_tablist.itemRenderer = Handler.create(this, this.onUpdateTabItem, null, false);
            _super.prototype.onMenuCreate.call(this);
        };
        // 生成动态预加载资源
        ArtistDetailWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
        };
        //创建页签面板
        ArtistDetailWindow.prototype.createTabPanel = function () {
            this.basePanel = fgui.PfSkin.ArtistBasePanel.createInstance();
            this.skillPanel = fgui.PfSkin.ArtistSkillPanel.createInstance();
            this.assetPanel = fgui.PfSkin.ArtistAssetPanel.createInstance();
            this.expertPanel = fgui.PfSkin.ArtistExpertPanel.createInstance();
            this.agentPanel = fgui.PfSkin.ArtistAgentPanel.createInstance();
            this.conent.addChild(this.basePanel);
            this.conent.addChild(this.skillPanel);
            this.conent.addChild(this.assetPanel);
            this.conent.addChild(this.expertPanel);
            this.conent.addChild(this.expertPanel);
            this.basePanel.setXY(33, 510);
            this.skillPanel.setXY(33, 510);
            this.assetPanel.setXY(33, 510);
            this.expertPanel.setXY(33, 510);
            this.registerTab(ArtistDetailTabType.Base, this.basePanel);
            this.registerTab(ArtistDetailTabType.Skill, this.skillPanel);
            this.registerTab(ArtistDetailTabType.Asset, this.assetPanel);
            this.registerTab(ArtistDetailTabType.Expert, this.expertPanel);
            this.registerTab(ArtistDetailTabType.Expert, this.expertPanel);
            this.openTab(ArtistDetailTabType.Base);
        };
        // 菜单打开事件，传递参数
        ArtistDetailWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.openUpdateView();
            var args = parameter.args;
            this.currentActorIndex = args[0];
            var tabIndex = 0;
            if (args.length > 1) {
                tabIndex = args[1];
            }
            this.actors = Game.moduleModel.actor.getActors();
            this.currentIndex = tabIndex;
            this.conent.m_tablist.selectedIndex = this.currentIndex;
            this.updateActor();
        };
        /**
         * 刷新界面信息
         */
        ArtistDetailWindow.prototype.openUpdateView = function () {
            this.conent.m_tablist.on(fairygui.Events.CLICK_ITEM, this, this.clickTabItem);
            this.conent.m_tablist.numItems = this.tabstrs.length;
            this.conent.m_sendFloorBtn.visible = false;
            laya.events.MouseManager.multiTouchEnabled = false;
            this.startTouchPos = new laya.maths.Point();
        };
        ArtistDetailWindow.prototype.onUpdateTabItem = function (index, itemObject) {
            var tItem = itemObject;
            itemObject.text = this.tabstrs[index];
            tItem.m_red.visible = false;
        };
        ArtistDetailWindow.prototype.clickTabItem = function (itemObject) {
            var index = this.conent.m_tablist.getChildIndex(itemObject);
            if (index == ArtistDetailTabType.Agent) {
                this.conent.m_tablist.selectedIndex = this.currentIndex;
            }
            else {
                if (this.currentIndex != index) {
                    this.currentIndex = index;
                    this.openTab(index);
                }
            }
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ArtistDetailWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            this.conent.m_closeBtn.onClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.onClick(this, this.onClickFrozenBtn);
            this.conent.m_renameBtn.onClick(this, this.onClickRenameBtn);
            Game.moduleModel.actor.sUpdateActorInfo.add(this.onUpdateActorInfo, this);
            this.conent.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ArtistDetailWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            this.conent.clearProps();
            this.conent.m_closeBtn.offClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.offClick(this, this.onClickFrozenBtn);
            this.conent.m_renameBtn.offClick(this, this.onClickRenameBtn);
            Game.moduleModel.actor.sUpdateActorInfo.remove(this.onUpdateActorInfo, this);
            this.conent.off(laya.events.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        /**
         * 更新信息
         */
        ArtistDetailWindow.prototype.onUpdateActorInfo = function (data) {
            if (data.hide == true) {
                this.menuClose();
            }
            else {
                if (this.currentActor.id == data.id) {
                    this.conent.updateView(data);
                    this.currentActor = data;
                }
            }
            this.updateTabView(this.currentIndex);
        };
        /**
         * 重命名
         */
        ArtistDetailWindow.prototype.onClickRenameBtn = function () {
            var _this = this;
            var url = Game.config.avatar.getConfig(this.currentActor.config.avatar).bodyIconUrl;
            Game.system.openRename(format(Games.TEXT.RenameAnGoodName, this.currentActor.name), null, function (txt) {
                if (txt == "") {
                    Game.system.toastText(Games.TEXT.NameDisNull);
                }
                else {
                    Game.protosender.Actor.actorChangeName(_this.currentActor.id, txt);
                    Game.system.hideRename();
                }
            }, null, Games.TEXT.Rename, "", Games.TEXT.Input1to8Char, 8, url, GlobalConfig.getValue1(GlobalKey.KEY_1010), false, Game.config.gameRandomName.getConfig(this.currentActor.config.random_name).names);
        };
        /**
         * 关闭按钮
         */
        ArtistDetailWindow.prototype.onClickCloseBtn = function () {
            this.menuClose();
        };
        /**
         * 雪藏
         */
        ArtistDetailWindow.prototype.onClickFrozenBtn = function () {
            if (Game.moduleModel.actor.getActorLen() == 1) {
                Game.system.confirmText(Games.TEXT.DisHideAllActor);
            }
            else {
                if (Game.moduleModel.actor.actorHideIsMax) {
                    Game.system.toastText(Games.TEXT.HideActorMax);
                }
                else {
                    Game.system.confirmText(format(Games.TEXT.SureHideActor, this.currentActor.name), "", this, this.onClickComfirm);
                }
            }
        };
        ArtistDetailWindow.prototype.onClickComfirm = function () {
            Game.protosender.Actor.hideActor(this.currentActor.id, true);
        };
        ArtistDetailWindow.prototype.onOpenTab = function (tabIndex) {
            _super.prototype.onOpenTab.call(this, tabIndex);
            this.updateTabView(tabIndex);
        };
        ArtistDetailWindow.prototype.updateTabView = function (tabIndex) {
            switch (tabIndex) {
                case ArtistDetailTabType.Base:
                    this.basePanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Skill:
                    this.skillPanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Asset:
                    this.assetPanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Expert:
                    this.expertPanel.updateView(this.currentActor);
                    break;
                default:
                    break;
            }
        };
        ArtistDetailWindow.prototype.onMouseDown = function (event) {
            var touches = event.touches;
            if (touches == null) {
                this.touchId = event.touchId;
                this.isMouseDown = true;
                this.startTouchPos.x = event.stageX;
                this.startTouchPos.y = event.stageY;
                this.snapDir = Games.DirtionType.None;
                this.conent.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
                this.conent.on(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
            }
        };
        ArtistDetailWindow.prototype.onMouseMove = function (event) {
            if (this.isMouseDown == true) {
                var stageX = event.stageX;
                var stageY = event.stageY;
                var distance = Math.abs(this.startTouchPos.y - stageY);
                if (this.startTouchPos.distance(stageX, stageY) > fairygui.GRoot.inst.width * 0.3 && distance < fairygui.GRoot.inst.height * 0.1) {
                    var dir;
                    if (stageX > this.startTouchPos.x) {
                        dir = Games.DirtionType.Right;
                    }
                    else {
                        dir = Games.DirtionType.Left;
                    }
                    if (this.snapDir != dir) {
                        this.startTouchPos.x = stageX;
                        this.startTouchPos.y = stageY;
                    }
                    this.snapDir = dir;
                }
            }
        };
        ArtistDetailWindow.prototype.onMouseUp = function (event) {
            if (event.touchId == this.touchId && this.isMouseDown) {
                this.isMouseDown = false;
                if (this.snapDir == Games.DirtionType.Left) {
                    this.changeLastActor();
                }
                else if (this.snapDir == Games.DirtionType.Right) {
                    this.changePreActor();
                }
                this.snapDir = Games.DirtionType.None;
                this.conent.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
                this.conent.off(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
            }
        };
        /**
         * 更新演员
         */
        ArtistDetailWindow.prototype.updateActor = function () {
            this.currentActor = this.actors[this.currentActorIndex];
            if (this.currentActor) {
                this.conent.updateView(this.currentActor);
            }
            this.openTab(this.currentIndex);
        };
        //前一个
        ArtistDetailWindow.prototype.changePreActor = function () {
            this.currentActorIndex--;
            if (this.currentActorIndex < 0) {
                this.currentActorIndex = this.actors.length - 1;
            }
            this.updateActor();
        };
        //后一个
        ArtistDetailWindow.prototype.changeLastActor = function () {
            this.currentActorIndex++;
            if (this.currentActorIndex >= this.actors.length) {
                this.currentActorIndex = 0;
            }
            this.updateActor();
        };
        //
        ArtistDetailWindow.prototype.effectAsset = function () {
            this.assetPanel.playeffect();
        };
        return ArtistDetailWindow;
    }(Games.MWindow));
    Games.ArtistDetailWindow = ArtistDetailWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ArtistDetailWindow.js.map
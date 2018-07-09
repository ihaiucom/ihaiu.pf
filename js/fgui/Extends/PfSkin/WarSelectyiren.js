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
        var WarSelectyiren = /** @class */ (function (_super) {
            __extends(WarSelectyiren, _super);
            function WarSelectyiren() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarSelectyiren.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 艺人需求列表
                this.m_reqList.itemRenderer = Laya.Handler.create(this, this.YRReqItem, null, false);
                //确定按钮
                this.m_selectOkBtn.onClick(this, this.onClickOkBtn);
                // 关闭界面
                this.m_closeBtn.onClick(this, this.onCloseUI);
            };
            WarSelectyiren.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 艺人全部确认
                Game.moduleModel.warData.ConfirmSetActor(function () { _this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.costView); });
            };
            WarSelectyiren.prototype.onWindowShow = function () {
                this.setData();
            };
            WarSelectyiren.prototype.onWindowHide = function () {
            };
            WarSelectyiren.prototype.setData = function () {
                var _this = this;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.temActor = new Games.ActorData();
                this.temActor.setId(9999);
                this.temActor.name = this.temActor.config.name;
                this.curData = Game.moduleModel.warData.moveStory;
                this.YRController = this.m_SelectYR;
                this.curYRselectAni = null;
                // 显示电影详情子窗口
                this.m_filmInfBtn.onClick(this, function () {
                    _this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
                });
                // 提交按钮先隐藏
                this.m_selectOkBtn.visible = false;
                this.m_reqList.numItems = this.curData.characterProperty.length;
                // 点击艺人列表item
                this.m_reqList.on(fairygui.Events.CLICK_ITEM, this, this.reqClickItem);
                // 取消艺人选择
                this.m_backBtn.onClick(this, this.onBackSelect, [-1]);
            };
            // 艺人需求item赋值
            WarSelectyiren.prototype.YRReqItem = function (index, obj) {
                var item = obj;
                var actor;
                if (Game.moduleModel.warData.curYRList.hasKey(index)) {
                    actor = Game.moduleModel.warData.curYRList.getValue(index);
                }
                else {
                    actor = null;
                }
                item.onInit(this.curData.characterProperty[index], actor);
                item.m_selectAni.visible = false;
                this.m_selectOkBtn.visible = Game.moduleModel.warData.curYRList.count === this.curData.characterProperty.length;
            };
            // 艺人需求被点击
            WarSelectyiren.prototype.reqClickItem = function (obj) {
                if (this.curYRselectAni !== null) {
                    this.curYRselectAni.visible = false;
                }
                this.YRController.setSelectedIndex(1);
                var item = obj;
                this.curYRselectAni = item.m_selectAni;
                this.curYRselectAni.visible = true;
                this.onShowYRList(this.m_reqList.getChildIndex(obj));
            };
            // 取消艺人点击
            WarSelectyiren.prototype.onBackSelect = function (index, reqIndex) {
                var _this = this;
                this.m_searchTip.visible = false;
                this.YRController.setSelectedIndex(0);
                if (this.curYRselectAni !== null) {
                    this.curYRselectAni.visible = false;
                }
                this.m_zhongTip.text = "";
                if (index >= 0) {
                    var actor = this.temActor;
                    if (this.actorData.length > index) {
                        actor = this.actorData[index];
                    }
                    Game.moduleModel.warData.sendSetActor(reqIndex, actor.id, function () { _this.setActorCallBack(); });
                }
            };
            WarSelectyiren.prototype.setActorCallBack = function () {
                this.m_reqList.numItems = this.curData.characterProperty.length;
            };
            // 显示艺人列表
            WarSelectyiren.prototype.onShowYRList = function (index) {
                var characterConfig = this.curData.characterProperty[index];
                this.actorData = Game.moduleModel.warData.getListForFilmYR(characterConfig);
                var count = this.actorData.length;
                this.m_zhongTip.text = characterConfig.getDes;
                this.m_yrList.numItems = 0;
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.YRListItem, [index, characterConfig], false);
                if (count == 0) {
                    // 无人可用
                    count = 1;
                    this.m_searchTip.visible = true;
                }
                else {
                    this.m_searchTip.visible = false;
                    if (this.isUseTemActor(index)) {
                        count++;
                    }
                }
                this.m_yrList.numItems = count;
            };
            WarSelectyiren.prototype.isUseTemActor = function (index) {
                var result = false;
                if (Game.moduleModel.warData.getRealYRList.count > 0) {
                    var keyList = Game.moduleModel.warData.getRealYRList.getKeys();
                    var haveInde = 0;
                    for (var i = 0; i < keyList.length; i++) {
                        for (var index_1 = 0; index_1 < this.actorData.length; index_1++) {
                            if (Game.moduleModel.warData.getRealYRList.getValue(keyList[i]).id == this.actorData[index_1].id) {
                                haveInde++;
                            }
                        }
                    }
                    if (haveInde == this.actorData.length) {
                        result = true;
                        var cur = Game.moduleModel.warData.curYRList.getValue(index);
                        if (cur && cur.id > 0 && cur.id !== 9999) {
                            for (var index_2 = 0; index_2 < this.actorData.length; index_2++) {
                                if (cur.id == this.actorData[index_2].id) {
                                    result = false;
                                }
                            }
                        }
                    }
                }
                return result;
            };
            // 艺人可用列表item赋值
            WarSelectyiren.prototype.YRListItem = function (reqIndex, characterConfig, index, obj) {
                var item = obj;
                if (this.actorData.length > 0) {
                    if (index === this.actorData.length) {
                        item.m_YRHave.setSelectedIndex(1);
                        item.m_ready.visible = false;
                    }
                    else {
                        item.setData(this.actorData[index], characterConfig);
                        item.m_YRHave.setSelectedIndex(0);
                        // 是否已经饰演角色
                        item.m_ready.visible = false;
                        if (Game.moduleModel.warData.curYRList.count > 0) {
                            var keyList = Game.moduleModel.warData.curYRList.getKeys();
                            for (var i = 0; i < keyList.length; i++) {
                                if (Game.moduleModel.warData.curYRList.getValue(keyList[i]).id == this.actorData[index].id) {
                                    item.m_ready.visible = true;
                                    item.m_ready.text = this.curData.characterProperty[keyList[i]].getType;
                                }
                            }
                        }
                    }
                }
                else {
                    item.m_YRHave.setSelectedIndex(1);
                    item.m_ready.visible = false;
                }
                item.m_okBtn.onClick(this, this.onBackSelect, [index, reqIndex]);
            };
            // 关闭UI
            WarSelectyiren.prototype.onCloseUI = function () {
                this.onBackSelect(-1);
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            return WarSelectyiren;
        }(PfSkin.WarSelectyirenStruct));
        PfSkin.WarSelectyiren = WarSelectyiren;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectyiren.js.map
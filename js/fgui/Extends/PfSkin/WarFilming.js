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
        var ShootingStage;
        (function (ShootingStage) {
            // 开始
            ShootingStage[ShootingStage["Start"] = 1] = "Start";
            // 选择类型
            ShootingStage[ShootingStage["SelectType"] = 2] = "SelectType";
            // 选择通告
            ShootingStage[ShootingStage["SelectNotice"] = 3] = "SelectNotice";
            // 杀青
            ShootingStage[ShootingStage["Fixing"] = 4] = "Fixing";
        })(ShootingStage = PfSkin.ShootingStage || (PfSkin.ShootingStage = {}));
        var WarFilming = /** @class */ (function (_super) {
            __extends(WarFilming, _super);
            function WarFilming() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilming.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.State = ShootingStage.Start;
                this.filmExpectations = 0;
                var globalconfig = Game.config.global.getConfig(GlobalKey.Movie_Shoot_Time);
                this.speed = 300; //globalconfig.value;
                this.selectType = 50;
                this.selectNotice = 75;
                this.m_filmProgress.value = 0;
                this.m_filmTypeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
                // 参演艺人列表初始化
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.initYRListItem, null, false);
                // 选择类型列表初始化
                this.m_xuanzeList.itemRenderer = Laya.Handler.create(this, this.initXZListItem, null, false);
                // 关闭
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarFilming.prototype.onClickClose = function () {
                laya.utils.Tween.clearAll(this.m_filmProgress);
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarFilming.prototype.onWindowShow = function () {
                if (this.State !== ShootingStage.Start) {
                    this.subCallBack();
                }
                else {
                    this.setData();
                }
            };
            WarFilming.prototype.onWindowHide = function () {
            };
            WarFilming.prototype.setData = function () {
                var _this = this;
                // 服务器数据
                var data = Game.moduleModel.warData.moveData;
                // 剧本数据（配置表）
                this.confData = Game.moduleModel.warData.moveStory;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.updateIndex = 0;
                this.UpdateAttributeList = data.battleData;
                this.starUpdate = false;
                this.filmExpectations = 0;
                this.m_qidaiValue.text = data.mExpected.toFixed(0);
                this.m_psAim.visible = this.confData.target_mark;
                this.sortAttribute();
                this.attNum = [0, 0, 0, 0, 0];
                this.attText = [this.m_att1, this.m_att2, this.m_att3, this.m_att4, this.m_att5];
                this.m_att1.text = "0";
                Games.WarLoadPic.setIcon(this.m_attIcon1, this.attList[0]);
                this.m_att2.text = "0";
                Games.WarLoadPic.setIcon(this.m_attIcon2, this.attList[1]);
                this.m_att3.text = "0";
                Games.WarLoadPic.setIcon(this.m_attIcon3, this.attList[2]);
                this.m_att4.text = "0";
                Games.WarLoadPic.setIcon(this.m_attIcon4, this.attList[3]);
                this.m_att5.text = "0";
                Games.WarLoadPic.setIcon(this.m_attIcon5, this.attList[4]);
                this.m_filmName.text = data.name;
                this.m_filmTime.text = this.confData.length.toFixed(0) + "分钟";
                this.m_filmDes.text = this.confData.filmDes;
                this.m_filmTypeList.numItems = this.confData.filmTags.length;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(this.confData.poster_name).iconUrl;
                // 美元
                this.m_sliver.text = Game.moduleModel.item.getItemNum(EItemId.dollar).toFixed(1);
                // 电影票
                this.m_xukezheng.text = Game.moduleModel.item.getItemNum(EItemId.licence).toFixed(0);
                switch (Game.moduleModel.warData.getRealYRList.count) {
                    case 1:
                        {
                            this.m_yrList.columnGap = 0;
                        }
                        break;
                    case 2:
                        {
                            this.m_yrList.columnGap = 100;
                        }
                        break;
                    case 3:
                        {
                            this.m_yrList.columnGap = 50;
                        }
                        break;
                    case 4:
                        {
                            this.m_yrList.columnGap = 15;
                        }
                        break;
                    case 5:
                        {
                            this.m_yrList.columnGap = -24;
                        }
                        break;
                    case 6:
                        {
                            this.m_yrList.columnGap = -51;
                        }
                        break;
                }
                this.m_yrList.numItems = Game.moduleModel.warData.getRealYRList.count;
                if (Game.moduleModel.warData.moveData.type > 0) {
                    if (Game.moduleModel.warData.moveData.mediaVisit.length > 0) {
                        this.State = ShootingStage.SelectNotice;
                        this.currentCaozuoTip(this.selectNotice, Game.config.msg.getConfig(MsgKey.movie_state_tips2).notice);
                    }
                    else {
                        this.State = ShootingStage.Fixing;
                        this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                    }
                }
                else {
                    this.State = ShootingStage.SelectType;
                    this.currentCaozuoTip(this.selectType, Game.config.msg.getConfig(MsgKey.movie_state_tips1).notice);
                }
                Laya.timer.loop(500, null, function () { _this.updateAttribute(); });
            };
            // 剧本元素item赋值
            WarFilming.prototype.initTagsItem = function (index, obj) {
                obj.text = this.confData.filmTags[index];
            };
            // 拍摄进度条变化赋值
            WarFilming.prototype.currentCaozuoTip = function (pross, str) {
                this.curDuration = (pross - this.m_filmProgress.value) * this.speed;
                this.m_caozuo.x = -25 + (625 * pross * 0.01);
                this.m_caozuoTip.text = str;
                this.showProgress(pross);
            };
            // 进度条动画
            WarFilming.prototype.showProgress = function (val) {
                this.starUpdate = true;
                laya.utils.Tween.to(this.m_filmProgress, { value: val }, this.curDuration, Laya.Ease.linearIn, Laya.Handler.create(this, this.compleProgress));
            };
            // 当前进度结束
            WarFilming.prototype.compleProgress = function () {
                this.starUpdate = false;
                switch (this.State) {
                    case ShootingStage.SelectType:
                        {
                            laya.utils.Tween.clearAll(this.m_filmProgress);
                            this.moduleWindow.closeSelf();
                            // 此处打开拍摄类型选择
                            this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.chooseType);
                        }
                        break;
                    case ShootingStage.SelectNotice:
                        {
                            laya.utils.Tween.clearAll(this.m_filmProgress);
                            this.moduleWindow.closeSelf();
                            // 此处打开宣传通告界面
                            this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.propaganda);
                        }
                        break;
                    case ShootingStage.Fixing:
                        {
                            laya.utils.Tween.clearAll(this.m_filmProgress);
                            this.moduleWindow.closeSelf();
                            // 杀青
                            this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.complete);
                        }
                        break;
                }
            };
            //排序属性		
            WarFilming.prototype.sortAttribute = function () {
                var propertyConfig = Game.config.property.getPropertyList();
                this.attList = propertyConfig;
            };
            WarFilming.prototype.updateAttribute = function () {
                var _this = this;
                if (this.starUpdate) {
                    if (this.UpdateAttributeList && this.UpdateAttributeList.length > this.updateIndex) {
                        var curAtt_1 = this.UpdateAttributeList[this.updateIndex];
                        var _loop_1 = function (i) {
                            if (curAtt_1.propertyId === this_1.attList[i]) {
                                var iconConfig = Game.config.property.getConfig(curAtt_1.propertyId);
                                var url = Game.config.avatar.getConfig(iconConfig.icon).iconUrl;
                                var attIcon_1 = PfSkin.AttrUpView.createInstance();
                                this_1.addChild(attIcon_1);
                                attIcon_1.icon = url;
                                var pos = this_1.attText[i].y;
                                var posx = this_1.attText[i].x;
                                attIcon_1.text = format("+{0}", curAtt_1.value);
                                var indexOf = this_1.m_yrList.itemIndexToChildIndex(this_1.getYRIndexOf(curAtt_1.actorId));
                                var gObj = this_1.m_yrList.getChildAt(indexOf);
                                attIcon_1.setXY(gObj.localToGlobal().x + 20, gObj.localToGlobal().y - 50);
                                laya.utils.Tween.to(attIcon_1, { y: pos, x: posx }, 2000, Laya.Ease.quadIn, Handler.create(this_1, function () {
                                    _this.attNum[i] += curAtt_1.value;
                                    _this.attText[i].text = _this.attNum[i].toFixed(0);
                                    attIcon_1.visible = false;
                                }));
                                this_1.updateIndex++;
                                return "break";
                            }
                        };
                        var this_1 = this;
                        for (var i = 0; i < 5; i++) {
                            var state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                    }
                }
            };
            WarFilming.prototype.getYRIndexOf = function (yrId) {
                var result = 0;
                var keys = Game.moduleModel.warData.getRealYRList.getKeys();
                for (var i = 0; i < keys.length; i++) {
                    if (Game.moduleModel.warData.getRealYRList.getValue(keys[i]).id == yrId) {
                        result = i;
                        break;
                    }
                }
                return result;
            };
            // 其他界面返回结果
            WarFilming.prototype.subCallBack = function () {
                switch (this.State) {
                    case ShootingStage.SelectType:
                        {
                            if (Game.moduleModel.warData.moveData.type > 0) {
                                this.m_filmProgress.value = this.selectType;
                                this.xuanzeList();
                                this.UpdateAttributeList = Game.moduleModel.warData.moveData.battleData;
                                this.updateIndex = 0;
                                if (Game.moduleModel.warData.moveData.mediaVisit.length > 0) {
                                    this.State = ShootingStage.SelectNotice;
                                    this.currentCaozuoTip(this.selectNotice, Game.config.msg.getConfig(MsgKey.movie_state_tips2).notice);
                                }
                                else {
                                    this.State = ShootingStage.Fixing;
                                    this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                                }
                            }
                            else {
                                this.State = ShootingStage.SelectType;
                                this.currentCaozuoTip(this.selectType, Game.config.msg.getConfig(MsgKey.movie_state_tips1).notice);
                            }
                        }
                        break;
                    case ShootingStage.SelectNotice:
                        {
                            this.m_filmProgress.value = this.selectNotice;
                            // this.filmExpectations = val;
                            this.xuanzeList();
                            this.State = ShootingStage.Fixing;
                            this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                        }
                        break;
                    case ShootingStage.Fixing:
                        {
                            this.m_filmProgress.value = 0;
                            Laya.timer.clear(this, this.updateAttribute);
                            this.State = ShootingStage.Start;
                            this.moduleWindow.closeSelf();
                            // 杀青结束，显示熟练度信息界面
                            this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.actorUpdate);
                        }
                        break;
                    default:
                        {
                            this.setData();
                        }
                        break;
                }
            };
            // 单个艺人item赋值
            WarFilming.prototype.initYRListItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index);
            };
            // 玩家选择类型结果及期待值加成列表
            WarFilming.prototype.xuanzeList = function () {
                if (this.State == ShootingStage.SelectNotice && this.filmExpectations == 0) {
                    return;
                }
                switch (this.State) {
                    case ShootingStage.SelectType:
                        {
                            this.m_xuanzeList.numItems = 1;
                        }
                        break;
                    case ShootingStage.SelectNotice:
                        {
                            this.m_xuanzeList.numItems = Game.moduleModel.warData.filmExpectations.count + 1;
                        }
                        break;
                }
            };
            // 单个选择类型item赋值
            WarFilming.prototype.initXZListItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    var types = Game.config.movieShootType.getConfigList();
                    var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                    for (var i = 0; i < types.length; i++) {
                        if (types[i].id == Game.moduleModel.warData.moveData.type) {
                            item.text = format(tips, types[i].getName);
                            break;
                        }
                    }
                }
                else {
                    var idList = Game.moduleModel.warData.filmExpectations.getKeys();
                    var tips = Game.config.msg.getConfig(MsgKey.movie_mediavisit_tips).notice;
                    for (var i = 0; i < idList.length; i++) {
                        var mediaConfig = Game.config.movieMediaVisit.getConfig(idList[i]);
                        item.text = format(tips, "", "", mediaConfig.zh_cn_name, Game.moduleModel.warData.filmExpectations.getValue(idList[i]));
                    }
                }
            };
            return WarFilming;
        }(PfSkin.WarFilmingStruct));
        PfSkin.WarFilming = WarFilming;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilming.js.map
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
        var ulits = /** @class */ (function () {
            function ulits() {
            }
            ulits.getRandomInt = function (min, max) {
                var range = max - min;
                var rand = Math.random();
                return (min + Math.round(rand * range));
            };
            return ulits;
        }());
        PfSkin.ulits = ulits;
        /**
         * 战斗过程中的状态
         */
        var WarStatus;
        (function (WarStatus) {
            WarStatus[WarStatus["None"] = 0] = "None";
            WarStatus[WarStatus["shootingConfirmation"] = 1] = "shootingConfirmation";
            WarStatus[WarStatus["chooseScript"] = 2] = "chooseScript";
            WarStatus[WarStatus["renameFilm"] = 3] = "renameFilm";
            WarStatus[WarStatus["CurrentMarketInf"] = 4] = "CurrentMarketInf";
            WarStatus[WarStatus["chooseActor"] = 5] = "chooseActor";
            WarStatus[WarStatus["costView"] = 6] = "costView";
            WarStatus[WarStatus["yRShowView"] = 7] = "yRShowView";
            WarStatus[WarStatus["Compatibility"] = 8] = "Compatibility";
            WarStatus[WarStatus["filming"] = 9] = "filming";
            WarStatus[WarStatus["chooseType"] = 10] = "chooseType";
            WarStatus[WarStatus["chooseTip"] = 11] = "chooseTip";
            WarStatus[WarStatus["propaganda"] = 12] = "propaganda";
            WarStatus[WarStatus["complete"] = 13] = "complete";
            WarStatus[WarStatus["actorUpdate"] = 14] = "actorUpdate";
            WarStatus[WarStatus["proficiency"] = 15] = "proficiency";
            WarStatus[WarStatus["chooseTheater"] = 16] = "chooseTheater";
            WarStatus[WarStatus["NoticeFeedBack"] = 17] = "NoticeFeedBack";
            WarStatus[WarStatus["SYPF"] = 18] = "SYPF";
            WarStatus[WarStatus["AudienceReputation"] = 19] = "AudienceReputation";
            WarStatus[WarStatus["result"] = 20] = "result";
            WarStatus[WarStatus["overMarket"] = 21] = "overMarket";
            WarStatus[WarStatus["Jiesuan"] = 22] = "Jiesuan";
            WarStatus[WarStatus["rewardTip"] = 23] = "rewardTip";
            WarStatus[WarStatus["contineTransceiver"] = 24] = "contineTransceiver";
        })(WarStatus = PfSkin.WarStatus || (PfSkin.WarStatus = {}));
        var WarMain = /** @class */ (function (_super) {
            __extends(WarMain, _super);
            function WarMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 游戏拍摄状态
                _this.warStatus = WarStatus.None;
                _this.filmingRun = false;
                return _this;
            }
            WarMain.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.warStatus = WarStatus.None;
                this.m_filmItemList.itemRenderer = Laya.Handler.create(this, this.roomItem, null, false);
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            WarMain.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            WarMain.prototype.onWindowShow = function () {
                this.checkStatus();
            };
            WarMain.prototype.onWindowHide = function () {
            };
            WarMain.prototype.otherCloseToWarMain = function (status) {
                this.warStatus = status;
                this.checkForSubwindows();
            };
            // 依据状态，判断打开那个窗口
            WarMain.prototype.checkForSubwindows = function () {
                var _this = this;
                if (this.warStatus !== WarStatus.chooseScript) {
                    this.m_filmItemList.numItems = 0;
                }
                switch (this.warStatus) {
                    case WarStatus.shootingConfirmation: // 拍摄确认
                        {
                        }
                        break;
                    case WarStatus.chooseScript: // 选择剧本
                        {
                            this.refrushData();
                        }
                        break;
                    case WarStatus.CurrentMarketInf: // 当前市场反馈
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CurrentMarketInf, true);
                        }
                        break;
                    case WarStatus.chooseActor: // 选择艺人
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SelectYiren, true);
                        }
                        break;
                    case WarStatus.costView: // 薪酬计算
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CostView, true);
                        }
                        break;
                    case WarStatus.yRShowView: // 艺人展示
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.YRShowView, true);
                        }
                        break;
                    case WarStatus.Compatibility: // 艺人对影片的契合度
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Compatibility, true);
                        }
                        break;
                    case WarStatus.filming: // 正在拍摄中
                        {
                            // this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            if (!this.filmingRun) {
                                this.filmingRun = true;
                                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            }
                            else {
                                // this.moduleWindow.openSubwindow(this.moduleWindow.warFilmingSubwindow);
                                this.moduleWindow.warFilmingSubwindow.show();
                                // this.moduleWindow.warFilmingSubwindow.conent.onWindowShow();
                            }
                        }
                        break;
                    case WarStatus.chooseType: // 选择类型
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SelectFilmType, true);
                        }
                        break;
                    case WarStatus.chooseTip: // 选择后的提示
                        {
                            Game.system.openDialog(Game.config.movieAdaptationMsg.getStoryShootTypeTip(Game.moduleModel.warData.storyShootType), function () { _this.otherCloseToWarMain(WarStatus.filming); });
                        }
                        break;
                    case WarStatus.propaganda: // 宣传
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SelectNotice, true);
                        }
                        break;
                    case WarStatus.complete: // 杀青
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmSQ, true);
                        }
                        break;
                    case WarStatus.actorUpdate: // 艺人熟练度
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.proficiency, true);
                        }
                        break;
                    case WarStatus.proficiency: // 杀青对比情况
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmSQView, true);
                        }
                        break;
                    case WarStatus.chooseTheater: // 选择院线
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CinemaSelection, true);
                        }
                        break;
                    case WarStatus.NoticeFeedBack: // 媒体评价
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.NoticeFeedBack, true);
                        }
                        break;
                    case WarStatus.SYPF: // 首映票房
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SYPF, true);
                        }
                        break;
                    case WarStatus.AudienceReputation: // 观众口碑
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.AudienceReputation, true);
                        }
                        break;
                    case WarStatus.result: // 上映结果
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Shangying, true);
                        }
                        break;
                    case WarStatus.overMarket: // 下映提示
                        {
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.overMarket, true);
                        }
                        break;
                    case WarStatus.Jiesuan: // 结算分享界面
                        {
                            this.warStatus = WarStatus.None;
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Jiesuan, true);
                        }
                        break;
                    case WarStatus.rewardTip: // 奖励物品提示
                        {
                            // this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Compatibility, true);
                        }
                        break;
                    case WarStatus.contineTransceiver: // 持续收益提示
                        {
                            // Game.moduleModel.warData.moveData = null;
                        }
                        break;
                }
            };
            // 设置基本数据, 刷新选择剧本界面
            WarMain.prototype.refrushData = function () {
                this.storyList = Game.moduleModel.warData.getStoryList;
                if (this.storyList.length == 0) {
                    this.moduleWindow.menuClose();
                    return;
                }
                // 美元
                this.m_sliver.text = Game.moduleModel.item.getItemNum(EItemId.dollar).toFixed(1);
                // 电影票
                this.m_xukezheng.text = Game.moduleModel.item.getItemNum(EItemId.licence).toFixed(0);
                // 当前调查进度
                this.m_surveyProgress.text = "（调查进度30%）";
                var man = Game.moduleModel.warData.moveData.expected[0];
                var woman = Game.moduleModel.warData.moveData.expected[1];
                var child = Game.moduleModel.warData.moveData.expected[2];
                // 当前市场情况
                if (man > 0) {
                    this.m_surveyMan.visible = true;
                    this.m_surveyMan.text = man + "%";
                }
                else {
                    this.m_surveyMan.visible = false;
                }
                if (woman > 0) {
                    this.m_surveyWoman.visible = true;
                    this.m_surveyWoman.text = woman + "%";
                }
                else {
                    this.m_surveyWoman.visible = false;
                }
                if (child > 0) {
                    this.m_surveyChild.visible = true;
                    this.m_surveyChild.text = child + "%";
                }
                else {
                    this.m_surveyChild.visible = false;
                }
                // 刷新列表
                this.roomCurCount = 1;
                this.roomMaxCount = this.storyList.length;
                this.OnRefrushList();
            };
            // 刷新列表
            WarMain.prototype.OnRefrushList = function () {
                if (this.roomCurCount <= this.roomMaxCount) {
                    this.m_filmItemList.numItems = this.roomCurCount;
                    this.roomCurCount++;
                }
            };
            // 单个电影赋值
            WarMain.prototype.roomItem = function (index, obj) {
                var item = obj;
                if (this.roomCurCount < index + 2) {
                    item.moduleWindow = this.moduleWindow;
                    item.setData(this.storyList[index], index);
                    item.m_filmMoveShow.m_moveShow.play(laya.utils.Handler.create(this, this.moveOverCall), 1);
                }
                else {
                    item.m_filmMoveShow.m_moveShow.stop();
                }
            };
            // 电影icon动画结束回调
            WarMain.prototype.moveOverCall = function () {
                this.OnRefrushList();
            };
            // 游戏状态检查
            WarMain.prototype.checkStatus = function () {
                var _this = this;
                if (Game.moduleModel.warData.movieDataList.length >= 5) {
                    Game.system.alrtTextFull("测试版本只能拍摄5部影片，如需拍摄，请注册新号！", "提示", this, function () { _this.onClickCloseBtn(); }, "确定");
                }
                else if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null) {
                    if (this.warStatus !== WarStatus.None && this.warStatus !== WarStatus.contineTransceiver) {
                    }
                    else {
                        switch (Game.moduleModel.warData.moveData.state) {
                            case EMovieState.chooseScript:
                                {
                                    //选择剧本
                                    this.warStatus = WarStatus.chooseScript;
                                    Game.moduleModel.warData.setStoryList();
                                }
                                break;
                            case EMovieState.chooseActor:
                                {
                                    //选择艺人
                                    this.otherCloseToWarMain(WarStatus.chooseActor);
                                }
                                break;
                            case EMovieState.chooseType:
                                {
                                    //选择类型
                                    this.otherCloseToWarMain(WarStatus.chooseType);
                                }
                                break;
                            case EMovieState.propaganda:
                                {
                                    //宣传
                                    this.otherCloseToWarMain(WarStatus.propaganda);
                                }
                                break;
                            case EMovieState.actorUpdate:
                                {
                                    //艺人熟练度
                                    this.otherCloseToWarMain(WarStatus.actorUpdate);
                                }
                                break;
                            case EMovieState.complete:
                                {
                                    //杀青
                                    this.otherCloseToWarMain(WarStatus.complete);
                                }
                                break;
                            case EMovieState.chooseTheater:
                                {
                                    //选择院线
                                    this.otherCloseToWarMain(WarStatus.chooseTheater);
                                }
                                break;
                            case EMovieState.result:
                                {
                                    //上映结果
                                    this.otherCloseToWarMain(WarStatus.result);
                                    // 进入媒体评分界面
                                    // this.openSubwindowByIndex(Games.WarSubwindowType.NoticeFeedBack, true);
                                }
                                break;
                            case EMovieState.contineTransceiver:
                                {
                                    //持续收益
                                    console.log("==========EMovieState.contineTransceiver");
                                }
                                break;
                        }
                    }
                    this.checkForSubwindows();
                }
                else {
                    // 不存在状态信息，请求拍摄
                    Game.moduleModel.warData.MakeFilm(function () { _this.checkStatus(); });
                }
            };
            // 发送新名称到服务器
            WarMain.prototype.onReName = function (newName) {
                var _this = this;
                if (newName && newName.length > 0) {
                    Game.moduleModel.warData.SendReName(newName, function () { _this.onHandleReName(); });
                }
            };
            // 修改名称成功回调
            WarMain.prototype.onHandleReName = function () {
                this.warStatus = WarStatus.CurrentMarketInf;
                this.checkForSubwindows();
            };
            return WarMain;
        }(PfSkin.WarMainStruct));
        PfSkin.WarMain = WarMain;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMain.js.map
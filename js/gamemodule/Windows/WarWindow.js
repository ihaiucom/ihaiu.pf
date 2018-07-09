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
     * 战斗 子窗口类型
     */
    var WarSubwindowType;
    (function (WarSubwindowType) {
        // 电影详情
        WarSubwindowType[WarSubwindowType["FilmInfo"] = 0] = "FilmInfo";
        // 当前市场详情
        WarSubwindowType[WarSubwindowType["CurrentMarketInf"] = 1] = "CurrentMarketInf";
        // 选择艺人
        WarSubwindowType[WarSubwindowType["SelectYiren"] = 2] = "SelectYiren";
        // 薪酬总计
        WarSubwindowType[WarSubwindowType["CostView"] = 3] = "CostView";
        // 艺人展示
        WarSubwindowType[WarSubwindowType["YRShowView"] = 4] = "YRShowView";
        // 艺人对影片的契合度
        WarSubwindowType[WarSubwindowType["Compatibility"] = 5] = "Compatibility";
        // 选择影片类型
        WarSubwindowType[WarSubwindowType["SelectFilmType"] = 6] = "SelectFilmType";
        // 拍摄中
        WarSubwindowType[WarSubwindowType["Filming"] = 7] = "Filming";
        // 杀青对比情况
        WarSubwindowType[WarSubwindowType["FilmSQView"] = 8] = "FilmSQView";
        // 媒体评价
        WarSubwindowType[WarSubwindowType["NoticeFeedBack"] = 9] = "NoticeFeedBack";
        // 选择通告
        WarSubwindowType[WarSubwindowType["SelectNotice"] = 10] = "SelectNotice";
        // 杀青
        WarSubwindowType[WarSubwindowType["FilmSQ"] = 11] = "FilmSQ";
        // 熟练度
        WarSubwindowType[WarSubwindowType["proficiency"] = 12] = "proficiency";
        // 选择院线
        WarSubwindowType[WarSubwindowType["CinemaSelection"] = 13] = "CinemaSelection";
        // 首映票房
        WarSubwindowType[WarSubwindowType["SYPF"] = 14] = "SYPF";
        // 观众口碑
        WarSubwindowType[WarSubwindowType["AudienceReputation"] = 15] = "AudienceReputation";
        // 上映中
        WarSubwindowType[WarSubwindowType["Shangying"] = 16] = "Shangying";
        // 下映反馈
        WarSubwindowType[WarSubwindowType["overMarket"] = 17] = "overMarket";
        // 结算
        WarSubwindowType[WarSubwindowType["Jiesuan"] = 18] = "Jiesuan";
        // 分享
        WarSubwindowType[WarSubwindowType["Share"] = 19] = "Share";
        // 报纸头条
        WarSubwindowType[WarSubwindowType["Baozi"] = 20] = "Baozi";
        // 下映提示
        WarSubwindowType[WarSubwindowType["OverTip"] = 21] = "OverTip";
        // 修改剧本名称
        WarSubwindowType[WarSubwindowType["ReName"] = 22] = "ReName";
    })(WarSubwindowType = Games.WarSubwindowType || (Games.WarSubwindowType = {}));
    //======================
    // 电影选择窗口，目前作为战斗主窗口使用
    //----------------------
    var WarWindow = /** @class */ (function (_super) {
        __extends(WarWindow, _super);
        function WarWindow() {
            var _this = _super.call(this) || this;
            _this.filmInfoSubwindow = new Games.FilmInfoSubwindow(WarSubwindowType.FilmInfo, _this);
            _this.currentMarketInfoSubwindow = new Games.CurrentMarketInfoSubwindow(WarSubwindowType.CurrentMarketInf, _this);
            _this.selectyirenSubwindow = new Games.SelectyirenSubwindow(WarSubwindowType.SelectYiren, _this);
            _this.costViewSubwindow = new Games.WarCostViewSubwindow(WarSubwindowType.CostView, _this);
            _this.warFilmYRShowSubwindow = new Games.WarFilmYRShowSubwindow(WarSubwindowType.YRShowView, _this);
            _this.warYRCompatibilitySubwindow = new Games.WarYRCompatibilitySubwindow(WarSubwindowType.Compatibility, _this);
            _this.warSelectFilmTypeSubwindow = new Games.WarSelectFilmTypeSubwindow(WarSubwindowType.SelectFilmType, _this);
            _this.warFilmingSubwindow = new Games.WarFilmingSubwindow(WarSubwindowType.Filming, _this);
            _this.warSelectNoticeSubwindow = new Games.WarSelectNoticeSubwindow(WarSubwindowType.SelectNotice, _this);
            _this.warFilmSQSubwindow = new Games.WarFilmSQSubwindow(WarSubwindowType.FilmSQ, _this);
            _this.warYRProficiencySubwindow = new Games.WarYRProficiencySubwindow(WarSubwindowType.proficiency, _this);
            _this.warFilmSQViewSubwindow = new Games.WarFilmSQViewSubwindow(WarSubwindowType.FilmSQView, _this);
            _this.warCinemaSelectionSubwindow = new Games.WarCinemaSelectionSubwindow(WarSubwindowType.CinemaSelection, _this);
            _this.warNoticeFeedBackSubwindow = new Games.WarNoticeFeedBackSubwindow(WarSubwindowType.NoticeFeedBack, _this);
            _this.warFilmSYPFSubwindow = new Games.WarFilmSYPFSubwindow(WarSubwindowType.SYPF, _this);
            _this.warAudienceReputationSubwindow = new Games.WarAudienceReputationSubwindow(WarSubwindowType.AudienceReputation, _this);
            _this.warFilmShangYingSubwindow = new Games.WarFilmShangYingSubwindow(WarSubwindowType.Shangying, _this);
            _this.warFilmOverMarketInfoSubwindow = new Games.WarFilmOverMarketInfoSubwindow(WarSubwindowType.overMarket, _this);
            _this.warFilmJiesuanSubwindow = new Games.WarFilmJiesuanSubwindow(WarSubwindowType.Jiesuan, _this);
            _this.warPromptBoxSubwindow = new Games.WarPromptBoxSubwindow(WarSubwindowType.OverTip, _this);
            _this.registerSubwindow(_this.filmInfoSubwindow);
            _this.registerSubwindow(_this.currentMarketInfoSubwindow);
            _this.registerSubwindow(_this.selectyirenSubwindow);
            _this.registerSubwindow(_this.costViewSubwindow);
            _this.registerSubwindow(_this.warFilmYRShowSubwindow);
            _this.registerSubwindow(_this.warYRCompatibilitySubwindow);
            _this.registerSubwindow(_this.warSelectFilmTypeSubwindow);
            _this.registerSubwindow(_this.warFilmingSubwindow);
            _this.registerSubwindow(_this.warSelectNoticeSubwindow);
            _this.registerSubwindow(_this.warFilmSQSubwindow);
            _this.registerSubwindow(_this.warYRProficiencySubwindow);
            _this.registerSubwindow(_this.warFilmSQViewSubwindow);
            _this.registerSubwindow(_this.warCinemaSelectionSubwindow);
            _this.registerSubwindow(_this.warNoticeFeedBackSubwindow);
            _this.registerSubwindow(_this.warFilmSYPFSubwindow);
            _this.registerSubwindow(_this.warAudienceReputationSubwindow);
            _this.registerSubwindow(_this.warFilmShangYingSubwindow);
            _this.registerSubwindow(_this.warFilmOverMarketInfoSubwindow);
            _this.registerSubwindow(_this.warFilmJiesuanSubwindow);
            _this.registerSubwindow(_this.warPromptBoxSubwindow);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.WarMain);
            return _this;
        }
        // 菜单创建
        WarWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.WarMain.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        WarWindow.prototype.onMenuOpen = function (parameter) {
            // if(xxx)
            // {
            //     if(parameter.openType == MenuOpenType.None)
            //     {
            //         parameter.openType = MenuOpenType.Subwindow;
            //         parameter.openIndex = xxx;
            //     }
            // }
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        WarWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        WarWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return WarWindow;
    }(Games.MWindow));
    Games.WarWindow = WarWindow;
})(Games || (Games = {}));
//# sourceMappingURL=WarWindow.js.map
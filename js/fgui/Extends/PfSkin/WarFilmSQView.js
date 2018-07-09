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
        var WarFilmSQView = /** @class */ (function (_super) {
            __extends(WarFilmSQView, _super);
            function WarFilmSQView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.maxVal = 0;
                return _this;
            }
            WarFilmSQView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 艺人列表
                this.m_filmAttributeList.itemRenderer = Laya.Handler.create(this, this.initAttItem, null, false);
                this.m_zhuyanList.itemRenderer = Laya.Handler.create(this, this.initYRItem, null, false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickClose);
            };
            WarFilmSQView.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 进入院线选择界面
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.chooseTheater);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.CinemaSelection);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CinemaSelection, true);
            };
            WarFilmSQView.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarFilmSQView.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmSQView.prototype.onWindowHide = function () {
            };
            WarFilmSQView.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_filmName.text = Game.moduleModel.warData.moveStory.filmName;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(Game.moduleModel.warData.moveStory.poster_name).iconUrl;
                var types = Game.config.movieShootType.getConfigList();
                var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                        this.m_type.text = types[i].getName;
                        break;
                    }
                }
                this.m_time.text = Game.moduleModel.warData.moveStory.length + "分钟";
                for (var i = 0; i < 5; i++) {
                    if (this.maxVal < Game.moduleModel.warData.moveData.avrAttribute[i]) {
                        this.maxVal = Game.moduleModel.warData.moveData.avrAttribute[i];
                    }
                }
                this.maxVal *= PfSkin.ulits.getRandomInt(2, 2.2);
                this.m_filmAttributeList.numItems = 5;
                this.m_zhuyanList.numItems = Game.moduleModel.warData.getRealYRList.count;
            };
            // 列表单个item赋值
            WarFilmSQView.prototype.initAttItem = function (index, obj) {
                var item = obj;
                item.setData(index, this.maxVal);
            };
            // 艺人列表单个赋值		
            WarFilmSQView.prototype.initYRItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index);
            };
            return WarFilmSQView;
        }(PfSkin.WarFilmSQViewStruct));
        PfSkin.WarFilmSQView = WarFilmSQView;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQView.js.map
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
        var WarYRProficiency = /** @class */ (function (_super) {
            __extends(WarYRProficiency, _super);
            function WarYRProficiency() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRProficiency.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 艺人列表
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.initYRItem, null, false);
            };
            WarYRProficiency.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // this.moduleWindow.menuBack();
                // 进入电影属性界面
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.proficiency);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.FilmSQView);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmSQView, true);
            };
            WarYRProficiency.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarYRProficiency.prototype.onWindowShow = function () {
                this.setData();
            };
            WarYRProficiency.prototype.onWindowHide = function () {
            };
            WarYRProficiency.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                var typetip = "";
                var types = Game.config.movieShootType.getConfigList();
                var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                        typetip = types[i].getName;
                        break;
                    }
                }
                this.m_title.text = format(Game.config.msg.getConfig(MsgKey.movie_type_addition).notice, typetip);
                this.icon = Game.config.avatar.getConfig(Game.moduleModel.warData.moveStory.poster_name).iconUrl;
                this.m_yrList.numItems = Game.moduleModel.warData.getRealYRList.count;
            };
            // 列表单个item赋值
            WarYRProficiency.prototype.initYRItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index));
            };
            return WarYRProficiency;
        }(PfSkin.WarYRProficiencyStruct));
        PfSkin.WarYRProficiency = WarYRProficiency;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRProficiency.js.map
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
        var WarFilmSYPF = /** @class */ (function (_super) {
            __extends(WarFilmSYPF, _super);
            function WarFilmSYPF() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSYPF.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.onClick(this, this.onClickOkBtn);
            };
            WarFilmSYPF.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 观众口碑
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.AudienceReputation);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.AudienceReputation);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.AudienceReputation, true);
            };
            WarFilmSYPF.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmSYPF.prototype.onWindowHide = function () {
            };
            WarFilmSYPF.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_title.text = Game.moduleModel.warData.moveData.premiereBoxOffice.toFixed(0);
                if (Game.moduleModel.warData.moveData.extBoxOffice > 0) {
                    this.m_add.text = Game.moduleModel.warData.moveData.extBoxOffice.toFixed(0);
                }
                else {
                    this.m_t1.stop();
                }
            };
            return WarFilmSYPF;
        }(PfSkin.WarFilmSYPFStruct));
        PfSkin.WarFilmSYPF = WarFilmSYPF;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSYPF.js.map
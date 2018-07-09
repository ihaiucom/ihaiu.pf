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
        var WarFilmYRShow = /** @class */ (function (_super) {
            __extends(WarFilmYRShow, _super);
            function WarFilmYRShow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmYRShow.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bianDown.visible = false;
                this.m_bianUp.visible = false;
                this.m_yr1.visible = false;
                this.m_yr2.visible = false;
                this.m_yr3.visible = false;
                this.m_yr4.visible = false;
                this.m_yr5.visible = false;
                this.m_yr6.visible = false;
                this.yrList = [this.m_yr1, this.m_yr2, this.m_yr3, this.m_yr4, this.m_yr5, this.m_yr6];
                // 关闭
                // this.onClick(this, this.onClickClose);
            };
            WarFilmYRShow.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.Compatibility);
            };
            WarFilmYRShow.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmYRShow.prototype.onWindowHide = function () {
            };
            WarFilmYRShow.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.curFilmYRItemNumber = 0;
                var count = Game.moduleModel.warData.getRealYRList.count;
                var _xx = 0;
                if (count > 1) {
                    _xx = (720 - 168) / (count - 1);
                }
                this.m_yr1.x = _xx * 0;
                this.m_yr2.x = _xx * 1;
                this.m_yr3.x = _xx * 2;
                this.m_yr4.x = _xx * 3;
                this.m_yr5.x = _xx * 4;
                this.m_yr6.x = _xx * 5;
                this.filmYRShowItem(count);
            };
            // 刷新艺人展示
            WarFilmYRShow.prototype.filmYRShowItem = function (max) {
                var _this = this;
                this.curFilmYRItemNumber++;
                if (this.curFilmYRItemNumber <= max) {
                    var actor = Game.moduleModel.warData.getRealYRList.getValue(this.curFilmYRItemNumber - 1);
                    this.yrList[this.curFilmYRItemNumber - 1].m_title.text = actor.name;
                    this.yrList[this.curFilmYRItemNumber - 1].visible = true;
                    var config = Game.config.actor.getConfig(actor.id);
                    this.yrList[this.curFilmYRItemNumber - 1].icon = Game.config.avatar.getConfig(config.avatar).bodyIconUrl;
                    this.yrList[this.curFilmYRItemNumber - 1].m_moveShow.play(laya.utils.Handler.create(this, this.filmYRShowAniOver, [max]), 1);
                    this.yrList[this.curFilmYRItemNumber - 1].m_moveShow.setHook("Next", laya.utils.Handler.create(this, this.filmYRShowAni, [max]));
                }
                else {
                    this.m_bianUp.visible = true;
                    this.m_bianDown.visible = true;
                    setTimeout(function () { _this.onClickClose(); }, 3000);
                }
            };
            // 动画播放到指定时间的回调
            WarFilmYRShow.prototype.filmYRShowAni = function (max) {
                if (this.curFilmYRItemNumber < max) {
                    this.filmYRShowItem(max);
                }
            };
            // 动画结束的回调
            WarFilmYRShow.prototype.filmYRShowAniOver = function (max) {
                if (this.curFilmYRItemNumber == max) {
                    this.filmYRShowItem(max);
                }
            };
            return WarFilmYRShow;
        }(PfSkin.WarFilmYRShowStruct));
        PfSkin.WarFilmYRShow = WarFilmYRShow;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYRShow.js.map
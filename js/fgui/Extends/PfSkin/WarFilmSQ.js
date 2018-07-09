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
        var WarFilmSQ = /** @class */ (function (_super) {
            __extends(WarFilmSQ, _super);
            function WarFilmSQ() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSQ.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            WarFilmSQ.prototype.onWindowShow = function () {
                var _this = this;
                setTimeout(function () { _this.delayRun(); }, 1000);
            };
            WarFilmSQ.prototype.onWindowHide = function () {
            };
            WarFilmSQ.prototype.delayRun = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.moduleWindow.closeSelf();
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.filming);
                // // 回调，拍摄进度继续
                // let fun = this.moduleWindow.menuParameter.args[0];
                // fun(ShootingStage.Fixing);
            };
            return WarFilmSQ;
        }(PfSkin.WarFilmSQStruct));
        PfSkin.WarFilmSQ = WarFilmSQ;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQ.js.map
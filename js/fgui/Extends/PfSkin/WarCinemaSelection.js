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
        var WarCinemaSelection = /** @class */ (function (_super) {
            __extends(WarCinemaSelection, _super);
            function WarCinemaSelection() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCinemaSelection.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 通告列表
                this.m_yxList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarCinemaSelection.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarCinemaSelection.prototype.onWindowShow = function () {
                this.setData();
            };
            WarCinemaSelection.prototype.onWindowHide = function () {
            };
            WarCinemaSelection.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.cinList = Game.moduleModel.warData.cinemaList();
                this.m_yxList.numItems = 3; //this.cinList.length;
            };
            // 通告列表单个item赋值
            WarCinemaSelection.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(this.cinList[index], index, this.moduleWindow);
            };
            return WarCinemaSelection;
        }(PfSkin.WarCinemaSelectionStruct));
        PfSkin.WarCinemaSelection = WarCinemaSelection;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCinemaSelection.js.map
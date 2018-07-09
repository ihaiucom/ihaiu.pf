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
        var WarNoticeFeedBack = /** @class */ (function (_super) {
            __extends(WarNoticeFeedBack, _super);
            function WarNoticeFeedBack() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarNoticeFeedBack.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 通告列表
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarNoticeFeedBack.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 进入首映票房
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.SYPF);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.SYPF);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SYPF, true);
            };
            WarNoticeFeedBack.prototype.onWindowShow = function () {
                this.setData();
            };
            WarNoticeFeedBack.prototype.onWindowHide = function () {
            };
            WarNoticeFeedBack.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_starProgress.value = Game.moduleModel.warData.moveData.mediaCommend;
                this.m_zongfen.text = (Game.moduleModel.warData.moveData.mediaCommend * 0.1).toFixed(1);
                this.m_dianzanValue.text = Game.moduleModel.warData.moveData.praise.toFixed(0);
                this.scoreList = new Array();
                var total = Game.moduleModel.warData.moveData.mediaCommend * 3;
                for (var i = 0; i < 3; i++) {
                    this.scoreList.push(Game.moduleModel.warData.moveData.mediaCommendArr[i] / total * Game.moduleModel.warData.moveData.praise);
                }
                this.m_typeList.numItems = 3;
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(Game.moduleModel.warData.moveStory.poster_name).iconUrl;
            };
            // 列表单个item赋值
            WarNoticeFeedBack.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.moveData.mediaCommendArr[index], this.scoreList[index]);
            };
            return WarNoticeFeedBack;
        }(PfSkin.WarNoticeFeedBackStruct));
        PfSkin.WarNoticeFeedBack = WarNoticeFeedBack;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNoticeFeedBack.js.map
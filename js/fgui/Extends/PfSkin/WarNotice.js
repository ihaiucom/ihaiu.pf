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
        var WarNotice = /** @class */ (function (_super) {
            __extends(WarNotice, _super);
            function WarNotice() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.mediaId = 0;
                return _this;
            }
            WarNotice.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 通告列表
                this.m_noticeList.itemRenderer = Laya.Handler.create(this, this.initNoticeItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarNotice.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.filming);
            };
            WarNotice.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarNotice.prototype.onWindowShow = function () {
                this.setData();
            };
            WarNotice.prototype.onWindowHide = function () {
            };
            WarNotice.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_noticeList.numItems = Game.moduleModel.warData.moveData.mediaVisit.length;
            };
            // 通告列表单个item赋值
            WarNotice.prototype.initNoticeItem = function (index, obj) {
                var _this = this;
                var item = obj;
                item.setData(index, function (arg) {
                    _this.selectItemGetValue(arg);
                });
            };
            WarNotice.prototype.selectItemGetValue = function (index) {
                var _this = this;
                this.mediaId = index;
                Game.moduleModel.warData.AcceptMediaVisit(index, function (arg) { _this.onAcceptBack(arg); });
            };
            WarNotice.prototype.onAcceptBack = function (arg) {
                Game.moduleModel.warData.filmExpectations.add(this.mediaId, arg);
                this.m_noticeList.numItems = 0;
                this.m_noticeList.numItems = Game.moduleModel.warData.moveData.mediaVisit.length;
            };
            return WarNotice;
        }(PfSkin.WarNoticeStruct));
        PfSkin.WarNotice = WarNotice;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNotice.js.map
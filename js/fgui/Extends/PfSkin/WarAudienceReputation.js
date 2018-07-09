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
        var WarAudienceReputation = /** @class */ (function (_super) {
            __extends(WarAudienceReputation, _super);
            function WarAudienceReputation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarAudienceReputation.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarAudienceReputation.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 进入上映模式
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.result);
            };
            WarAudienceReputation.prototype.onWindowShow = function () {
                this.setData();
            };
            WarAudienceReputation.prototype.onWindowHide = function () {
            };
            WarAudienceReputation.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_audienceProgress.value = Game.moduleModel.warData.moveData.publicPraise;
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(Game.moduleModel.warData.moveStory.poster_name).iconUrl;
                this.m_typeList.numItems = 10;
            };
            WarAudienceReputation.prototype.initItem = function (index, obj) {
                var item = obj;
                var min = Game.moduleModel.warData.moveData.publicPraise - 20;
                var max = Game.moduleModel.warData.moveData.publicPraise + 20;
                if (min < 1) {
                    min = 1;
                }
                if (max > 100) {
                    max = 100;
                }
                item.setData(PfSkin.ulits.getRandomInt(min, max));
            };
            return WarAudienceReputation;
        }(PfSkin.WarAudienceReputationStruct));
        PfSkin.WarAudienceReputation = WarAudienceReputation;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceReputation.js.map
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
        var WarCinemaItem = /** @class */ (function (_super) {
            __extends(WarCinemaItem, _super);
            function WarCinemaItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCinemaItem.prototype.setData = function (data, index, moduleModels) {
                this.dataid = data.id;
                this.moduleModels = moduleModels;
                this.m_tip.text = "";
                // 目前仅支持选择第一个院线
                this.m_okBtn.grayed = index !== 0;
                if (index == 0) {
                    this.m_okBtn.onClick(this, this.onClickSelectBtn);
                    this.m_title.text = format(Game.config.msg.getConfig(MsgKey.movie_cinema_tips).notice, 1, 123);
                }
                else {
                    this.m_title.text = Game.config.msg.getConfig(MsgKey.movie_unlock_cinema_tips).notice;
                }
                this.m_icon.icon = Game.config.avatar.getConfig(data.pic).iconUrl;
            };
            WarCinemaItem.prototype.onClickSelectBtn = function () {
                var _this = this;
                this.moduleMain = this.moduleModels.mainWindow;
                this.moduleModels.closeSelf();
                // 此处需要发送院线选择到服务器
                Game.moduleModel.warData.setPublishMovie(this.dataid, function () { _this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.NoticeFeedBack); });
            };
            return WarCinemaItem;
        }(PfSkin.WarCinemaItemStruct));
        PfSkin.WarCinemaItem = WarCinemaItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCinemaItem.js.map
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
        var WarYRNoticeItem = /** @class */ (function (_super) {
            __extends(WarYRNoticeItem, _super);
            function WarYRNoticeItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.mediaId = 0;
                return _this;
            }
            WarYRNoticeItem.prototype.setData = function (index, selectNotice) {
                var media = Game.moduleModel.warData.moveData.mediaVisit[index];
                this.mediaId = media.mediaId;
                var mediaConfig = Game.config.movieMediaVisit.getConfig(this.mediaId);
                this.m_c1.setSelectedIndex(mediaConfig.mediaId - 1);
                this.m_lv.text = format("LV.{0}", media.level);
                this.m_title.text = mediaConfig.zh_cn_name;
                // this.m_yr1.url =
                // this.m_yr2.url =
                this.m_selectBtn.text = mediaConfig.cost_num.toFixed(0);
                // this.m_selectBtn.icon = mediaConfig.cost_id
                this.m_tipCom.visible = false;
                this.m_okTip.visible = media.bAccept;
                this.m_selectBtn.visible = !media.bAccept;
                this.m_selectBtn.onClick(this, this.onClickSelectNotice, [selectNotice]);
            };
            WarYRNoticeItem.prototype.onClickSelectNotice = function (selectNotice) {
                this.m_selectBtn.visible = false;
                this.m_okTip.visible = true;
                selectNotice(this.mediaId);
            };
            return WarYRNoticeItem;
        }(PfSkin.WarYRNoticeItemStruct));
        PfSkin.WarYRNoticeItem = WarYRNoticeItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRNoticeItem.js.map
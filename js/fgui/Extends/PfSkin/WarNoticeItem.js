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
        var WarNoticeItem = /** @class */ (function (_super) {
            __extends(WarNoticeItem, _super);
            function WarNoticeItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarNoticeItem.prototype.setData = function (val, dianzhan) {
                var values = val * 0.1;
                this.m_fen.text = values.toFixed(0) + "分";
                this.m_starProgress.value = val;
                this.m_dianzanValue.text = dianzhan.toFixed(0);
                var config = Game.config.movieMidiaEvaluation.getMovieMidiaEva(values);
                this.m_noticeName.text = config.name;
                this.m_userName.text = config.commentators;
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                this.m_des.text = config.content;
            };
            return WarNoticeItem;
        }(PfSkin.WarNoticeItemStruct));
        PfSkin.WarNoticeItem = WarNoticeItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNoticeItem.js.map
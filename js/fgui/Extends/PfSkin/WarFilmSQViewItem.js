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
        var WarFilmSQViewItem = /** @class */ (function (_super) {
            __extends(WarFilmSQViewItem, _super);
            function WarFilmSQViewItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSQViewItem.prototype.setData = function (index, maxVal) {
                var getPropertyList = Game.config.property.getPropertyList();
                var moveData = Game.moduleModel.warData.moveData;
                // this.m_type.text = Game.config.property.getConfig(getPropertyList[index]).name;
                this.m_progress.max = maxVal;
                this.m_progress.value = moveData.attribute[index];
                this.m_otherCom.x = 90 + moveData.avrAttribute[index] / moveData.maxAttribute[index] * (534 - 90);
            };
            return WarFilmSQViewItem;
        }(PfSkin.WarFilmSQViewItemStruct));
        PfSkin.WarFilmSQViewItem = WarFilmSQViewItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQViewItem.js.map
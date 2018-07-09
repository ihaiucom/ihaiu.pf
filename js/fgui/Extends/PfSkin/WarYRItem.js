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
        var WarYRItem = /** @class */ (function (_super) {
            __extends(WarYRItem, _super);
            function WarYRItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRItem.prototype.setData = function (data, charcterData) {
                this.m_lv.text = format("LV.{0}", data.level);
                this.m_yrName.text = data.name;
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                this.m_star.m_Star.setSelectedIndex(data.config.starNum - 1);
                var effect = charcterData.geteffectVal;
                this.m_attribute1.text = this.getEffectValue(effect[0], data).toString();
                this.m_attribute2.text = this.getEffectValue(effect[1], data).toString();
                Games.WarLoadPic.setIcon(this.m_attribute1.m_icon, effect[0]);
                Games.WarLoadPic.setIcon(this.m_attribute2.m_icon, effect[1]);
                this.m_okBtn.text = data.payCheck.toFixed(0);
            };
            WarYRItem.prototype.getEffectValue = function (effect, data) {
                var result = 0;
                switch (effect) {
                    case 1601:
                        result = data.spectacle;
                        break;
                    case 1602:
                        result = data.perform;
                        break;
                    case 1603:
                        result = data.plot;
                        break;
                    case 1604:
                        result = data.art;
                        break;
                    case 1605:
                        result = data.entertainment;
                        break;
                }
                return result;
            };
            return WarYRItem;
        }(PfSkin.WarYRItemStruct));
        PfSkin.WarYRItem = WarYRItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRItem.js.map
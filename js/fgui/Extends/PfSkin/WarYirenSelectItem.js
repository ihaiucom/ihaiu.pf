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
        var WarYirenSelectItem = /** @class */ (function (_super) {
            __extends(WarYirenSelectItem, _super);
            function WarYirenSelectItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYirenSelectItem.prototype.onInit = function (data, actor) {
                if (actor !== null) {
                    this.m_addIcon.visible = false;
                    this.m_bgOk.visible = true;
                    this.m_iconOk.visible = true;
                    this.m_nameOk.visible = true;
                    this.m_kuangOk.visible = true;
                    this.m_nameOk.text = actor.name;
                    this.m_yirenType1.visible = false;
                    this.m_yirenType2.visible = false;
                    this.m_iconOk.icon = Game.config.avatar.getConfig(actor.config.avatar).bodyIconUrl;
                }
                else {
                    this.m_addIcon.visible = true;
                    this.m_bgOk.visible = false;
                    this.m_iconOk.visible = false;
                    this.m_nameOk.visible = false;
                    this.m_kuangOk.visible = false;
                    Games.WarLoadPic.setIcon(this.m_sex, data.sex);
                    Games.WarLoadPic.setIcon(this.m_nation, data.country);
                    this.m_roleTip.text = data.getName;
                    this.m_role.text = data.getType;
                    this.m_yirenType1.visible = data.show_type !== 0;
                    if (data.show_type !== 0) {
                        this.m_yirenType1.text = data.getReqShowTypeToString;
                    }
                    this.m_yirenType2.visible = data.getReqageType !== 0;
                    if (data.getReqageType !== 0) {
                        this.m_yirenType2.text = data.getReqageTypeToString;
                    }
                }
            };
            return WarYirenSelectItem;
        }(PfSkin.WarYirenSelectItemStruct));
        PfSkin.WarYirenSelectItem = WarYirenSelectItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYirenSelectItem.js.map
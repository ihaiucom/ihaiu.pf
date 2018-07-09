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
        var WarFilmYirenPop = /** @class */ (function (_super) {
            __extends(WarFilmYirenPop, _super);
            function WarFilmYirenPop() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmYirenPop.prototype.setData = function (data) {
                this.m_curType.text = data.getType;
                this.m_curName.text = data.getName;
                this.m_attDes.text = data.getDes;
                if (data.sex > 0) {
                    this.m_req1.visible = true;
                    Games.WarLoadPic.setIcon(this.m_req1.m_icon, data.sex);
                }
                else {
                    this.m_req1.visible = false;
                }
                if (data.country > 0) {
                    this.m_req2.visible = true;
                    Games.WarLoadPic.setIcon(this.m_req2.m_icon, data.country);
                }
                else {
                    this.m_req2.visible = false;
                }
                this.m_req3.visible = data.show_type !== 0;
                this.m_req3.text = data.getReqShowTypeToString;
                this.m_req4.visible = data.getReqageType !== 0;
                this.m_req4.text = data.getReqageTypeToString;
                var conf2 = Game.config.property.getConfig(data.effect[0]).icon;
                this.m_attTip1.icon = Game.config.avatar.getConfig(conf2).iconUrl;
                var conf3 = Game.config.property.getConfig(data.effect[1]).icon;
                this.m_attTip2.icon = Game.config.avatar.getConfig(conf3).iconUrl;
            };
            return WarFilmYirenPop;
        }(PfSkin.WarFilmYirenPopStruct));
        PfSkin.WarFilmYirenPop = WarFilmYirenPop;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYirenPop.js.map
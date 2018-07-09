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
        var WarFilmYirenItem = /** @class */ (function (_super) {
            __extends(WarFilmYirenItem, _super);
            function WarFilmYirenItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmYirenItem.prototype.setData = function (data) {
                this.m_type.text = data.getType;
                this.m_name.text = data.getName;
                this.m_child.visible = data.getSex === 0;
                this.m_woman.visible = data.getSex === 1;
                this.m_man.visible = data.getSex === 2;
                this.m_pop.setData(data);
            };
            return WarFilmYirenItem;
        }(PfSkin.WarFilmYirenItemStruct));
        PfSkin.WarFilmYirenItem = WarFilmYirenItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYirenItem.js.map
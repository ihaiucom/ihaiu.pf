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
        var ArtistTrainItem1 = /** @class */ (function (_super) {
            __extends(ArtistTrainItem1, _super);
            function ArtistTrainItem1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data
             */
            ArtistTrainItem1.prototype.updateView = function (data) {
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = data.star;
                this.m_level.text = data.level + "级";
                this.m_expBar.value = 0.1;
                this.m_name.text = data.name;
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
            };
            return ArtistTrainItem1;
        }(PfSkin.ArtistTrainItem1Struct));
        PfSkin.ArtistTrainItem1 = ArtistTrainItem1;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem1.js.map
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
        var ArtistAssetPanel = /** @class */ (function (_super) {
            __extends(ArtistAssetPanel, _super);
            function ArtistAssetPanel() {
                var _this = _super.call(this) || this;
                _this.on(Laya.Event.DISPLAY, _this, _this.onDisplay);
                _this.on(Laya.Event.UNDISPLAY, _this, _this.onUnDisplay);
                return _this;
            }
            ArtistAssetPanel.prototype.onDisplay = function () {
            };
            ArtistAssetPanel.prototype.onUnDisplay = function () {
            };
            ArtistAssetPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_list.setVirtual();
            };
            /**
             *
             * @param data 艺人数据
             */
            ArtistAssetPanel.prototype.updateView = function (data) {
                this.actorData = data;
                var curConfig = Game.config.actorLoyalty.getConfigByIdLv(this.actorData.id, this.actorData.loyaltyLevel);
                var nextConfig = Game.config.actorLoyalty.getConfigByIdLv(this.actorData.id, this.actorData.loyaltyLevel + 1);
                this.m_assetLoyaltyBar.m_assetBar.value = this.actorData.loyaltyExp;
                if (nextConfig) {
                    this.m_assetLoyaltyBar.m_assetBar.max = nextConfig.exp;
                }
                else {
                    //没有下一级的数据
                    this.m_assetLoyaltyBar.m_assetBar.max = curConfig.exp;
                }
                //资产
                this.m_list.numItems = Games.ActorModel.assetLenth;
                //当前忠诚度
                this.m_assetLoyaltyBar.m_love.text = this.actorData.loyaltyLevel + "";
            };
            /**
             *
             * @param index 索引
             * @param item
             */
            ArtistAssetPanel.prototype.onUpdateItem = function (index, item) {
                var aitem = item;
                aitem.updateView(this.actorData, index);
            };
            /**
             * 播放一个特效
             */
            ArtistAssetPanel.prototype.playeffect = function () {
                this.m_t0.play();
            };
            return ArtistAssetPanel;
        }(PfSkin.ArtistAssetPanelStruct));
        PfSkin.ArtistAssetPanel = ArtistAssetPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetPanel.js.map
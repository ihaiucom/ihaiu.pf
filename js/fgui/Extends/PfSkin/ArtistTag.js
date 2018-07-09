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
        var ArtistTag = /** @class */ (function (_super) {
            __extends(ArtistTag, _super);
            function ArtistTag() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param char 更新擅长角色类型
             */
            ArtistTag.prototype.updateViewByCharacter = function (char) {
                this.title = Game.config.property.getConfig(char.character).zh_cn_name;
                this.tip = GlobalConfig.getValue4(1020 + char.lv);
                this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "biaoqian" + char.lv);
            };
            /**
             *
             * @param feature 更新擅长剧本元素
             */
            ArtistTag.prototype.updateViewByFeatureType = function (feature) {
                this.title = Game.config.property.getConfig(feature.feature).zh_cn_name;
                this.tip = GlobalConfig.getValue4(1020 + feature.lv);
                this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "biaoqian" + feature.lv);
            };
            /**
             *
             * @param story 更新擅长剧本风格
             */
            ArtistTag.prototype.updateViewByStoryType = function (story) {
                this.title = Game.config.property.getConfig(story.story).zh_cn_name;
                this.tip = GlobalConfig.getValue4(1020 + story.lv);
                this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "biaoqian" + story.lv);
            };
            return ArtistTag;
        }(PfSkin.ArtistTagStruct));
        PfSkin.ArtistTag = ArtistTag;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTag.js.map
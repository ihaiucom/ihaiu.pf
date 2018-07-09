/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var ItemConfig = /** @class */ (function (_super) {
        __extends(ItemConfig, _super);
        function ItemConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ItemConfig.prototype, "name", {
            get: function () {
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfig.prototype, "item_des", {
            get: function () {
                return this.zh_cn_item_des;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfig.prototype, "avatarConfig", {
            get: function () {
                return Game.config.avatar.getConfig(this.icon);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfig.prototype, "iconUrl", {
            get: function () {
                if (this.avatarConfig) {
                    return this.avatarConfig.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return ItemConfig;
    }(configs.ItemConfigStruct));
    configs.ItemConfig = ItemConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ItemConfig.js.map
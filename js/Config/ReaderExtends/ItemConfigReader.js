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
    var ItemConfigReader = /** @class */ (function (_super) {
        __extends(ItemConfigReader, _super);
        function ItemConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 根据物品类型获取物品列表		
        ItemConfigReader.prototype.getConfigsByType = function () {
            var itemTypes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                itemTypes[_i] = arguments[_i];
            }
            var list = [];
            var items = this.getConfigList();
            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < itemTypes.length; j++) {
                    if (items[i].type == itemTypes[j]) {
                        list.push(items[i]);
                        break;
                    }
                }
            }
            return list;
        };
        return ItemConfigReader;
    }(configs.ItemConfigReaderStruct));
    configs.ItemConfigReader = ItemConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ItemConfigReader.js.map
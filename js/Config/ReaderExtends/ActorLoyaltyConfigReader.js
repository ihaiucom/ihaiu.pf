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
    var ActorLoyaltyConfigReader = /** @class */ (function (_super) {
        __extends(ActorLoyaltyConfigReader, _super);
        function ActorLoyaltyConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *获取忠诚度id
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLoyaltyConfigReader.prototype.getLoyaltyId = function (id, lv) {
            return id * 100 + lv;
        };
        /**
         *获取忠诚度配置
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLoyaltyConfigReader.prototype.getConfigByIdLv = function (id, lv) {
            var id = this.getLoyaltyId(id, lv);
            return this.getConfig(id);
        };
        return ActorLoyaltyConfigReader;
    }(configs.ActorLoyaltyConfigReaderStruct));
    configs.ActorLoyaltyConfigReader = ActorLoyaltyConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLoyaltyConfigReader.js.map
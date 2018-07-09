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
    var ActorAssetsConfigReader = /** @class */ (function (_super) {
        __extends(ActorAssetsConfigReader, _super);
        function ActorAssetsConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 添加配置
        ActorAssetsConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
        };
        ActorAssetsConfigReader.prototype.onGameLoadedAll = function () {
        };
        ActorAssetsConfigReader.prototype.getActorListByAsset = function (itemId) {
            var actorList = [];
            var configList = this.getConfigList();
            for (var index = 0; index < configList.length; index++) {
                var cfg = configList[index];
                if (cfg && cfg.item == itemId) {
                    var actorId = Number(cfg.id.toString().substr(0, 4));
                    if (actorList.indexOf(actorId) == -1) {
                        actorList.push(actorId);
                    }
                }
            }
            return actorList;
        };
        /**
         *获取等级id
         * @param id 艺人id
         * @param type 类型
         * @param lv 等级
         */
        ActorAssetsConfigReader.prototype.getLevelId = function (id, type, lv) {
            return id * 100000 + type * 1000 + lv;
        };
        /**
         *获取等级配置
         * @param id 艺人id
         * @param type 类型
         * @param lv 等级
         */
        ActorAssetsConfigReader.prototype.getConfigByIdLvType = function (id, type, lv) {
            var id = this.getLevelId(id, type, lv);
            return this.getConfig(id);
        };
        return ActorAssetsConfigReader;
    }(configs.ActorAssetsConfigReaderStruct));
    configs.ActorAssetsConfigReader = ActorAssetsConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAssetsConfigReader.js.map
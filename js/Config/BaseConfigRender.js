var configs;
(function (configs) {
    var BaseConfigRender = /** @class */ (function () {
        function BaseConfigRender() {
            // 配置字典
            this.configs = new Dictionary();
        }
        // 获取配置列表
        BaseConfigRender.prototype.getConfigList = function () {
            return this.configs.getValues();
        };
        // 获取配置
        BaseConfigRender.prototype.getConfig = function (id) {
            if (!this.configs.hasKey(id)) {
                console.log(this.path + " \u6CA1\u6709 id=" + id + " \u7684\u914D\u7F6E");
            }
            return this.configs.getValue(id);
        };
        // 添加配置
        BaseConfigRender.prototype.addConfig = function (config) {
            this.configs.add(config.id, config);
        };
        // 加载配置
        BaseConfigRender.prototype.load = function (configLoader, onComplete) {
        };
        // 重新加载配置
        BaseConfigRender.prototype.reload = function (configLoader, onComplete) {
        };
        // 游戏加载完所有
        BaseConfigRender.prototype.onGameLoadedAll = function () {
        };
        // 清理
        BaseConfigRender.prototype.clear = function () {
            this.configs.clear();
        };
        return BaseConfigRender;
    }());
    configs.BaseConfigRender = BaseConfigRender;
})(configs || (configs = {}));
//# sourceMappingURL=BaseConfigRender.js.map
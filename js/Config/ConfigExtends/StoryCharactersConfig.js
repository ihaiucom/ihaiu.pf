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
    var StoryCharactersConfig = /** @class */ (function (_super) {
        __extends(StoryCharactersConfig, _super);
        function StoryCharactersConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StoryCharactersConfig.prototype, "getSex", {
            get: function () {
                return this.type_pic;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getType", {
            get: function () {
                var result = "";
                switch (this.type) {
                    case 2101:
                        result = "主角";
                        break;
                    case 2102:
                        result = "男主角";
                        break;
                    case 2103:
                        result = "女主角";
                        break;
                    case 2104:
                        result = "配角";
                        break;
                    case 2105:
                        result = "男配角";
                        break;
                    case 2106:
                        result = "女配角";
                        break;
                    case 2107:
                        result = "反派";
                        break;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getName", {
            get: function () {
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getDes", {
            get: function () {
                return this.zh_cn_introduction;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getReqShowTypeToString", {
            get: function () {
                if (this.show_type === 0) {
                    return "";
                }
                return Game.config.property.getConfig(this.show_type).name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getReqageType", {
            get: function () {
                return this.age_type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "getReqageTypeToString", {
            get: function () {
                if (this.age_type === 0) {
                    return "";
                }
                return Game.config.property.getConfig(this.age_type).name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "geteffect", {
            get: function () {
                var result = new Array(this.effect.length);
                for (var index = 0; index < this.effect.length; index++) {
                    result[index] = Game.config.property.getConfig(this.effect[index]).name;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfig.prototype, "geteffectVal", {
            get: function () {
                return this.effect;
            },
            enumerable: true,
            configurable: true
        });
        return StoryCharactersConfig;
    }(configs.StoryCharactersConfigStruct));
    configs.StoryCharactersConfig = StoryCharactersConfig;
})(configs || (configs = {}));
//# sourceMappingURL=StoryCharactersConfig.js.map
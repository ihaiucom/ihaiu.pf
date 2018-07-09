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
    var CityConfigReader = /** @class */ (function (_super) {
        __extends(CityConfigReader, _super);
        function CityConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CityConfigReader.prototype.getCitysByCountry = function (countryId) {
            var retLst = [];
            for (var key in this.configs) {
                if (this.configs.hasOwnProperty(key)) {
                    var cfg = this.configs[key];
                    if (cfg.countryId == countryId) {
                        retLst.push(cfg);
                    }
                }
            }
            return retLst;
        };
        CityConfigReader.prototype.GetCityRequire = function (id) {
            var retLst = [];
            var cfg = this.getConfig(id);
            var list = [];
            if (cfg.envoy1_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.envoy1_sex });
            if (cfg.envoy1_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.envoy1_age });
            if (cfg.envoy1_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.envoy1_Continents });
            if (cfg.envoy1_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.envoy1_type });
            if (cfg.envoy1_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.envoy1_art });
            if (cfg.envoy1_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.envoy1_entertainment });
            if (cfg.envoy1_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.envoy1_performance });
            if (cfg.envoy1_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.envoy1_plot });
            if (cfg.envoy1_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.envoy1_scene });
            retLst.push(list);
            list = [];
            if (cfg.envoy2_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.envoy2_sex });
            if (cfg.envoy2_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.envoy2_age });
            if (cfg.envoy2_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.envoy2_Continents });
            if (cfg.envoy2_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.envoy2_type });
            if (cfg.envoy2_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.envoy2_art });
            if (cfg.envoy2_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.envoy2_entertainment });
            if (cfg.envoy2_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.envoy2_performance });
            if (cfg.envoy2_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.envoy2_plot });
            if (cfg.envoy2_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.envoy2_scene });
            retLst.push(list);
            list = [];
            if (cfg.envoy3_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.envoy3_sex });
            if (cfg.envoy3_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.envoy3_age });
            if (cfg.envoy3_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.envoy3_Continents });
            if (cfg.envoy3_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.envoy3_type });
            if (cfg.envoy3_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.envoy3_art });
            if (cfg.envoy3_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.envoy3_entertainment });
            if (cfg.envoy3_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.envoy3_performance });
            if (cfg.envoy3_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.envoy3_plot });
            if (cfg.envoy3_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.envoy3_scene });
            retLst.push(list);
            list = [];
            if (cfg.envoy4_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.envoy4_sex });
            if (cfg.envoy4_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.envoy4_age });
            if (cfg.envoy4_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.envoy4_Continents });
            if (cfg.envoy4_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.envoy4_type });
            if (cfg.envoy4_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.envoy4_art });
            if (cfg.envoy4_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.envoy4_entertainment });
            if (cfg.envoy4_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.envoy4_performance });
            if (cfg.envoy4_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.envoy4_plot });
            if (cfg.envoy4_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.envoy4_scene });
            retLst.push(list);
            list = [];
            if (cfg.envoy5_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.envoy5_sex });
            if (cfg.envoy5_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.envoy5_age });
            if (cfg.envoy5_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.envoy5_Continents });
            if (cfg.envoy5_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.envoy5_type });
            if (cfg.envoy5_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.envoy5_art });
            if (cfg.envoy5_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.envoy5_entertainment });
            if (cfg.envoy5_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.envoy5_performance });
            if (cfg.envoy5_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.envoy5_plot });
            if (cfg.envoy5_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.envoy5_scene });
            retLst.push(list);
            return retLst;
        };
        return CityConfigReader;
    }(configs.CityConfigReaderStruct));
    configs.CityConfigReader = CityConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=CityConfigReader.js.map
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
    var ActorLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorLevelConfigReaderStruct, _super);
        function ActorLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "ActorLevel";
            return _this;
        }
        ActorLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.culture = csvGetInt(csv, this.GetHeadIndex("culture"));
            config.assets = csvGetInt(csv, this.GetHeadIndex("assets"));
            config.stamina = csvGetInt(csv, this.GetHeadIndex("stamina"));
            config.paycheck = csvGetInt(csv, this.GetHeadIndex("paycheck"));
            config.spectacle = csvGetInt(csv, this.GetHeadIndex("spectacle"));
            config.perform = csvGetInt(csv, this.GetHeadIndex("perform"));
            config.plot = csvGetInt(csv, this.GetHeadIndex("plot"));
            config.art = csvGetInt(csv, this.GetHeadIndex("art"));
            config.entertainment = csvGetInt(csv, this.GetHeadIndex("entertainment"));
            config.cn_tips = csvGetString(csv, this.GetHeadIndex("cn_tips"));
            this.addConfig(config);
        };
        return ActorLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorLevelConfigReaderStruct = ActorLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLevelConfigReaderStruct.js.map
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
    var BlockLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BlockLevelConfigReaderStruct, _super);
        function BlockLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "BlockLevel";
            return _this;
        }
        BlockLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BlockLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            config.upgrade_req = csvGetInt(csv, this.GetHeadIndex("upgrade_req"));
            config.upgrade_menu = toIntArray(csvGetString(csv, this.GetHeadIndex("upgrade_menu")));
            config.upgrade_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("upgrade_reward")));
            config.daily_reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("daily_reward")));
            config.cinema = toIntArray(csvGetString(csv, this.GetHeadIndex("cinema")));
            config.level_multiple = csvGetInt(csv, this.GetHeadIndex("level_multiple"));
            config.level_con = csvGetInt(csv, this.GetHeadIndex("level_con"));
            config.theater_level_con = csvGetInt(csv, this.GetHeadIndex("theater_level_con"));
            config.good = csvGetInt(csv, this.GetHeadIndex("good"));
            config.big_sell = csvGetInt(csv, this.GetHeadIndex("big_sell"));
            config.great_sell = csvGetInt(csv, this.GetHeadIndex("great_sell"));
            config.myth_sell = csvGetInt(csv, this.GetHeadIndex("myth_sell"));
            config.marvel_sell = csvGetInt(csv, this.GetHeadIndex("marvel_sell"));
            config.zh_cn_current_msg = toStringArray(csvGetString(csv, this.GetHeadIndex("zh_cn_current_msg")));
            config.zh_cn_next_msg = toStringArray(csvGetString(csv, this.GetHeadIndex("zh_cn_next_msg")));
            this.addConfig(config);
        };
        return BlockLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BlockLevelConfigReaderStruct = BlockLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BlockLevelConfigReaderStruct.js.map
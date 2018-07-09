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
    var MeetingGameConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MeetingGameConfigReaderStruct, _super);
        function MeetingGameConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "MeetingGame";
            return _this;
        }
        MeetingGameConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MeetingGameConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetString(csv, this.GetHeadIndex("type"));
            config.result = csvGetInt(csv, this.GetHeadIndex("result"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.rate = csvGetInt(csv, this.GetHeadIndex("rate"));
            config.times = csvGetString(csv, this.GetHeadIndex("times"));
            this.addConfig(config);
        };
        return MeetingGameConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MeetingGameConfigReaderStruct = MeetingGameConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MeetingGameConfigReaderStruct.js.map
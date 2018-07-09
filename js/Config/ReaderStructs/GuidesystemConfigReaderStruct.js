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
    var GuidesystemConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GuidesystemConfigReaderStruct, _super);
        function GuidesystemConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "Guidesystem";
            return _this;
        }
        GuidesystemConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GuidesystemConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.group = csvGetInt(csv, this.GetHeadIndex("group"));
            config.order = csvGetInt(csv, this.GetHeadIndex("order"));
            config.path = csvGetString(csv, this.GetHeadIndex("path"));
            config.assistant = csvGetBoolean(csv, this.GetHeadIndex("assistant"));
            config.position = configs.DTVector2.parse(csvGetString(csv, this.GetHeadIndex("position")));
            config.cn_content = csvGetString(csv, this.GetHeadIndex("cn_content"));
            config.en_content = csvGetString(csv, this.GetHeadIndex("en_content"));
            config.finger = csvGetBoolean(csv, this.GetHeadIndex("finger"));
            config.f_direction = csvGetInt(csv, this.GetHeadIndex("f_direction"));
            config.halo = csvGetBoolean(csv, this.GetHeadIndex("halo"));
            config.storyline = csvGetBoolean(csv, this.GetHeadIndex("storyline"));
            config.storyline_id = csvGetInt(csv, this.GetHeadIndex("storyline_id"));
            this.addConfig(config);
        };
        return GuidesystemConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GuidesystemConfigReaderStruct = GuidesystemConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GuidesystemConfigReaderStruct.js.map
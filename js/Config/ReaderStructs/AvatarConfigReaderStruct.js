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
    var AvatarConfigReaderStruct = /** @class */ (function (_super) {
        __extends(AvatarConfigReaderStruct, _super);
        function AvatarConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "Avatar";
            return _this;
        }
        AvatarConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.AvatarConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.body_icon = csvGetString(csv, this.GetHeadIndex("body_icon"));
            config.icon = csvGetString(csv, this.GetHeadIndex("icon"));
            config.piece_icon = csvGetString(csv, this.GetHeadIndex("piece_icon"));
            config.model_skin = csvGetString(csv, this.GetHeadIndex("model_skin"));
            config.model_bones = csvGetString(csv, this.GetHeadIndex("model_bones"));
            config.bg_pic = csvGetString(csv, this.GetHeadIndex("bg_pic"));
            this.addConfig(config);
        };
        return AvatarConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.AvatarConfigReaderStruct = AvatarConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=AvatarConfigReaderStruct.js.map
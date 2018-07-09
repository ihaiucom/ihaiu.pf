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
    var TaskConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TaskConfigReaderStruct, _super);
        function TaskConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "Task";
            return _this;
        }
        TaskConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TaskConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.unlock = csvGetInt(csv, this.GetHeadIndex("unlock"));
            config.task_movie = csvGetInt(csv, this.GetHeadIndex("task_movie"));
            config.task_actor_level = csvGetInt(csv, this.GetHeadIndex("task_actor_level"));
            config.task_actor_train = csvGetInt(csv, this.GetHeadIndex("task_actor_train"));
            config.task_actor_gift = csvGetInt(csv, this.GetHeadIndex("task_actor_gift"));
            config.task_actor_skill = csvGetInt(csv, this.GetHeadIndex("task_actor_skill"));
            config.task_skill_level = csvGetInt(csv, this.GetHeadIndex("task_skill_level"));
            config.task_business = csvGetInt(csv, this.GetHeadIndex("task_business"));
            config.task_meeting = csvGetInt(csv, this.GetHeadIndex("task_meeting"));
            config.task_fans = csvGetInt(csv, this.GetHeadIndex("task_fans"));
            config.task_publicize = csvGetInt(csv, this.GetHeadIndex("task_publicize"));
            config.task_city = csvGetInt(csv, this.GetHeadIndex("task_city"));
            config.task_rank_all = csvGetInt(csv, this.GetHeadIndex("task_rank_all"));
            config.task_rank_movie = csvGetInt(csv, this.GetHeadIndex("task_rank_movie"));
            config.task_game_gift = csvGetInt(csv, this.GetHeadIndex("task_game_gift"));
            config.task_treasure = csvGetInt(csv, this.GetHeadIndex("task_treasure"));
            config.task_produce = csvGetInt(csv, this.GetHeadIndex("task_produce"));
            config.task_order = csvGetInt(csv, this.GetHeadIndex("task_order"));
            config.task_income = csvGetInt(csv, this.GetHeadIndex("task_income"));
            config.task_attention = csvGetInt(csv, this.GetHeadIndex("task_attention"));
            config.task_dollar = csvGetInt(csv, this.GetHeadIndex("task_dollar"));
            config.task_cotask = csvGetInt(csv, this.GetHeadIndex("task_cotask"));
            config.task_coorder = csvGetInt(csv, this.GetHeadIndex("task_coorder"));
            config.reward = csvGetInt(csv, this.GetHeadIndex("reward"));
            config.Complete = csvGetInt(csv, this.GetHeadIndex("Complete"));
            this.addConfig(config);
        };
        return TaskConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TaskConfigReaderStruct = TaskConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TaskConfigReaderStruct.js.map
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
    var MaintaskConfigStruct = /** @class */ (function (_super) {
        __extends(MaintaskConfigStruct, _super);
        function MaintaskConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MaintaskConfigStruct.prototype, "name", {
            get: function () {
                return this.cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaintaskConfigStruct.prototype, "info", {
            get: function () {
                return this.cn_info;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaintaskConfigStruct.prototype, "rinfo", {
            get: function () {
                return this.cn_rinfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaintaskConfigStruct.prototype, "content", {
            get: function () {
                return this.cn_content;
            },
            enumerable: true,
            configurable: true
        });
        return MaintaskConfigStruct;
    }(configs.BaseConfig));
    configs.MaintaskConfigStruct = MaintaskConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MaintaskConfigStruct.js.map
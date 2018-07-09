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
    var DTItemNum = /** @class */ (function (_super) {
        __extends(DTItemNum, _super);
        function DTItemNum() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTItemNum.parse = function (txt) {
            var csv = toStringArray(txt);
            if (csv.length < 2)
                return null;
            var config = new DTItemNum();
            config.itemId = csvGetInt(csv, 0);
            config.itemNum = csvGetInt(csv, 1);
            return config;
        };
        DTItemNum.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                var item = DTItemNum.parse(csv[i]);
                if (item) {
                    list.push(DTItemNum.parse(csv[i]));
                }
            }
            return list;
        };
        return DTItemNum;
    }(configs.DTItemNumStruct));
    configs.DTItemNum = DTItemNum;
})(configs || (configs = {}));
//# sourceMappingURL=DTItemNum.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
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
var fgui;
(function (fgui) {
    var PfSkin;
    (function (PfSkin) {
        var LabItem = /** @class */ (function (_super) {
            __extends(LabItem, _super);
            function LabItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(LabItem.prototype, "normalNumb", {
                set: function (num) {
                    var str = fgui.PfSkin.LabAsset.numberNormalization(num);
                    this.title = str;
                },
                enumerable: true,
                configurable: true
            });
            LabItem.prototype.normalNumbs = function (fmat, numbs) {
                var str = (_a = fgui.PfSkin.LabAsset).arrayNumberNormalization.apply(_a, [fmat].concat(numbs));
                this.title = str;
                var _a;
            };
            return LabItem;
        }(PfSkin.LabItemStruct));
        PfSkin.LabItem = LabItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem.js.map
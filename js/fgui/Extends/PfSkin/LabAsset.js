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
        var LabAsset = /** @class */ (function (_super) {
            __extends(LabAsset, _super);
            function LabAsset() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(LabAsset.prototype, "normalNumb", {
                set: function (num) {
                    var str = fgui.PfSkin.LabAsset.numberNormalization(num);
                    this.title = str;
                },
                enumerable: true,
                configurable: true
            });
            LabAsset.prototype.normalNumbs = function (fmat) {
                var numbs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    numbs[_i - 1] = arguments[_i];
                }
                var str = (_a = fgui.PfSkin.LabAsset).arrayNumberNormalization.apply(_a, [fmat].concat(numbs));
                this.title = str;
                var _a;
            };
            LabAsset.arrayNumberNormalization = function (fmat) {
                var numbs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    numbs[_i - 1] = arguments[_i];
                }
                var args = [];
                for (var index = 0; index < numbs.length; index++) {
                    var num = numbs[index];
                    args.push(fgui.PfSkin.LabAsset.numberNormalization(num));
                }
                return fmat.format.apply(fmat, args);
            };
            LabAsset.numberNormalization = function (num) {
                var str = "";
                if (num > 1000) {
                    str = "K";
                    num = Math.floor(num / 100) / 10;
                }
                if (num > 1000) {
                    str = "M";
                    num = Math.floor(num / 100) / 10;
                }
                return num + str;
            };
            return LabAsset;
        }(PfSkin.LabAssetStruct));
        PfSkin.LabAsset = LabAsset;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabAsset.js.map
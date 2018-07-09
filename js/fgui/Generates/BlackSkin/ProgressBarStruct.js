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
    var BlackSkin;
    (function (BlackSkin) {
        var ProgressBarStruct = /** @class */ (function (_super) {
            __extends(ProgressBarStruct, _super);
            function ProgressBarStruct() {
                return _super.call(this) || this;
            }
            ProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "ProgressBar"));
            };
            ProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            ProgressBarStruct.URL = "ui://s1uxc7tgjmop2u";
            ProgressBarStruct.DependPackages = ["BlackSkin"];
            return ProgressBarStruct;
        }(fairygui.GProgressBar));
        BlackSkin.ProgressBarStruct = ProgressBarStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarStruct.js.map
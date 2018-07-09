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
        var Slider1Struct = /** @class */ (function (_super) {
            __extends(Slider1Struct, _super);
            function Slider1Struct() {
                return _super.call(this) || this;
            }
            Slider1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "Slider1"));
            };
            Slider1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_grip = (this.getChild("grip"));
            };
            Slider1Struct.URL = "ui://s33x8418jazc1mr";
            Slider1Struct.DependPackages = ["PfSkin"];
            return Slider1Struct;
        }(fairygui.GSlider));
        PfSkin.Slider1Struct = Slider1Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Slider1Struct.js.map
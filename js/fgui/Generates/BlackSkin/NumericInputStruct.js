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
        var NumericInputStruct = /** @class */ (function (_super) {
            __extends(NumericInputStruct, _super);
            function NumericInputStruct() {
                return _super.call(this) || this;
            }
            NumericInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "NumericInput"));
            };
            NumericInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_grayed = this.getController("grayed");
                this.m_holder = (this.getChild("holder"));
                this.m_title = (this.getChild("title"));
            };
            NumericInputStruct.URL = "ui://s1uxc7tgjmop2l";
            NumericInputStruct.DependPackages = ["BlackSkin"];
            return NumericInputStruct;
        }(fairygui.GLabel));
        BlackSkin.NumericInputStruct = NumericInputStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NumericInputStruct.js.map
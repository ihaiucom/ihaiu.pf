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
    var Main;
    (function (Main) {
        var Btn_tipsStruct = /** @class */ (function (_super) {
            __extends(Btn_tipsStruct, _super);
            function Btn_tipsStruct() {
                return _super.call(this) || this;
            }
            Btn_tipsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_tips"));
            };
            Btn_tipsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_tipsStruct.URL = "ui://7ecreso0ua2b2x";
            Btn_tipsStruct.DependPackages = ["Main"];
            return Btn_tipsStruct;
        }(fairygui.GButton));
        Main.Btn_tipsStruct = Btn_tipsStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_tipsStruct.js.map
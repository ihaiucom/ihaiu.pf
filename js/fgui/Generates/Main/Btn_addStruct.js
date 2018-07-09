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
        var Btn_addStruct = /** @class */ (function (_super) {
            __extends(Btn_addStruct, _super);
            function Btn_addStruct() {
                return _super.call(this) || this;
            }
            Btn_addStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_add"));
            };
            Btn_addStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_addStruct.URL = "ui://7ecreso08zgr35";
            Btn_addStruct.DependPackages = ["Main"];
            return Btn_addStruct;
        }(fairygui.GButton));
        Main.Btn_addStruct = Btn_addStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_addStruct.js.map
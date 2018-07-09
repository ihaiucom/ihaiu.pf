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
        var Btn_marketStruct = /** @class */ (function (_super) {
            __extends(Btn_marketStruct, _super);
            function Btn_marketStruct() {
                return _super.call(this) || this;
            }
            Btn_marketStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_market"));
            };
            Btn_marketStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            Btn_marketStruct.URL = "ui://7ecreso0ua2b2r";
            Btn_marketStruct.DependPackages = ["Main"];
            return Btn_marketStruct;
        }(fairygui.GButton));
        Main.Btn_marketStruct = Btn_marketStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_marketStruct.js.map
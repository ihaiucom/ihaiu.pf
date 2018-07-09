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
        var Btn_mailStruct = /** @class */ (function (_super) {
            __extends(Btn_mailStruct, _super);
            function Btn_mailStruct() {
                return _super.call(this) || this;
            }
            Btn_mailStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_mail"));
            };
            Btn_mailStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_mailStruct.URL = "ui://7ecreso0ua2b2v";
            Btn_mailStruct.DependPackages = ["Main"];
            return Btn_mailStruct;
        }(fairygui.GButton));
        Main.Btn_mailStruct = Btn_mailStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_mailStruct.js.map
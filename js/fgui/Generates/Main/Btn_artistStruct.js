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
        var Btn_artistStruct = /** @class */ (function (_super) {
            __extends(Btn_artistStruct, _super);
            function Btn_artistStruct() {
                return _super.call(this) || this;
            }
            Btn_artistStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_artist"));
            };
            Btn_artistStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            Btn_artistStruct.URL = "ui://7ecreso0ua2b2p";
            Btn_artistStruct.DependPackages = ["Main"];
            return Btn_artistStruct;
        }(fairygui.GButton));
        Main.Btn_artistStruct = Btn_artistStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_artistStruct.js.map